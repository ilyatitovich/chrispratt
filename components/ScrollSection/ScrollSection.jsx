"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSection({
    animate = {},
    start = "0% 50%",
    end = "100% 100%",
    scrub = true,
    markers = false,
    children,
}) {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const targetElement = sectionRef.current.firstChild,
            screenSize = window.innerWidth;

        if (sectionRef.current && screenSize > 400) {
            gsap.to(targetElement, {
                ...animate,
                ease: "none",
                scrollTrigger: {
                    trigger: targetElement,
                    start: start,
                    end: end,
                    markers: markers,
                    scrub: scrub,
                },
            });
        }
    }, [sectionRef.current]);

    return <div ref={sectionRef}>{children}</div>;
}
