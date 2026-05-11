/* =========================================
   NAVBAR EFFECT
========================================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.background = "rgba(5,8,22,0.95)";
    header.style.backdropFilter = "blur(12px)";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";

  } else {

    header.style.background = "rgba(5,8,22,0.7)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "none";

  }

});

/* =========================================
   REVEAL ANIMATION
========================================= */

const revealItems = document.querySelectorAll(
  ".section, .skill-card, .project-card, .hero-card"
);

function revealOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  revealItems.forEach((item) => {

    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {

      item.classList.add("show");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================================
   ACTIVE NAV LINKS
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {

      link.classList.add("active");

    }

  });

});

/* =========================================
   LOAD GITHUB REPOSITORIES
========================================= */

async function loadGitHubRepos() {

  const container = document.getElementById("github-projects");

  if (!container) return;

  container.innerHTML = `
    <p style="color:white;">Loading repositories...</p>
  `;

  try {

    /* IMPORTANT:
       THIS LOADS ALL REPOS
       FROM YOUR GITHUB ACCOUNT
    */

    const response = await fetch(
      "https://api.github.com/users/FashadM/repos?sort=updated&per_page=100"
    );

    if (!response.ok) {

      throw new Error("GitHub repositories failed to load.");

    }

    const repos = await response.json();

    container.innerHTML = "";

    repos.forEach((repo) => {

      const card = document.createElement("div");

      card.classList.add("project-card");

      card.innerHTML = `

        <h3>${repo.name}</h3>

        <p>
          ${
            repo.description ||
            "Professional software engineering repository."
          }
        </p>

        <br>

        <p style="color:#00ff99; font-size:0.9rem;">
          ${repo.language || "Multi-Language"}
        </p>

        <br>

        <a
          href="${repo.html_url}"
          target="_blank"
          class="project-link"
        >
          View Repository →
        </a>

      `;

      container.appendChild(card);

    });

  } catch (error) {

    console.error(error);

    container.innerHTML = `
      <p style="color:#ff4d4d;">
        Failed to load GitHub repositories.
      </p>
    `;

  }

}

loadGitHubRepos();

/* =========================================
   PARTICLE EFFECT
========================================= */

const hero = document.querySelector(".hero");

for (let i = 0; i < 25; i++) {

  const particle = document.createElement("span");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "%";

  particle.style.animationDuration =
    (Math.random() * 10 + 5) + "s";

  particle.style.animationDelay =
    Math.random() * 5 + "s";

  hero.appendChild(particle);

}

/* =========================================
   BUTTON HOVER EFFECT
========================================= */

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-4px) scale(1.02)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0px) scale(1)";

  });

});

/* =========================================
   CONSOLE BRANDING
========================================= */

console.log(`
==========================================
 FASHAD K. MORRISON PORTFOLIO
 Enterprise Portfolio System Loaded
 Winston-Salem State University
==========================================
`);
