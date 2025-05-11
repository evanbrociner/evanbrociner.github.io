class TopicTemplateGenerator {
  constructor() {
    this.defaultSections = [
      {
        id: "101",
        title: "Basics",
        type: "terms",
        description: "Core concepts and terminology"
      }, {
        id: "implementation",
        title: "Implementation",
        type: "resources",
        description: "Implementation approaches and case studies"
      }, {
        id: "trends",
        title: "Current Trends",
        type: "resources",
        description: "Latest developments and industry trends"
      }
    ];
  }

  generateTemplate(topicName, customSections = []) {
    const sections = [
      ...this.defaultSections,
      ...customSections
    ];
    const content = {
      metadata: {
        title: this.toTitleCase(topicName),
        lastUpdated: new Date().toISOString(),
        description: `Understanding ${this.toTitleCase(topicName)} in healthcare`
      },
      sections: {}
    };

    sections.forEach(section => {
      content.sections[section.id] = {
        title: section.title,
        type: section.type,
        description: section.description,
        content: this.generateSectionTemplate(section.type)
      };
    });

    return content;
  }

  generateSectionTemplate(type) {
    switch (type) {
      case "terms":
        return {
          terms: [
            {
              term: "Example Term",
              description: "Add description here"
            }
          ]
        };
      case "resources":
        return {
          resources: [
            {
              title: "Example Resource",
              url: "#",
              description: "Add description here"
            }
          ]
        };
      default:
        return {content: "Add content here"};
    }
  }

  toTitleCase(str) {
    return str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  async createNewTopic(topicName, customSections = []) {
    try {
      // Generate content
      const content = this.generateTemplate(topicName, customSections);

      // Save JSON data
      await fetch(`../static/data/${topicName}/content.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
      });

      // Create HTML file from template
      const htmlContent = this.generateHTMLTemplate(content);
      await fetch(`../topics/${topicName}.html`, {
        method: "PUT",
        headers: {
          "Content-Type": "text/html"
        },
        body: htmlContent
      });

      return true;
    } catch (error) {
      console.error("Error creating new topic:", error);
      return false;
    }
  }

  generateHTMLTemplate(content) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.metadata.title} - Healthcare Research & Resources</title>
    <meta name="description" content="${content.metadata.description}">

    <!-- Styles -->
    <link href="../static/css/style.css" rel="stylesheet">
    <link href="../static/css/topics.css" rel="stylesheet">
    <!-- Other head content -->
</head>
<body>
    <header class="site-header">
        <div class="header-content">
            <h1 class="logo">${content.metadata.title}</h1>
            <p class="tagline">${content.metadata.description}</p>
        </div>
    </header>

    <div class="topic-container">
        <div class="row">
            <!-- Navigation will be dynamically generated -->
            <div class="col-md-3">
                <nav class="topic-nav"></nav>
            </div>

            <!-- Main content -->
            <div class="col-md-9">
                ${Object.entries(content.sections).map(([id, section]) => `
                    <section id="${id}" class="topic-section">
                        <h2 class="topic-section-header">${section.title}</h2>
                        <div class="topic-card">
                            <!-- Content will be dynamically loaded -->
                        </div>
                    </section>
                `).join("")}
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../static/js/topics.js"></script>
    <script src="../static/js/topicContentManager.js"></script>
</body>
</html>`;
  }
}