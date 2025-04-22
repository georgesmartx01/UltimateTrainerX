document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav_links li");
    const navbar = document.querySelector("nav");

    if (navLinks.length) {
        navLinks.forEach((navLink) => {
            navLink.addEventListener("click", function () {
                document.querySelector(".nav_links li.active")?.classList.remove("active");
                this.classList.add("active");
            });
        });
    }

    // Remove active state when clicking outside the navbar
    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target)) {
            document.querySelector(".nav_links li.active")?.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
let settingsIcon = document.getElementById("settings-icon");
let settingsPopover = settingsIcon.parentElement.querySelector(".settings-popover");
let iconContainer = settingsIcon.parentElement;
let iconDescription = iconContainer.querySelector(".icon-description");

settingsIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    settingsPopover.classList.toggle("visible");

    // Hide tooltip when popover is active
    if (settingsPopover.classList.contains("visible")) {
        iconContainer.classList.add("popover-active");
        iconDescription.style.visibility = "hidden";
        iconDescription.style.opacity = "0";
    } else {
        iconContainer.classList.remove("popover-active");
    }
});

document.addEventListener("click", function (event) {
    if (!settingsPopover.contains(event.target) && event.target !== settingsIcon) {
        settingsPopover.classList.remove("visible");
        iconContainer.classList.remove("popover-active");
    }
});

// Ensure tooltip ONLY reappears on hover after closing the popover
settingsIcon.addEventListener("mouseenter", function () {
    if (!settingsPopover.classList.contains("visible")) {
        iconDescription.style.visibility = "visible";
        iconDescription.style.opacity = "1";
    }
});

settingsIcon.addEventListener("mouseleave", function () {
    iconDescription.style.visibility = "hidden";
    iconDescription.style.opacity = "0";
});
});