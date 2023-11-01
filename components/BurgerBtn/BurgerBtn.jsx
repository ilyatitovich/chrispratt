import "./burger-btn.css";
import MagneticBtn from "../MagneticBtn/MagneticBtn";

export default function BurgerBtn({ menuIsOpen, onClick }) {
    return (
        <div
            className={`btn btn-hamburger show ${menuIsOpen ? "active" : ""}`}
            onClick={onClick}
        >
            <MagneticBtn strength={50} strengthText={25}>
                <div className="btn-fill" />
                <div className="btn-text">
                    <div className="btn-bars" />
                    <span className="btn-text-inner">Menu</span>
                </div>
            </MagneticBtn>
        </div>
    );
}
