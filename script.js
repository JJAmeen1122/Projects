document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const hiddenItems = document.querySelectorAll(".hidden");

    toggleBtn.addEventListener("click", () => {
        hiddenItems.forEach(item => {
            item.style.display = item.style.display === "none" || !item.style.display ? "list-item" : "none";
        });

        // Toggle arrow rotation
        toggleBtn.classList.toggle("rotate");

        // Update button arrow direction
        toggleBtn.textContent = toggleBtn.classList.contains("rotate") ? "⬆" : "⬇";
    });
});
