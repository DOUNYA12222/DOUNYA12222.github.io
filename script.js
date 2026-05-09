const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Git / GitHub", level: 90 },
  { name: "Travail en equipe", level: 100 },
  { name: "2D Game Development in C++", level: 85 },
  { name: "Python", level: 75 },
  { name: "C Programming", level: 80 }
];

const projects = [
  {
    title: "Jeu de cachette 2D",
    description: "Projet de jeu 2D developpe en C++ avec une logique de gameplay simple et interactive.",
    technologies: ["C++", "Game 2D", "Logique"],
    link: "https://dounya.itch.io/jeu-de-cachette"
  },
  {
    title: "SETWEB - Jeu educatif",
    description: "Site web educatif realise en groupe pour proposer une experience interactive d'apprentissage.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://awd-grp2.github.io/Jeu--ducatif/"
  }
];

function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="skill-top">
        <span>{props.name}</span>
        <span>{props.level}/100</span>
      </div>
      <div className="progress">
        <div className="progress-bar" data-level={props.level}></div>
      </div>
    </div>
  );
}

function SkillsList(props) {
  return (
    <div className="skills-grid">
      {props.items.map(function(skill) {
        return <SkillCard key={skill.name} name={skill.name} level={skill.level} />;
      })}
    </div>
  );
}

function ProjectCard(props) {
  return (
    <article className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="tags">
        {props.technologies.map(function(tech) {
          return <span className="tag" key={tech}>{tech}</span>;
        })}
      </div>
      <a className="project-link" href={props.link} target="_blank" rel="noreferrer">
        Voir le projet
      </a>
    </article>
  );
}

function ProjectsList(props) {
  return (
    <div className="projects-grid">
      {props.items.map(function(project) {
        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        );
      })}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="contact-form" id="contactForm" noValidate>
      <div className="field">
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" placeholder="Votre nom" />
        <span className="error" id="nomError"></span>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="votre.email@example.com" />
        <span className="error" id="emailError"></span>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Votre message"></textarea>
        <span className="error" id="messageError"></span>
      </div>
      <button className="submit-btn" type="submit">Envoyer</button>
      <p className="success-message" id="successMessage">Message valide. Merci pour votre contact.</p>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("skillsRoot")).render(<SkillsList items={skills} />);
ReactDOM.createRoot(document.getElementById("projectsRoot")).render(<ProjectsList items={projects} />);
ReactDOM.createRoot(document.getElementById("contactRoot")).render(<ContactForm />);

$(document).ready(function() {
  $("#menuToggle").on("click", function() {
    $("#navLinks").toggleClass("open");
  });

  $(".nav-links a").on("click", function() {
    $("#navLinks").removeClass("open");
  });

  $(".accordion-title").on("click", function() {
    const item = $(this).parent();
    $(".accordion-item").not(item).removeClass("active").find(".accordion-content").slideUp(250);
    item.toggleClass("active");
    item.find(".accordion-content").slideToggle(250);
  });

  $(".project-card").hover(
    function() {
      $(this).css("transform", "translateY(-5px)");
    },
    function() {
      $(this).css("transform", "translateY(0)");
    }
  );

  function animateSkills() {
    $(".progress-bar").each(function() {
      const bar = $(this);
      const top = bar.offset().top;
      const scrollBottom = $(window).scrollTop() + $(window).height();

      if (scrollBottom > top + 20 && !bar.hasClass("animated")) {
        bar.addClass("animated");
        bar.animate({ width: bar.data("level") + "%" }, 1000);
      }
    });
  }

  $(window).on("scroll", animateSkills);
  animateSkills();

  $("#contactForm").on("submit", function(event) {
    event.preventDefault();

    const nom = $("#nom").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    $(".error").text("");
    $("#successMessage").hide();

    if (nom.length < 2) {
      $("#nomError").text("Le nom doit contenir au moins 2 caracteres.");
      valid = false;
    }

    if (!emailPattern.test(email)) {
      $("#emailError").text("Veuillez saisir un email valide.");
      valid = false;
    }

    if (message.length < 10) {
      $("#messageError").text("Le message doit contenir au moins 10 caracteres.");
      valid = false;
    }

    if (valid === true) {
      $("#successMessage").fadeIn(300);
      this.reset();
    }
  });
});
