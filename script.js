```javascript
// ================================
// HAN.BIBLIOTHECA PORTFOLIO
// ================================


// ================================
// ELEMENTS
// ================================

const tabs = document.querySelectorAll(".tabs a");

const viewProjectsBtn =
    document.getElementById("viewProjectsBtn");

const contactBtn =
    document.getElementById("contactBtn");

const connectBtn =
    document.getElementById("connectBtn");

const likeButton =
    document.getElementById("likeButton");

const projects =
    document.getElementById("projects");

const contact =
    document.getElementById("contact");


// ================================
// TAB NAVIGATION
// ================================

tabs.forEach(tab => {

    tab.addEventListener("click", function () {

        tabs.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ================================
// LIHAT KARYA
// ================================

if (viewProjectsBtn) {

    viewProjectsBtn.addEventListener("click", () => {

        if (projects) {

            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// ================================
// HUBUNGI
// ================================

if (contactBtn) {

    contactBtn.addEventListener("click", () => {

        if (contact) {

            contact.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// ================================
// LIKE BUTTON
// ================================

if (likeButton) {

    likeButton.addEventListener("click", () => {

        if (likeButton.classList.contains("liked")) {

            likeButton.classList.remove("liked");

            likeButton.textContent = "👍 Like";

        } else {

            likeButton.classList.add("liked");

            likeButton.textContent = "👍 Liked";

        }

    });

}


// ================================
// CONNECT BUTTON
// ================================

if (connectBtn) {

    connectBtn.addEventListener("click", () => {

        alert(
            "👋 Terima kasih sudah berkunjung!\n\n" +
            "Silakan tambahkan email, Instagram, " +
            "atau GitHub kamu di bagian ini."
        );

    });

}


// ================================
// SCROLL SPY
// ================================

const sections = document.querySelectorAll(
    "#home, #projects, #about, #contact"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    tabs.forEach(tab => {

        tab.classList.remove("active");

        const href =
            tab.getAttribute("href");

        if (
            href === "#" + currentSection ||
            (
                currentSection === "about" &&
                href === "#home"
            )
        ) {

            tab.classList.add("active");

        }

    });

});


// ================================
// PAGE LOADED
// ================================

console.log(
    "✨ han.bibliotheca portfolio berhasil dimuat!"
);
```
