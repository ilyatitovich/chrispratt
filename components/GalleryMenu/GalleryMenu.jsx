import "./gallery-menu.css";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import { capitalize } from "lodash";

export default function GalleryMenu({ setMenuIsOpen, setCurrent }) {
    function handleClick(cur) {
        setMenuIsOpen(false);
        setCurrent(cur);
        location.href = `/gallery#${cur}`;
    }

    const links = [
        "all works",
        "portraits",
        "events",
        "fashion",
        "product",
    ].map((el, i) => {
        return (
            <li
                key={el}
                className={`btn btn-link`}
                onClick={() => handleClick(el)}
            >
                <MagneticBtn strength={24} strengthText={12}>
                    <span className="btn-text">
                        <span className="btn-text-inner">{capitalize(el)}</span>
                    </span>
                </MagneticBtn>
            </li>
        );
    });

    return (
        <div className="gallery-menu">
            <ul>{links}</ul>
        </div>
    );
}
