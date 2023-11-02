import "./side-menu.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import SocialLinks from "../SocialLinks/SocialLinks";
import { capitalize } from "lodash";

export default function SideMenu({ menuIsOpen }) {
    const path = usePathname();

    const navLinks = ["home", "gallery", "about", "contact"].map((el, i) => {
        return (
            <li
                key={el}
                className={`btn btn-link ${
                    path === "/" + (i > 0 ? el : "") ? "active" : ""
                }`}
            >
                <MagneticBtn strength={24} strengthText={12}>
                    <Link href={`/${i > 0 ? el : ""}`}>
                        <span className="btn-text">
                            <span className="btn-text-inner">
                                {capitalize(el)}
                            </span>
                        </span>
                    </Link>
                </MagneticBtn>
            </li>
        );
    });

    return (
        <nav className={menuIsOpen ? "nav-active" : ""}>
            <div className="overlay fixed-nav-back" />
            <div className="fixed-nav theme-dark">
                <div className="fixed-nav-rounded-div">
                    <div className="rounded-div-wrap">
                        <div className="rounded-div" />
                    </div>
                </div>
                <div className="fixed-nav-inner">
                    <div className="row nav-row">
                        <h5>Navigation</h5>
                        <div className="stripe" />
                        <ul className="links-wrap">{navLinks}</ul>
                    </div>
                    <div className="row social-row">
                        <div className="stripe" />
                        <div className="socials">
                            <h5>Socials</h5>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
