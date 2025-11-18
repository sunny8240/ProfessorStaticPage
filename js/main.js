 const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileMenuToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

 
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop;
});

 
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

 
const contactForm = document.getElementById("contactForm");
if (contactForm && contactForm.dataset.advancedHandling !== "true") {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
      showToast("Message sent successfully! I will get back to you soon.");
      contactForm.reset();
    } else {
      showToast("Please fill in all fields.", "error");
    }
  });
}

 
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

 
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        item.classList.remove("hidden");
        item.classList.add("visible");
      } else {
        item.classList.remove("visible");
        item.classList.add("hidden");
      }
    });
  });
});

 
const galleryItemImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.style.display = "none";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0, 0, 0, 0.9)";
lightbox.style.zIndex = "1000";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.innerHTML = `
  <img id="lightboxImg" style="max-width: 90%; max-height: 80%; border-radius: 0.5rem;" />
  <button id="closeLightbox" style="position: absolute; top: 1rem; right: 1rem; background: rgba(255, 255, 255, 0.1); border: 2px solid white; color: white; font-size: 2rem; cursor: pointer; border-radius: 50%; width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center;">&times;</button>
`;
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryItemImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

 
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");
    const isActive = accordionItem.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.maxHeight = null;
    });

    if (!isActive) {
      accordionItem.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});

 
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    tabContents.forEach((content) => {
      if (content.id === tabId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});

 
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});


