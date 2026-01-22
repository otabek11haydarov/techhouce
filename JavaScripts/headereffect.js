export function initHeaderScrollHide() {
    const header = document.querySelector(".header-container");
    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        header.classList.toggle("hide", scrollTop > lastScrollTop);

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}
