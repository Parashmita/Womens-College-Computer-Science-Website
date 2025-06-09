function toggleMenu() {

document.getElementById("nav-menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed(".typing", {
        strings: ["Welcome to the Computer Science Department", "Empowering Future Innovators", "Join Us in the World of Technology"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default only for the main dropdown, not sub-items
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    // Allow links inside the dropdown to work
    document.querySelectorAll(".dropdown-menu a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents dropdown from closing when clicking a link
            window.location.href = this.href; // Redirects properly
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});