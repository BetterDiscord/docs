document.addEventListener("DOMContentLoaded", () => {
    const bodyScroller = window.OverlayScrollbars(document.body, {
        callbacks: {
            onScroll: function (ev) {
                const scrollInfo = bodyScroller.scroll();
                const scrollTop = ev.target.scrollTop;
                const max = scrollInfo.max.y;
                floatingNavBar(max, scrollTop);
            }
        }
    });
});

function floatingNavBar(max, scrollTop) {
    if (scrollTop > document.querySelector("#navbar-nav-items").clientHeight) {
        document.querySelector("#navbar").classList.add("floating");
    }
    else {
        document.querySelector("#navbar").classList.remove("floating");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    /* const sidebarScroller = */
    window.OverlayScrollbars(document.querySelectorAll(".docs-sidebar-inner"), {});
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
    document.querySelector(".docs-sidebar").classList.toggle("mobile-hidden");
}

document.getElementById("header-sidebar-btn").addEventListener("click", toggleDocsSidebar);
document.getElementById("sidebar-btn").addEventListener("click", toggleDocsSidebar);
document.querySelector(".docs-sidebar-backdrop").addEventListener("click", toggleDocsSidebar);
window.addEventListener("keydown", ({ key }) => {
    const sidebar = document.querySelector(".docs-sidebar");

    if (key === "Escape" && !sidebar?.classList.contains("mobile-hidden")) {
        toggleDocsSidebar();
    }
});