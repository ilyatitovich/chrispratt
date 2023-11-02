import "./image-grid.css";
import { images } from "./data";

export default function ImageGrid({
    setSliderIsOpen,
    setInitialSlide,
    current,
}) {
    const links = images[current].map((el, i) => {
        return (
            <div
                key={el.split("/").at(-1)}
                className="gallery-tile"
                onClick={() => {
                    setSliderIsOpen(true);
                    setInitialSlide(i);
                }}
            >
                <img
                    style={{ position: "static" }}
                    className="overlay overlay-image"
                    src={el}
                />
            </div>
        );
    });

    return (
        <section className="section gallery-tiles once-in">
            <div className="container">
                <div className="images-grid">{links}</div>
            </div>
        </section>
    );
}
