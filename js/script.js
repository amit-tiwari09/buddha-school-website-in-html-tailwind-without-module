document.addEventListener("click", function (event) {
  // Toggle sidebar when an element with "toggle-sidebar" class is clicked
  if (event.target.classList.contains("toggle-sidebar")) {
    toggleSidebar();
  }

  // Toggle submenu when an element with "has-submenu" class is clicked
  if (event.target.classList.contains("has-submenu")) {
    toggleSubmenu(event.target.id);
  }

  // Open modal when an element with "open-modal" class is clicked
  if (event.target.classList.contains("open-modal")) {
    openModal(event.target.getAttribute("data-targetModalId"));
  }

  // Close modal when an element with "close-modal" class is clicked
  if (event.target.classList.contains("close-modal")) {
    closeModal(event.target.getAttribute("data-targetModalId"));
  }
});

// Highlight the active page link in the menu based on the current URL
markActivePageMenu();

// Initialize AOS (Animate On Scroll) library with custom settings
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 120,
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

/*=======================================================
  Opens a modal by removing the "hidden" class from the 
  element with the given ID
======================================================== */
function openModal(modalBtnId) {
  const modal = document.getElementById(`${modalBtnId}`);
  modal.classList.remove("hidden");
}

/*=====================================================
  Close a modal by adding the "hidden" class in the 
  element with the given ID
======================================================== */
function closeModal(modalBtnId) {
  const modal = document.getElementById(`${modalBtnId}`);
  modal.classList.add("hidden");
}

/*=======================================================
  Toggles the sidebar visibility by adding/removing the
   "-translate-x-full" class
========================================================== */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("-translate-x-full");
}

/*================================================================
 Toggles a submenu's visibility and rotates its icon when clicked
================================================================== */
function toggleSubmenu(id) {
  const submenu = document.getElementById(id + "-submenu");
  const icon = document.getElementById(id + "-icon");
  submenu.classList.toggle("hidden");
  icon.classList.toggle("rotate-90");
}

/*===================================================================
 Highlights the active page link in the menu based on the current URL
===================================================================== */
function markActivePageMenu() {
  const links = document.querySelectorAll(".page-nav");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (
      currentPath.endsWith(href) ||
      currentPath.includes(href.replace(/^\//, ""))
    ) {
      resetAllLinks();
      activateLink(link);
    }
  });
}

/*===================================================================
 Resets all page navigation links to their default, non-active state
===================================================================== */
function resetAllLinks() {
  const links = document.querySelectorAll(".page-nav");
  links.forEach((link) => {
    link.classList.remove(
      "bg-gradient-to-r",
      "from-blue-50",
      "to-transparent",
      "border-blue-500",
      "shadow-sm"
    );
    link.classList.add("border-transparent");

    updateDot(link, false);
    updateTitle(link, false);
    updateArrow(link, false);
  });
}

/*========================================================================
 Activates a page navigation link, applying styles and indicators for the
  active state
========================================================================== */
function activateLink(link) {
  link.classList.add(
    "bg-gradient-to-r",
    "from-blue-50",
    "to-transparent",
    "border-blue-500",
    "shadow-sm"
  );
  link.classList.remove("border-transparent");

  updateDot(link, true);
  updateTitle(link, true);
  updateArrow(link, true);
}

/*=============================================================================
 Updates the small dot indicator inside a navigation link based on active state
=============================================================================== */
function updateDot(link, isActive) {
  const dot = link.querySelector(".rounded-full");

  dot.classList.toggle("bg-blue-500", isActive);
  dot.classList.toggle("scale-150", isActive);
  dot.classList.toggle("shadow-md", isActive);
  dot.classList.toggle("shadow-blue-500/50", isActive);

  dot.classList.toggle("bg-gray-300", !isActive);
}

/*=============================================================================
Updates the title text color of a navigation link based on its active state
=============================================================================== */
function updateTitle(link, isActive) {
  const title = link.querySelector("h4");

  title.classList.toggle("text-blue-600", isActive);
  title.classList.toggle("text-gray-700", !isActive);
}

/*=============================================================================
Updates the arrow icon inside a navigation link based on its active state
=============================================================================== */
function updateArrow(link, isActive) {
  const arrow = link.querySelector(".icon");
  arrow.classList.toggle("translate-x-1", isActive);
}

/*=================================
Hero Section Slider
===================================*/
new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=================================
Message Section Slider
===================================*/
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-scnd-button-next",
    prevEl: ".swiper-scnd-button-prev",
  },
  pagination: {
    el: ".swiper-scnd-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

/*=================================
Review Section Slider
===================================*/
new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2, // md
    },
    1024: {
      slidesPerView: 3, // lg
    },
  },

  navigation: {
    nextEl: ".swiper-thrd-button-next",
    prevEl: ".swiper-thrd-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-thrd-pagination",
    clickable: true,
  },
});
