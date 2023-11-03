"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function PageWrapper({ children }) {
    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return <ReactLenis root>{children}</ReactLenis>;
}
