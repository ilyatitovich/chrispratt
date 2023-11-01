import "./page.css";
import Link from "next/link";
import Image from "next/image";
import MagneticBtn from "@/components/MagneticBtn/MagneticBtn";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";
import ScrollSection from "@/components/ScrollSection/ScrollSection";

export default function Home() {
    const listItems = ["Portraits", "Events", "Fashion", "Product"].map(
        (item) => {
            return (
                <li key={item} className="visible">
                    <div className="single-tile-wrap">
                        <Link
                            href={`/gallery#${item.toLowerCase()}`}
                            className="row"
                        >
                            <div className="flex-col">
                                <div className="tile-image">
                                    <div
                                        className="overlay overlay-image lazy"
                                        style={{
                                            backgroundPosition: "center center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage: `url(/images/${item.toLowerCase()}/${item.toLowerCase()}-img-1.jpg)`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex-col">
                                <h4>{item}</h4>
                            </div>
                        </Link>
                    </div>
                </li>
            );
        }
    );

    return (
        <>
            <Preloader text="Hello!" dot={false} />
            <main className="main">
                <div className="main-wrap">
                    <header className="section home-header theme-dark">
                        <div className="overlay personal-image no-select once-in is-inview">
                            <Image
                                src="/main-2.jpg"
                                alt="Chris Pratt main photo"
                                width={6000}
                                height={4000}
                            />
                        </div>

                        <div className="container once-in once-in-secondary">
                            <ScrollSection
                                animate={{ yPercent: -50 }}
                                start={"top 40%"}
                                end={"+=800 100%"}
                            >
                                <div className="row">
                                    <div className="flex-col">
                                        <div
                                            className="header-above-h4 is-inview"
                                            data-scroll=""
                                            data-scroll-speed={1}
                                            style={{
                                                transform:
                                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 10.6813, 0, 1)",
                                            }}
                                        >
                                            <div className="arrow big">
                                                {/*?xml version="1.0" encoding="UTF-8"?*/}
                                                <svg
                                                    width="14px"
                                                    height="14px"
                                                    viewBox="0 0 14 14"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <title>
                                                        arrow-up-right
                                                    </title>
                                                    <g
                                                        id="Page-1"
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g
                                                            id="Artboard"
                                                            transform="translate(-1019.000000, -279.000000)"
                                                            stroke="#FFFFFF"
                                                            strokeWidth="1.5"
                                                        >
                                                            <g
                                                                id="arrow-up-right"
                                                                transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                                                            >
                                                                <polyline
                                                                    id="Path"
                                                                    points="2.76923077 0 12 0 12 9.23076923"
                                                                />
                                                                <line
                                                                    x1={12}
                                                                    y1={0}
                                                                    x2={0}
                                                                    y2={12}
                                                                    id="Path"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h4>
                                            <span>Award winning</span>
                                            <span>photographer</span>
                                        </h4>
                                    </div>
                                </div>
                            </ScrollSection>
                        </div>

                        <div className="overlay get-height once-in once-in-secondary">
                            <ScrollSection
                                animate={{ yPercent: -100 }}
                                start={"top 40%"}
                                end={"+=800 100%"}
                            >
                                <div className="hanger">
                                    <p>
                                        <span>Available</span>
                                        <span>for a</span>
                                        <span>worldwide</span>
                                    </p>
                                    <svg
                                        width="300px"
                                        height="121px"
                                        viewBox="0 0 300 121"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <title>Combined Shape</title>
                                        <g
                                            id="Page-1"
                                            stroke="none"
                                            strokeWidth={1}
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g
                                                id="Artboard"
                                                transform="translate(0.000000, -366.000000)"
                                                fill="#1C1D20"
                                            >
                                                <g
                                                    id="Group"
                                                    transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
                                                >
                                                    <g
                                                        id="Hanger"
                                                        transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)"
                                                    >
                                                        <path
                                                            d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
                                                            id="Combined-Shape"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="digital-ball">
                                        <div className="overlay" />
                                        <div className="globe">
                                            <div className="globe-wrap">
                                                <div className="circle" />
                                                <div className="circle" />
                                                <div className="circle" />
                                                <div className="circle-hor" />
                                                <div className="circle-hor-middle" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollSection>
                        </div>
                    </header>

                    <section className="section home-intro">
                        <div className="container medium">
                            <div className="row">
                                <div className="flex-col">
                                    <h4 className="span-lines">
                                        Celebrating moments in every frame.
                                        Together, we'll redefine the art of
                                        storytelling. No compromises, always
                                        capturing the extraordinary.
                                    </h4>
                                </div>
                                <div className="flex-col">
                                    <div className="text-wrap">
                                        <p>
                                            My passion for capturing moments,
                                            creativity, and interaction places
                                            me in a distinctive position in the
                                            world of photography.
                                        </p>
                                    </div>

                                    <ScrollSection
                                        animate={{ yPercent: -30 }}
                                        start={"top center"}
                                        end={"+=300"}
                                    >
                                        <div className="btn btn-round">
                                            <MagneticBtn
                                                strength={100}
                                                strengthText={50}
                                            >
                                                <Link href="/about">
                                                    <div className="btn-fill" />
                                                    <span className="btn-text">
                                                        <span className="btn-text-inner">
                                                            About me
                                                        </span>
                                                    </span>
                                                </Link>
                                            </MagneticBtn>
                                        </div>
                                    </ScrollSection>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section work-tiles work-tiles-home">
                        <div className="container">
                            <ul>{listItems}</ul>
                        </div>
                    </section>

                    <section className="section center-grid-btn center-grid-btn-home">
                        <div className="container">
                            <div className="grid-after-btn">
                                <div className="btn btn-normal">
                                    <MagneticBtn
                                        strength={25}
                                        strengthText={15}
                                    >
                                        <Link href="/gallery">
                                            <div className="btn-fill" />
                                            <span className="btn-text">
                                                <span className="btn-text-inner change">
                                                    Gallery
                                                </span>
                                            </span>
                                        </Link>
                                    </MagneticBtn>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </main>
        </>
    );
}
