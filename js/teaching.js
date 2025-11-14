document.addEventListener("DOMContentLoaded", () => {
  const downloadButtons = document.querySelectorAll(".btn.full");

  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        btn.animate(
          [
            { transform: "translateY(0)" },
            { transform: "translateY(-4px)" },
            { transform: "translateY(0)" },
          ],
          { duration: 250, easing: "ease-out" }
        );
        const tip = document.createElement("span");
        tip.textContent = "Syllabus will be available soon";
        tip.style.position = "absolute";
        tip.style.background = "#083b8a";
        tip.style.color = "#fff";
        tip.style.padding = "6px 10px";
        tip.style.borderRadius = "6px";
        tip.style.fontSize = "0.85rem";
        tip.style.top = btn.getBoundingClientRect().top - 42 + "px";
        tip.style.left = btn.getBoundingClientRect().left + "px";
        tip.style.zIndex = "9999";
        document.body.appendChild(tip);
        setTimeout(() => tip.remove(), 1600);
      }
    });
  });
});
