// import "./footer.css";
import Link from "next/link";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import ScrollSection from "../ScrollSection/ScrollSection";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
    return (
        <>
            <div className="footer-rounded-div">
                <ScrollSection
                    animate={{ height: 0 }}
                    start={"100% 70%"}
                    end={"+=500 100%"}
                >
                    <div className="rounded-div-wrap">
                        <div className="rounded-div" />
                    </div>
                </ScrollSection>
            </div>
            <div className="footer-wrap footer-footer-wrap theme-dark">
                <footer className="section footer is-inview">
                    <div className="container medium">
                        <div className="row">
                            <div className="flex-col">
                                <div className="arrow">
                                    <svg
                                        width="14px"
                                        height="14px"
                                        viewBox="0 0 14 14"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <title>arrow-up-right</title>
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
                                                    ></polyline>
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
                                <h2>
                                    <span>Let’s create</span>
                                    <span>together</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="flex-col">
                                <div className="stripe" />
                                <div className="btn-fixed">
                                    <div className="btn btn-round is-inview">
                                        <MagneticBtn
                                            strength={100}
                                            strengthText={50}
                                        >
                                            <Link href="/contact">
                                                <div className="btn-fill" />
                                                <span className="btn-text">
                                                    <span className="btn-text-inner">
                                                        Get in touch
                                                    </span>
                                                </span>
                                            </Link>
                                        </MagneticBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="flex-col">
                                <div className="btn btn-normal">
                                    <MagneticBtn
                                        strength={25}
                                        strengthText={15}
                                    >
                                        <Link href="mailto:info@chrispratt.com">
                                            <div className="btn-fill" />
                                            <span className="btn-text">
                                                <span className="btn-text-inner change">
                                                    info@chrispratt.com
                                                </span>
                                            </span>
                                        </Link>
                                    </MagneticBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container no-padding">
                        <div className="row bottom-footer">
                            <div className="flex-col">
                                <div className="credits">
                                    <h5>Version</h5>
                                    <p>2023 © Edition</p>
                                </div>
                            </div>
                            <div className="flex-col">
                                <div className="socials">
                                    <h5>Socials</h5>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
