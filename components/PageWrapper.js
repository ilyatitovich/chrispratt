"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function PageWrapper({ children }) {
    return <ReactLenis root>{children}</ReactLenis>;
}
