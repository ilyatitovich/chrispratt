"use client";
import { gsap, Power2, Power3, Power4, Elastic } from "gsap";

export default function MagneticBtn({
    strength = 0,
    strengthText = 0,
    children,
}) {
    function handleMouseMove(event) {
        const magnetButton = event.currentTarget;
        const bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, 1.5, {
            x:
                ((event.clientX - bounding.left) / magnetButton.offsetWidth -
                    0.5) *
                strength,
            y:
                ((event.clientY - bounding.top) / magnetButton.offsetHeight -
                    0.5) *
                strength,
            rotate: "0.001deg",
            ease: Power4.easeOut,
        });

        gsap.to(magnetButton.querySelector(".btn-text"), 1.5, {
            x:
                ((event.clientX - bounding.left) / magnetButton.offsetWidth -
                    0.5) *
                strengthText,
            y:
                ((event.clientY - bounding.top) / magnetButton.offsetHeight -
                    0.5) *
                strengthText,
            rotate: "0.001deg",
            ease: Power4.easeOut,
        });
    }

    function handleMouseEnter(event) {
        //fill
        if (event.currentTarget.querySelector(".btn-fill")) {
            gsap.to(event.currentTarget.querySelector(".btn-fill"), 0.6, {
                startAt: { y: "76%" },
                y: "0%",
                ease: Power2.easeInOut,
            });
        }

        if (event.currentTarget.querySelector(".btn-text-inner.change")) {
            gsap.to(
                event.currentTarget.querySelector(".btn-text-inner.change"),
                0.3,
                {
                    startAt: { color: "#1C1D20" },
                    color: "#FFFFFF",
                    ease: Power3.easeIn,
                }
            );
        }
    }

    function handleMouseLeave(event) {
        // magnetic
        gsap.to(event.currentTarget, 1.5, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
        });
        gsap.to(event.currentTarget.querySelector(".btn-text"), 1.5, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
        });

        // fill
        if (event.currentTarget.querySelector(".btn-fill")) {
            gsap.to(event.currentTarget.querySelector(".btn-fill"), 0.6, {
                y: "-76%",
                ease: Power2.easeInOut,
            });
        }
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-click magnetic"
        >
            {children}
        </div>
    );
}
