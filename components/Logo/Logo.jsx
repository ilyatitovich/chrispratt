import "./logo.css";
import Link from "next/link";
import MagneticBtn from "../MagneticBtn/MagneticBtn";

export default function Logo({pathname}) {
    let color = '';

    switch (pathname) {
        case "/":
            color = "white";
            break;
        case "/contact":
            color = "white";
            break;
        default:
            color = "";
    }

    return (
        <div className="logo">
            <div className="btn btn-link btn-left-top">
                <MagneticBtn strength={20} strengthText={10}>
                    <Link href="/">
                        <span className={`btn-text ${color}`}>Chris Pratt</span>
                    </Link>
                </MagneticBtn>
            </div>
        </div>
    );
}
