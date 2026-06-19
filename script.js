/* =====================================================
   PREMIUM APPLE-STYLE PORTFOLIO SCRIPT
   SHUBHANSHU DHAWAN
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       PRELOADER
    ========================================== */

    const loader = document.getElementById("loader");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    let progress = 0;

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {

            progress = 100;

            clearInterval(loadingInterval);

            setTimeout(() => {

                loader.style.opacity = "0";

                setTimeout(() => {
                    loader.style.display = "none";
                }, 700);

            }, 400);
        }

        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

    }, 70);

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileBtn && mobileMenu) {

        mobileBtn.addEventListener("click", () => {

            if (
                mobileMenu.style.display === "flex"
            ) {

                mobileMenu.style.display = "none";

            } else {

                mobileMenu.style.display = "flex";

            }

        });

    }

    /* ==========================================
       SMOOTH SCROLL LINKS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                if (mobileMenu) {
                    mobileMenu.style.display = "none";
                }

            }

        });

    });

            

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ==========================================
       SHOW/HIDE BACK TO TOP
    ========================================== */

    window.addEventListener("scroll", () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";

        } else {

            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";

        }

    });

    /* ==========================================
       ACTIVE NAV LINK
    ========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-nav");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active-nav");

            }

        });

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".glass-card, .section-header"
        );

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
            "translateY(40px)";
        el.style.transition =
            "all .8s ease";

        revealObserver.observe(el);

    });

    /* ==========================================
       SKILL BAR ANIMATION
    ========================================== */

const skillBars = document.querySelectorAll(".skill-fill");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.dataset.width;

            entry.target.style.width = width + "%";
        }
    });

}, {
    threshold: 0.3
});

skillBars.forEach(bar => {
    observer.observe(bar);
});



    /* ==========================================
       TYPING EFFECT
    ========================================== */

    const typingElement =
        document.getElementById("typing-role");

    if (typingElement) {

        const roles = [

            "Full Stack Developer",
            "Java Developer",
            "Web Developer",
            "Software Developer"

        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentRole =
                roles[roleIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (
                    charIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;

                }

            } else {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) %
                        roles.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 120
            );

        }

        typeEffect();

    }

    /* ==========================================
       CHAT ASSISTANT
    ========================================== */

    const chatBubble =
        document.getElementById(
            "ai-chat-bubble"
        );

    const toggleChat =
        document.getElementById(
            "toggle-chat"
        );

    const closeChat =
        document.getElementById(
            "close-chat"
        );

    if (
        chatBubble &&
        toggleChat &&
        closeChat
    ) {

        toggleChat.addEventListener(
            "click",
            () => {

                chatBubble.classList.toggle(
                    "hidden-chat-state"
                );

                chatBubble.classList.toggle(
                    "active-chat-state"
                );

            }
        );

        closeChat.addEventListener(
            "click",
            () => {

                chatBubble.classList.remove(
                    "active-chat-state"
                );

                chatBubble.classList.add(
                    "hidden-chat-state"
                );

            }
        );

    }

    /* ==========================================
       CHAT DEMO REPLIES
    ========================================== */

    const chatInput =
        document.querySelector(
            ".chat-text-input"
        );

    const chatSend =
        document.querySelector(
            ".chat-send-btn"
        );

    const chatBody =
        document.querySelector(
            ".chat-body-area"
        );

    function addMessage(text, type) {

        const msg =
            document.createElement("div");

        msg.className =
            type === "user"
                ? "chat-user"
                : "chat-message-bot";

        msg.style.marginBottom = "12px";

        if (type === "user") {

            msg.style.textAlign = "right";
            msg.style.color = "#60a5fa";

        }

        msg.textContent = text;

        chatBody.appendChild(msg);

        chatBody.scrollTop =
            chatBody.scrollHeight;

    }

    function assistantReply(message) {

        let reply =
            "Thank you for your message.";

        const text =
            message.toLowerCase();

        if (
            text.includes("skill")
        ) {

            reply =
                "Shubhanshu is skilled in Java, HTML5, CSS3, JavaScript, MySQL, Python, GitHub and Web Development.";

        }

        else if (
            text.includes("project")
        ) {

            reply =
                "Major projects include Online Examination System, College Event Management System and Resume Builder.";

        }

        else if (
            text.includes("education")
        ) {

            reply =
                "Shubhanshu completed MCA from Axis Business School affiliated with AKTU in 2025.";

        }

        else if (
            text.includes("contact")
        ) {

            reply =
                "Email: shubhanshudhawan2810@gmail.com | Phone: +91 9198090003";

        }

        setTimeout(() => {

            addMessage(reply, "bot");

        }, 500);

    }

    if (
        chatInput &&
        chatSend
    ) {

        chatSend.addEventListener(
            "click",
            () => {

                const message =
                    chatInput.value.trim();

                if (!message) return;

                addMessage(
                    message,
                    "user"
                );

                assistantReply(
                    message
                );

                chatInput.value = "";

            }
        );

    }

});

/* ==========================================
   PARALLAX EFFECT
========================================== */

window.addEventListener("mousemove", (e) => {

    const cards =
        document.querySelectorAll(
            ".glass-card"
        );

    const x =
        (window.innerWidth / 2 - e.clientX) / 50;

    const y =
        (window.innerHeight / 2 - e.clientY) / 50;

    cards.forEach(card => {

        card.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});


/* ==========================
   RESUME PREVIEW
========================== */

const previewBtn =
document.getElementById(
    "previewResumeBtn"
);

const resumeModal =
document.getElementById(
    "resumeModal"
);

const closeResumeModal =
document.getElementById(
    "closeResumeModal"
);

if(previewBtn){

    previewBtn.addEventListener(
        "click",
        () => {

            resumeModal.classList.add(
                "active"
            );

            document.body.style.overflow =
            "hidden";

        }
    );

}

if(closeResumeModal){

    closeResumeModal.addEventListener(
        "click",
        () => {

            resumeModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
            "auto";

        }
    );

}

resumeModal?.addEventListener(
    "click",
    (e)=>{

        if(e.target === resumeModal){

            resumeModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
            "auto";

        }

    }
);


