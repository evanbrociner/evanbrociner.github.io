// Topic Page Functionality
class TopicPage {
  constructor(config = {}) {
    this.config = {
      navSelector: ".topic-nav-link",
      sectionSelector: ".topic-section",
      progressBarId: "readingProgress",
      backToTopId: "backToTop",
      scrollOffset: 100,
      ...config
    };

    // Track current section
    this.currentSection = null;
    this.sections = [];
    this.navItems = [];

    this.init();
  }

  init() {
    this.sections = Array.from(document.querySelectorAll(this.config.sectionSelector));
    this.navItems = Array.from(document.querySelectorAll(this.config.navSelector));

    this.setupScrollHandling();
    this.setupNavigation();
    this.setupBackToTop();
    this.setupTableOfContents();
    this.setupKeyboardNavigation();
    this.enhanceResourceLinks();
  }

  setupScrollHandling() {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateReadingProgress();
          this.updateActiveNavigation();
          this.toggleBackToTop();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateReadingProgress() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById(this.config.progressBarId).style.width = `${scrolled}%`;
  }

  updateActiveNavigation() {
    const scrollPosition = window.scrollY + this.config.scrollOffset;

    // Find the current section
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      if (scrollPosition >= section.offsetTop) {
        const newSection = section.id;
        if (this.currentSection !== newSection) {
          this.currentSection = newSection;
          this.updateNavigationState();
        }
        break;
      }
    }
  }

  updateNavigationState() {
    this.navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(this.currentSection)) {
        link.classList.add("active");
      }
    });
  }

  setupNavigation() {
    this.navItems.forEach(link => {
      link.addEventListener("click", e => {
        if (link.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          this.scrollToSection(targetId);
        }
      });
    });
  }

  scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - this.config.scrollOffset / 2;
      window.scrollTo({top: targetPosition, behavior: "smooth"});
    }
  }

  setupBackToTop() {
    const backToTop = document.getElementById(this.config.backToTopId);
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
      });
    }
  }

  setupTableOfContents() {
    const toc = this.generateTOC();
    const nav = document.querySelector(".topic-nav");
    if (nav && toc) {
      nav.appendChild(toc);
    }
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", e => {
      // Arrow key navigation between sections
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const currentIndex = this.sections.findIndex(section => section.id === this.currentSection);
        if (currentIndex !== -1) {
          const newIndex = e.key === "ArrowDown"
            ? Math.min(currentIndex + 1, this.sections.length - 1)
            : Math.max(currentIndex - 1, 0);

          const targetSection = this.sections[newIndex];
          if (targetSection) {
            this.scrollToSection(`#${targetSection.id}`);
          }
        }
      }
    });
  }

  enhanceResourceLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      // Add external link icon
      if (!link.querySelector("i")) {
        const icon = document.createElement("i");
        icon.className = "fas fa-external-link-alt";
        link.appendChild(icon);
      }

      // Add title attribute if missing
      if (!link.title) {
        link.title = `Visit ${link.hostname}`;
      }

      // Add target and rel attributes for security
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  // Utility method to generate table of contents
  generateTOC() {
    const tocList = document.createElement("ul");
    tocList.className = "topic-nav-list";

    this.sections.forEach(section => {
      const header = section.querySelector("h2, h3, h4");
      if (header) {
        const li = document.createElement("li");
        li.className = "topic-nav-item";

        const link = document.createElement("a");
        link.className = "topic-nav-link";
        link.href = `#${section.id}`;
        link.innerHTML = `<i class="fas fa-angle-right me-2"></i>${header.textContent}`;

        li.appendChild(link);
        tocList.appendChild(li);
      }
    });

    return tocList;
  }
}

// Content Management
class TopicEditor {
  constructor() {
    this.currentTopic = window.location.pathname.split("/").pop().replace(".html", "");
    this.contentManager = new TopicContentManager(this.currentTopic);
    this.setupEditorButtons();
  }

  setupEditorButtons() {
    document.querySelectorAll(".topic-section").forEach(section => {
      const sectionId = section.id;
      const editButton = document.createElement("button");
      editButton.className = "btn btn-sm btn-outline-primary edit-section-btn";
      editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
      editButton.onclick = () => this.openEditor(sectionId, section);

      // Insert edit button after section header
      const header = section.querySelector(".topic-section-header");
      if (header) {
        header.parentNode.insertBefore(editButton, header.nextSibling);
      }
    });
  }

  openEditor(sectionId, section) {
    const content = section.querySelector(".topic-card").innerHTML;

    // Create modal for editing
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit ${sectionId} Section</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <textarea id="section-editor" class="form-control" rows="20">${content}</textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary save-changes">Save changes</button>
                    </div>
                </div>
            </div>
        `;

    // Add modal to page
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // Handle save
    modal.querySelector(".save-changes").onclick = () => {
      const newContent = modal.querySelector("#section-editor").value;
      this.contentManager.updateSection(sectionId, {content: newContent});
      section.querySelector(".topic-card").innerHTML = newContent;
      modalInstance.hide();
    };

    // Cleanup on close
    modal.addEventListener("hidden.bs.modal", () => {
      modal.remove();
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize topic page functionality
  const topicPage = new TopicPage();

  // Initialize content editor if we're on a topic page
  if (document.querySelector(".topic-section")) {
    const editor = new TopicEditor();
    editor.initializeSettings();
  }

  // Initialize topic manager on the main research page
  if (document.querySelector("#research")) {
    window.topicManager = new TopicManager();
  }
});