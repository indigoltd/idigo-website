// scripts/gallery-loader.js
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("image-gallery");

  if (!container || typeof jobImages === "undefined") return;

  jobImages.forEach(img => {
    const el = document.createElement("img");
    el.src = img.src;
    el.alt = img.alt;
    el.className = "job-image";
    container.appendChild(el);
  });
});
