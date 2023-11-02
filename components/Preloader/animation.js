import { gsap } from "gsap";

export function initPreloader() {
    const tl = gsap.timeline(),
        screenWidth = window.innerWidth;

    window.scrollTo(0, 0);

    tl.set(".loading-screen", {
        top: "0",
    });

    if (screenWidth > 540) {
        tl.set("main .once-in", {
            y: "50vh",
        });
    } else {
        tl.set("main .once-in", {
            y: "10vh",
        });
    }

    if (screenWidth > 540) {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh",
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh",
        });
    }

    tl.to(".loading-words", {
        duration: 0.8,
        opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: 0.5,
    });

    tl.to(".loading-screen", {
        duration: 0.8,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: 0.2,
    });

    tl.to(
        ".loading-screen .rounded-div-wrap.bottom",
        {
            duration: 1,
            height: "0vh",
            ease: "Power4.easeInOut",
        },
        "=-.8"
    );

    tl.set(".loading-screen", {
        top: "calc(-100%)",
    });

    tl.set(".loading-screen .rounded-div-wrap.bottom", {
        height: "0vh",
    });

    tl.to(
        "main .once-in",
        {
            duration: 1.5,
            y: "0vh",
            stagger: 0.07,
            ease: "Expo.easeOut",
            clearProps: true,
        },
        "=-.8"
    );

    return tl;
}
