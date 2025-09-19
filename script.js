// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Animate skills on scroll
const skills = document.querySelectorAll(".skill-card");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if (top < trigger) {
      skill.classList.add("show");
    }
  });
});

// Animate projects on scroll
const projects = document.querySelectorAll(".project-card");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    if (top < trigger) {
      project.classList.add("show");
    }
  });
});

// Animate experience items on scroll
const timelineItems = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("show");
    }
  });
});


