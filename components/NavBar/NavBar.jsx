"use client";
import "./nav-bar.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
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
            <Logo pathname={pathname} />
            <BurgerBtn
                menuIsOpen={menuIsOpen}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
            <SideMenu menuIsOpen={menuIsOpen} />
        </>
    );
}
