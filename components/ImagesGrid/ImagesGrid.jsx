import "./image-grid.css";
import { getImages } from "./data";

const images = getImages();

export default function ImageGrid({
    setSliderIsOpen,
    setInitialSlide,
    current,
}) {
    const links = images[current].map((el, i) => {
        return (
            <div
                key={el.split("/").at(-1)}
                className="design development interaction visible"
                onClick={() => {
                    setSliderIsOpen(true);
                    setInitialSlide(i);
                }}
            >
                <img
                    style={{ position: "static" }}
                    className="overlay overlay-image lazy"
                    src={el}
                />
            </div>
        );
    });

    return (
        <section className="section work-tiles work-tiles-home once-in">
            <div className="container">
                <div className="image-grid">{links}</div>
            </div>
        </section>
    );
}
