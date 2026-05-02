/* ============================================================
   PROJECT MODALS
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".project-modal-trigger");
  const overlay = document.getElementById("project-modal-overlay");
  const closeButton = document.getElementById("project-modal-close");
  const titleElement = document.getElementById("project-modal-title");
  const descriptionElement = document.getElementById(
    "project-modal-description",
  );
  const metaElement = document.getElementById("project-modal-meta");

  if (
    !triggers.length ||
    !overlay ||
    !closeButton ||
    !titleElement ||
    !descriptionElement ||
    !metaElement
  ) {
    return;
  }

  const projectData = {
    csci181p1: {
      title: "Web Design and Programming Project 1",
      description:
        "A software engineering project focused on clean structure, maintainability, and practical problem solving.",
      stack: "HTML, CSS, JavaScript",
      status: "Completed",
      repo: "https://github.com/thomas-butcher/Butcher-CSCI181-p1",
    },
    csci181p2: {
      title: "Web Design and Programming Project 2",
      description:
        "A continuation of course work with deeper implementation of modal complexity.",
      stack: "HTML, CSS, JavaScript",
      status: "Completed",
      repo: "https://github.com/thomas-butcher/Butcher-CSCI181-p2",
    },
    dsa: {
      title: "Data Structures & Algorithms",
      description:
        "Repository that demonstrates core algorithmic thinking, complexity analysis, and data structure implementations.",
      stack: "Python",
      status: "Completed",
      repo: "https://github.com/thomas-butcher/Data-Structures-And-Algorithms",
    },
    csci152: {
      title: 'Interdisciplinary CS "Living World" Project',
      description:
        "CSCI 152 work showcasing applied programming concepts and class-based outcomes.",
      stack: "Java",
      status: "Completed",
      repo: "https://github.com/samuelpenney/LivingWorld",
    },
  };

  let lastFocusedTrigger = null;

  function setModalContent(project) {
    titleElement.textContent = project.title;
    descriptionElement.textContent = project.description;

    let linksMarkup = "<p>Repository link coming soon.</p>";
    if (project.repo) {
      linksMarkup =
        '<a class="project-modal-link" href="' +
        project.repo +
        '" target="_blank" rel="noopener noreferrer">View Repository</a>';
    }

    metaElement.innerHTML =
      "<p>Tech: " +
      project.stack +
      "</p><p>Status: " +
      project.status +
      '</p><div class="project-modal-links">' +
      linksMarkup +
      "</div>";
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocusedTrigger) {
      lastFocusedTrigger.focus();
    }
  }

  function openModal(projectKey, trigger) {
    const project = projectData[projectKey];
    if (!project) {
      return;
    }

    lastFocusedTrigger = trigger;
    setModalContent(project);
    overlay.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openModal(trigger.dataset.project, trigger);
    });
  });

  closeButton.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (overlay.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    }
  });
});
