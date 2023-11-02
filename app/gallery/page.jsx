"use client";
import "./gallery.css";
import { useState, useEffect } from "react";
import { capitalizeWords } from "@/components/utils";
import { gsap } from "gsap";
import Preloader from "@/components/Preloader/Preloader";
import ImageGrid from "@/components/ImagesGrid/ImagesGrid";
import GalleryMenu from "@/components/GalleryMenu/GalleryMenu";
import MagneticBtn from "@/components/MagneticBtn/MagneticBtn";
import Slider from "@/components/Slider/Slider";

export default function Gallery() {
    const [current, setCurrent] = useState("all works");
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [sliderIsOpen, setSliderIsOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    useEffect(() => {
        setCurrent(window.location.href.split("#")[1] || "all works");
    }, []);

    useEffect(() => {
        if (menuIsOpen) {
            gsap.to(".main-wrap", 0.4, {
                opacity: 0,
            });

            gsap.to(".gallery-menu", 0.4, {
                opacity: 1,
            });

            gsap.set(".gallery-menu", {
                display: "flex",
            });
        } else {
            window.scrollTo(0, 0);

            gsap.to(".main-wrap", 0.4, {
                opacity: 1,
            });

            gsap.to(".gallery-menu", 0.4, {
                opacity: 0,
            });

            gsap.set(".gallery-menu", {
                display: "none",
            });
        }
    }, [menuIsOpen]);

    return (
        <>
            <Preloader text={"Gallery"} />
            <main className="main no-touch">
                <div className="main-wrap">
                    <header className="section gallery-header">
                        <div className="container medium once-in">
                            <div className="row">
                                <div className="flex-col">
                                    <h1>
                                        <span>{capitalizeWords(current)}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </header>

                    <ImageGrid
                        setInitialSlide={setInitialSlide}
                        setSliderIsOpen={setSliderIsOpen}
                        menuIsOpen={menuIsOpen}
                        current={current}
                    />
                </div>
                <footer className="gallery-footer once-in">
                    <div
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                        className="btn"
                    >
                        <MagneticBtn strength={20} strengthText={10}>
                            <span className="btn-text">
                                <span className="btn-text-inner">
                                    {capitalizeWords(current)}
                                </span><span className={`triangle ${menuIsOpen ? "active" : ''}`}/>
                            </span>
                        </MagneticBtn>
                    </div>
                </footer>
            </main>
            <GalleryMenu
                setMenuIsOpen={setMenuIsOpen}
                setCurrent={setCurrent}
            />
            {sliderIsOpen && (
                <Slider
                    initialSlide={initialSlide}
                    setSliderIsOpen={setSliderIsOpen}
                    current={current}
                />
            )}
        </>
    );
}
