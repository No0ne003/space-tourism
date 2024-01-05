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
      travelTime.innerHTML = "3 DAYS";
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

//* Switch Crew
const crewLi = document.querySelectorAll(
  ".primary-content.crew section:first-child .nav-button ul li"
);

// Remove and add active class
crewLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    // Remove active class
    el.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add active class
    el.target.classList.add("active");
  });
});

crewLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    const dataImage = el.target.getAttribute("data-image");
    const dataLi = el.target.getAttribute("data-name");
    const image = document.querySelector(
      ".primary-content.crew section:last-child img"
    );
    const pElement = document.querySelector(
      ".primary-content.crew section:first-child .info-text p"
    );
    const h3Element = document.querySelector(
      ".primary-content.crew section:first-child .info-text h3"
    );

    // change TEXT
    if (dataLi === "DOUGLAS HURLEY") {
      pElement.innerHTML =
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      h3Element.innerHTML = "MARK SHUTTLEWORTH";
    } else if (dataLi === "MARK SHUTTLEWORTH") {
      pElement.innerHTML =
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      h3Element.innerHTML = "MARK SHUTTLEWORTH";
    } else if (dataLi === "VICTOR GLOVER") {
      pElement.innerHTML =
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
      h3Element.innerHTML = "VICTOR GLOVER";
    } else if (dataLi === "ANOUSHEH ANSARI") {
      pElement.innerHTML =
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      h3Element.innerHTML = "ANOUSHEH ANSARI";
    }
    if (!image.style.animation) {
      // Check if the animation is already in progress
      setTimeout(function () {
        // Change wallpaper after animation ends
        image.src = dataImage;
      }, 550);
      // Add animation
      image.style.animation = "toTop 1.2s ease-in-out";

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

//* Switch technology
const technologyLi = document.querySelectorAll(
  ".primary-content.technology section:first-child > div .steps ul li"
);

// Remove and add active class
technologyLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    // Remove active class
    el.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add active class
    el.target.classList.add("active");
  });
});

// change Images
technologyLi.forEach((e) => {
  e.addEventListener("click", (el) => {
    const dataImage = el.target.getAttribute("data-image");
    const dataLi = el.target.getAttribute("data-name");
    const image = document.querySelector(
      ".primary-content.technology section:last-child img"
    );
    const pElement = document.querySelector(
      ".primary-content.technology section:first-child > div .info p:last-child"
    );
    const h3Element = document.querySelector(
      ".primary-content.technology section:first-child > div .info h3"
    );

    // change TEXT
    if (dataLi === "LAUNCH VEHICLE") {
      pElement.innerHTML =
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
      h3Element.innerHTML = "LAUNCH VEHICLE";
    } else if (dataLi === "SPACEPORT") {
      pElement.innerHTML =
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
      h3Element.innerHTML = "SPACEPORT";
    } else if (dataLi === "SPACE CAPSULE") {
      pElement.innerHTML =
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      h3Element.innerHTML = "SPACE CAPSULE";
    }
    // Check if the animation is already in progress
    if (!image.style.animation) {
      // Change wallpaper after animation ends
      setTimeout(() => {
        image.src = dataImage;
      }, 500);
      // Add animation
      image.style.animation = "disipir .8s linear";

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