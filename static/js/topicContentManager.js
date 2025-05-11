class TopicContentManager {
  constructor(topicName) {
    this.topicName = topicName;
    this.content = null;
  }

  async loadContent() {
    try {
      const response = await fetch(`../static/data/${this.topicName}/content.json`);
      this.content = await response.json();
    } catch (error) {
      console.error("Error loading topic content:", error);
    }
  }

  renderSection(sectionId) {
    const section = this.content.sections[sectionId];
    if (!section) 
      return "";
    
    let html = "";

    // Render terms table if it exists
    if (section.terms) {
      html += `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Term</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${section.terms.map(term => `
                            <tr>
                                <td>${term.term}</td>
                                <td>${term.description}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>`;
    }

    // Render resources if they exist
    if (section.resources) {
      html += `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Resource</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${section.resources.map(resource => `
                            <tr>
                                <td>
                                    <a href="${resource.url}" rel="noopener noreferrer" target="_blank">
                                        ${resource.title}
                                    </a>
                                </td>
                                <td>${resource.description}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>`;
    }

    return html;
  }

  updateSection(sectionId, content) {
    if (!this.content.sections[sectionId]) {
      this.content.sections[sectionId] = {};
    }
    Object.assign(this.content.sections[sectionId], content);
    this.saveContent();
  }

  async saveContent() {
    try {
      const response = await fetch(`../static/data/${this.topicName}/content.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.content)
      });
      if (!response.ok) {
        throw new Error("Failed to save content");
      }
    } catch (error) {
      console.error("Error saving topic content:", error);
    }
  }
}

// Settings management
class TopicSettings {
  constructor() {
    this.settings = {
      autoSave: true,
      livePreview: true,
      editorTheme: "light",
      fontSize: "14px"
    };
    this.loadSettings();
  }

  loadSettings() {
    const savedSettings = localStorage.getItem("topicEditorSettings");
    if (savedSettings) {
      this.settings = {
        ...this.settings,
        ...JSON.parse(savedSettings)
      };
    }
  }

  saveSettings() {
    localStorage.setItem("topicEditorSettings", JSON.stringify(this.settings));
  }

  updateSetting(key, value) {
    this.settings[key] = value;
    this.saveSettings();
  }

  getSettings() {
    return this.settings;
  }
}

// Add settings interface to editor
TopicEditor.prototype.showSettings = function () {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editor Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="editor-settings-form">
                        <div class="mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="autoSave" 
                                    ${this.settings.autoSave
    ? "checked"
    : ""}>
                                <label class="form-check-label" for="autoSave">Auto Save</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="livePreview"
                                    ${
  this.settings.livePreview
    ? "checked"
    : ""}>
                                <label class="form-check-label" for="livePreview">Live Preview</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Editor Theme</label>
                            <select class="form-select" id="editorTheme">
                                <option value="light" ${
  this.settings.editorTheme === "light"
    ? "selected"
    : ""}>Light</option>
                                <option value="dark" ${
  this.settings.editorTheme === "dark"
    ? "selected"
    : ""}>Dark</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Font Size</label>
                            <select class="form-select" id="fontSize">
                                <option value="12px" ${
  this.settings.fontSize === "12px"
    ? "selected"
    : ""}>Small</option>
                                <option value="14px" ${
  this.settings.fontSize === "14px"
    ? "selected"
    : ""}>Medium</option>
                                <option value="16px" ${
  this.settings.fontSize === "16px"
    ? "selected"
    : ""}>Large</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary save-settings">Save changes</button>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
  const modalInstance = new bootstrap.Modal(modal);

  // Handle settings changes
  modal.querySelector(".save-settings").onclick = () => {
    const form = modal.querySelector("#editor-settings-form");
    this.settings.autoSave = form.querySelector("#autoSave").checked;
    this.settings.livePreview = form.querySelector("#livePreview").checked;
    this.settings.editorTheme = form.querySelector("#editorTheme").value;
    this.settings.fontSize = form.querySelector("#fontSize").value;
    this.saveSettings();
    modalInstance.hide();
  };

  modalInstance.show();

  // Cleanup
  modal.addEventListener("hidden.bs.modal", () => {
    modal.remove();
  });
};

// Initialize settings
TopicEditor.prototype.initializeSettings = function () {
  this.settings = new TopicSettings();

  // Add settings button to the page
  const settingsBtn = document.createElement("button");
  settingsBtn.className = "btn btn-outline-secondary editor-settings-btn";
  settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
  settingsBtn.onclick = () => this.showSettings();
  document.querySelector(".topic-nav").appendChild(settingsBtn);
};