import "./home.css";
import Link from "next/link";
import Image from "next/image";
import MagneticBtn from "@/components/MagneticBtn/MagneticBtn";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";
import ScrollSection from "@/components/ScrollSection/ScrollSection";
import { capitalize } from "lodash";

export default function Home() {
    const listItems = ["portraits", "events", "fashion", "product"].map(
        (item) => {
            return (
                <li key={item}>
                    <div className="single-tile-wrap">
                        <Link href={`/gallery#${item}`} className="row">
                            <div className="flex-col">
                                <div className="tile-image">
                                    <div
                                        className="overlay overlay-image"
                                        style={{
                                            backgroundPosition: "center center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage: `url(/images/${item}/${item}-img-1.jpg)`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex-col">
                                <h4>{capitalize(item)}</h4>
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
                    <header className="home-header theme-dark">
                        <div className="personal-image once-in">
                            <Image
                                src="/main-2.jpg"
                                alt="Chris Pratt main photo"
                                width={6000}
                                height={4000}
                            />
                        </div>

                        <div className="container once-in">
                            <ScrollSection
                                animate={{ yPercent: -50 }}
                                start={"top 40%"}
                                end={"+=800 100%"}
                            >
                                <div className="row">
                                    <div className="flex-col">
                                        <div className="header-above-h4">
                                            <div className="arrow big">
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

                        <div className="hanger-container once-in">
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
                                            <g id="Artboard" fill="#1C1D20">
                                                <g id="Group">
                                                    <g id="Hanger">
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

                    <section className="home-intro">
                        <div className="container medium">
                            <div className="row">
                                <div className="flex-col">
                                    <h4 className="span-lines">
                                        Celebrating moments in every frame.
                                        Together, we&apos;ll redefine the art of
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

                    <section className="work-tiles-home">
                        <div className="container">
                            <ul>{listItems}</ul>
                        </div>
                    </section>

                    <section className="gallery-btn">
                        <div className="container">
                            <div className="btn btn-normal">
                                <MagneticBtn strength={25} strengthText={15}>
                                    <Link href="/gallery">
                                        <div className="btn-fill" />
                                        <span className="btn-text">
                                            <span className="btn-text-inner">
                                                Gallery
                                            </span>
                                        </span>
                                    </Link>
                                </MagneticBtn>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </main>
        </>
    );
}
