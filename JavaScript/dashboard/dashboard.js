document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    const greet = hour < 12 ? "Good morning" :
                 hour < 18 ? "Good afternoon" : "Good evening";
    const greetingElem = document.getElementById("greeting");
    if (greetingElem) {
        greetingElem.textContent = `${greet}, ${greetingElem.textContent.split(',')[1]}`;
    }

    document.querySelector(".progress-bar").style.width = "60%";

    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

    const clock = document.getElementById("clock");
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);
});