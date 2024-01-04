//* nav on mobile
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", false);
  }
});

//* switch destination
const destinationLi = document.querySelectorAll(
  ".primary-content.distination section:last-child nav ul li"
);

// Remove and add active class
destinationLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    // Remove active class
    el.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add active class
    el.target.classList.add("active");
  });
});

destinationLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    const dataImage = el.target.getAttribute("data-image");
    const dataLi = el.target.getAttribute("data-name");
    const image = document.querySelector(
      ".primary-content.distination section:first-child img"
    );
    const pElement = document.querySelector(
      ".primary-content.distination section:last-child p"
    );
    const h1Element = document.querySelector(
      ".primary-content.distination section:last-child h1"
    );
    const distance = document.querySelector(
      ".primary-content.distination section:last-child .numerical-info div .distance"
    );
    const travelTime = document.querySelector(
      ".primary-content.distination section:last-child .numerical-info div .travel-time"
    );

    // change TEXT
    if (dataLi === "MARS") {
      pElement.innerHTML =
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
      h1Element.innerHTML = "MARS";
      distance.innerHTML = "225 MIL. km";
      travelTime.innerHTML = "9 months";
    } else if (dataLi === "EUROPA") {
      pElement.innerHTML =
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
      h1Element.innerHTML = "EUROPA";
      distance.innerHTML = "628 MIL. km";
      travelTime.innerHTML = "3 YEARS";
    } else if (dataLi === "TITAN") {
      pElement.innerHTML =
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
      h1Element.innerHTML = "TITAN";
      distance.innerHTML = "1.6 BIL. km";
      travelTime.innerHTML = "7 YEARS";
    } else if (dataLi === "MOON") {
      pElement.innerHTML =
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
      h1Element.innerHTML = "MOON";
      distance.innerHTML = "384,400 km";
      travelTime.innerHTML = '3 DAYS';
    }
    if (!image.style.animation) {
      // Check if the animation is already in progress
      setTimeout(function () {
        // Change wallpaper after animation ends
        image.src = dataImage;
      }, 500);
      // Add animation
      image.style.animation = "leaving 1.3s";

      // Listen for the animationend event
      image.addEventListener("animationend", function onAnimationEnd() {
        // Reset the animation property
        image.style.animation = "";
        // Remove the event listener to avoid potential memory leaks
        image.removeEventListener("animationend", onAnimationEnd);
      });
    }
  });
});