class TopicManager {
  constructor() {
    this.templateGenerator = new TopicTemplateGenerator();
    this.addTopicButton();
  }

  addTopicButton() {
    const btn = document.createElement("button");
    btn.className = "btn btn-primary new-topic-btn";
    btn.innerHTML = '<i class="fas fa-plus"></i> New Topic';
    btn.onclick = () => this.showNewTopicModal();

    // Add button to the research section
    const researchSection = document.querySelector("#research");
    if (researchSection) {
      researchSection.insertBefore(btn, researchSection.firstChild);
    }
  }

  showNewTopicModal() {
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create New Topic</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="new-topic-form">
                            <div class="mb-3">
                                <label class="form-label">Topic Name</label>
                                <input type="text" class="form-control" id="topicName" 
                                    placeholder="e.g., value_based_care">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Custom Sections</label>
                                <div id="customSections">
                                    <!-- Custom sections will be added here -->
                                </div>
                                <button type="button" class="btn btn-outline-secondary btn-sm mt-2"
                                    onclick="topicManager.addCustomSection()">
                                    <i class="fas fa-plus"></i> Add Section
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="topicManager.createTopic()">
                            Create Topic
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener("hidden.bs.modal", () => {
      modal.remove();
    });
  }

  addCustomSection() {
    const container = document.getElementById("customSections");
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "custom-section mb-3 p-3 border rounded";
    sectionDiv.innerHTML = `
            <div class="row g-3">
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Section ID" name="sectionId">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Section Title" name="sectionTitle">
                </div>
                <div class="col-md-3">
                    <select class="form-select" name="sectionType">
                        <option value="terms">Terms</option>
                        <option value="resources">Resources</option>
                        <option value="content">Basic Content</option>
                    </select>
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-outline-danger btn-sm" 
                        onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
    container.appendChild(sectionDiv);
  }

  async createTopic() {
    const form = document.getElementById("new-topic-form");
    const topicName = form.querySelector("#topicName").value;

    const customSections = Array.from(form.querySelectorAll(".custom-section")).map(section => ({id: section.querySelector('[name="sectionId"]').value, title: section.querySelector('[name="sectionTitle"]').value, type: section.querySelector('[name="sectionType"]').value, description: "Custom section"}));

    const success = await this.templateGenerator.createNewTopic(topicName, customSections);

    if (success) {
      const modal = bootstrap.Modal.getInstance(form.closest(".modal"));
      modal.hide();
      window.location.href = `/topics/${topicName}.html`;
    }
  }
}