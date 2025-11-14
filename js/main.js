// Mobile Menu Toggle
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

// Navbar Scroll Effect
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

// Active Navigation Link
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

// Smooth Scroll for Anchor Links
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

// Form Validation and Submission (for contact page)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
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

// Toast Notification
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

// Gallery Filter (for gallery page)
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
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 10);
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    const item = img.closest(".gallery-item");
    lightboxImg.src = img.src;
    lightboxTitle.textContent = item.getAttribute("data-title");
    lightboxCategory.textContent = item.getAttribute("data-category");
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

if (closeLightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// Accordion (for courses page)
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

// Tabs (for research page)
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

// Animation on Scroll
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

// Counter Animation for Stats this all for testing purposes
// const counters = document.querySelectorAll('.stat-number');
// const speed = 200;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = counter.getAttribute('data-target');
//         const count = +counter.innerText.replace(/\D/g, '');
//         const inc = target / speed;

//         if (count < target) {
//             counter.innerText = Math.ceil(count + inc) + (counter.innerText.includes('+') ? '+' : '');
//             setTimeout(updateCount, 1);
//         } else {
//             counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
//         }
//     };

//     const counterObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !counter.classList.contains('counted')) {
//                 counter.classList.add('counted');
//                 updateCount();
//             }
//         });
//     }, { threshold: 0.5 });

//     counterObserver.observe(counter);
// });

// Another but batter than previous
// const counters = document.querySelectorAll('.stat-number');
// const speed = 200;

// counters.forEach(counter => {
//     const target = +counter.getAttribute('data-target');
//     if (!target) return;

//     const updateCount = () => {
//         const count = +counter.innerText.replace(/\D/g, '');
//         const inc = target / speed;

//         if (count < target) {
//             counter.innerText = Math.ceil(count + inc) + '+';
//             setTimeout(updateCount, 10);
//         } else {
//             counter.innerText = target + '+';
//         }
//     };

//     const counterObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !counter.classList.contains('counted')) {
//                 counter.classList.add('counted');
//                 updateCount();
//             }
//         });
//     }, { threshold: 0.5 });

//     counterObserver.observe(counter);
// });
