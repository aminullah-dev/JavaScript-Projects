const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const fullImg = document.createElement("img");
        fullImg.src = img.getAttribute("data-large");
        while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
        lightbox.appendChild(fullImg);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
