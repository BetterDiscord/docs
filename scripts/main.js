const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const navbar = document.querySelector("#navbar");
const sidebar = document.querySelector(".docs-sidebar-inner");

function floatingNavBar(max, scrollTop) {

    if (scrollTop > document.querySelector("#navbar-nav-items").clientHeight) {
        document.querySelector("#navbar").classList.add("floating");
        if (sidebar) sidebar.style.height = `${screenHeight - navbar.offsetHeight - 48}px`;
    }
    else {
        document.querySelector("#navbar").classList.remove("floating");
        if (sidebar) sidebar.style.height = `${screenHeight - navbar.offsetHeight - 64}px`;
    }
}


document.addEventListener("DOMContentLoaded", () => {  
    if (sidebar) {
        sidebar.style.height = `${screenHeight - navbar.offsetHeight - 24}px`;
        window.OverlayScrollbars(sidebar, {});
    }
    const bodyScroller = window.OverlayScrollbars(document.body, {
        callbacks: {
            onScroll: function (ev) {
                const scrollInfo = bodyScroller.scroll();
                const scrollTop = ev.target.scrollTop;
                const max = scrollInfo.max.y;
                floatingNavBar(max, scrollTop);
                docsHeaderScroll();
            }
        }
    });

    const copyButtons = document.getElementsByClassName("btn-copy");
    for (const button of copyButtons) {
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(button.parentElement.textContent.trim());
            button.classList.add("success");
            setTimeout(() => {button.classList.remove("success");}, 1000);
        });
    }
});

function docsHeaderScroll() {
    const header = document.getElementById("docs-header");
    if (header && header.getBoundingClientRect().top === 0) {
        header.classList.add("stuck");
    }
    else if (header) {
        header.classList.remove("stuck");
    }
}

function toggleDocsSidebar() {
    if (sidebar) sidebar.classList.toggle("mobile-hidden");
}

document.getElementById("header-sidebar-btn").addEventListener("click", toggleDocsSidebar);
document.getElementById("sidebar-btn").addEventListener("click", toggleDocsSidebar);
document.querySelector(".docs-sidebar-backdrop").addEventListener("click", toggleDocsSidebar);
window.addEventListener("keydown", ({key}) => {
    if (!sidebar) return;

    if (key === "Escape" && !sidebar.classList.contains("mobile-hidden")) {
        toggleDocsSidebar();
    }
});