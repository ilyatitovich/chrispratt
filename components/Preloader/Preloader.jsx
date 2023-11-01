"use client";
import "./preloader.css";
import { useEffect, useRef } from "react";
import { initPreloader } from "./animation";

export default function Preloader({ text, dot = true }) {
    const preloaderRef = useRef(null);

    useEffect(() => {
        if (preloaderRef.current) {
            initPreloader();
        }
    }, [preloaderRef]);

    return (
        <div ref={preloaderRef} className="loading-container">
            <div className="loading-screen">
                <div className="rounded-div-wrap top">
                    <div className="rounded-div" />
                </div>

                <div className="loading-words">
                    <h2>
                        {text}
                        {dot && <div className="dot" />}
                    </h2>
                </div>
                <div className="rounded-div-wrap bottom">
                    <div className="rounded-div" />
                </div>
            </div>
        </div>
    );
}
