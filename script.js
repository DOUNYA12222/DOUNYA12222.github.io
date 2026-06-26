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

    const form = this;
    const nom = $("#nom").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    $(".error").text("");
    $("#successMessage").hide().removeClass("error-message");

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
      const subject = encodeURIComponent("Nouveau message depuis le CV de Dounya");
      const body = encodeURIComponent(
        "Nom: " + nom + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
      );

      window.location.href = "mailto:d.elarrac4013@uca.ac.ma?subject=" + subject + "&body=" + body;

      $("#successMessage")
        .text("Votre application email va s'ouvrir avec le message prepare.")
        .removeClass("error-message")
        .fadeIn(300);
      form.reset();
    }
  });
});
