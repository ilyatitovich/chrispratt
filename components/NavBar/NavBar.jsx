"use client";
import "./nav-bar.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import SideMenu from "../SideMenu/SideMenu";

export default function NavBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setMenuIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav className="nav-bar">
                <div className="credits-top">
                    <div className="btn btn-link btn-left-top">
                        <MagneticBtn strength={20} strengthText={10}>
                            <Link href="/">
                                <span className="btn-text logo">Chris Pratt</span>
                            </Link>
                        </MagneticBtn>
                    </div>
                </div>
                <ul className="links-wrap">
                    <BurgerBtn
                        menuIsOpen={menuIsOpen}
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    />
                </ul>
            </nav>
            <SideMenu menuIsOpen={menuIsOpen} />
        </>
    );
}
