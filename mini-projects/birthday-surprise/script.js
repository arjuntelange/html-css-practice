function startWish() {
    document.querySelector(".intro").classList.add("hidden");

    let wish = document.querySelector(".wish");
    wish.classList.remove("hidden");

    // Animate text
    setTimeout(() => {
        document.querySelector(".message").style.opacity = 1;
        document.querySelector(".message").style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        document.querySelector(".sub-text").style.opacity = 1;
    }, 800);
}