"use client";
import "./cursor.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

let posX = 0,
    posY = 0;

export default function Cursor() {
    const cursorBtnRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY,
            });
        });

        if(cursorBtnRef.current) {
            gsap.to({}, 0.0083333333, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mousePos.x - posX) / 7;
                    posY += (mousePos.y - posY) / 7;
    
                    gsap.set(cursorBtnRef.current, {
                        css: {
                            left: posX - 15,
                            top: posY - 15,
                        },
                    });
                },
            });
    
        }


        return () => {
            window.removeEventListener("mousemove", (e) => {
                setMousePos({
                    x: e.clientX,
                    y: e.clientY,
                });
            });
        };
    }, [mousePos, cursorBtnRef]);

    useEffect(() => {
        document.querySelectorAll(".single-tile-wrap").forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursorBtnRef.current.classList.add("active-big");
            });

            el.addEventListener("mouseleave", () => {
                cursorBtnRef.current.classList.remove("active-big");
            });
        });

        return () => {
            document.querySelectorAll(".single-tile-wrap").forEach((el) => {
                el.removeEventListener("mouseenter", () => {
                    cursorBtnRef.current.classList.add("active-big");
                });

                el.removeEventListener("mouseleave", () => {
                    cursorBtnRef.current.classList.remove("active-big");
                });
            });
        };
    }, [cursorBtnRef]);

    return (
        <div ref={cursorBtnRef} className="mouse-pos-list-btn no-select">
            <p>View</p>
        </div>
    );
}
