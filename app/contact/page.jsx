import Link from "next/link";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import MagneticBtn from "@/components/MagneticBtn/MagneticBtn";
import Preloader from "@/components/Preloader/Preloader";

export default function Contact() {
    return (
        <>
            <Preloader text="Contact" />
            <main className="main no-touch">
                <div className="main-wrap">
                    <header className="section default-header contact-header theme-dark">
                        <div className="container medium">
                            <div className="row once-in">
                                <div className="flex-col">
                                    <h1>
                                        Let&apos;s start a
                                        <span>project together</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="row once-in">
                                <div className="flex-col">
                                    <form
                                        className="form"
                                        method="post"
                                        action=""
                                        encType="multipart/form-data"
                                        noValidate=""
                                    >
                                        <div className="website-field">
                                            <label
                                                className="label"
                                                htmlFor="tel"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                className="field"
                                                type="text"
                                                id="form-tel"
                                                name="tel"
                                                tabIndex={-1}
                                            />
                                        </div>
                                        <div className="form-col">
                                            <h5>01</h5>
                                            <label
                                                className="label"
                                                htmlFor="name"
                                            >
                                                What&apos;s your name?
                                            </label>
                                            <input
                                                className="field"
                                                type="text"
                                                id="form-name"
                                                name="name"
                                                defaultValue=""
                                                required=""
                                                placeholder="John Doe *"
                                            />
                                        </div>
                                        <div className="form-col">
                                            <h5>02</h5>
                                            <label
                                                className="label"
                                                htmlFor="email"
                                            >
                                                What&apos;s your email?
                                            </label>
                                            <input
                                                className="field"
                                                type="email"
                                                id="form-email"
                                                name="email"
                                                defaultValue=""
                                                required=""
                                                placeholder="john@doe.com *"
                                            />
                                        </div>
                                        <div className="form-col">
                                            <h5>03</h5>
                                            <label
                                                className="label"
                                                htmlFor="email"
                                            >
                                                What services are you looking
                                                for?
                                            </label>
                                            <input
                                                className="field"
                                                type="text"
                                                id="form-service"
                                                name="service"
                                                defaultValue=""
                                                required=""
                                                placeholder="Event photography ..."
                                            />
                                        </div>
                                        <div className="form-col">
                                            <h5>04</h5>
                                            <label
                                                className="label"
                                                htmlFor="message"
                                            >
                                                Your message
                                            </label>
                                            <textarea
                                                className="field"
                                                type="text"
                                                id="form-message"
                                                name="message"
                                                rows={8}
                                                required=""
                                                placeholder="Hello Chris, I have an idea... *"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="btn-contact-send">
                                            <div className="btn btn-round">
                                                <MagneticBtn
                                                    strength={100}
                                                    strengthText={50}
                                                >
                                                    <div className="btn-fill" />
                                                    <span className="btn-text">
                                                        <p>Send it!</p>
                                                    </span>
                                                </MagneticBtn>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex-col">
                                    <h5>Contact Details</h5>
                                    <ul className="links-wrap">
                                        <li className="btn btn-link btn-link-external">
                                            <MagneticBtn
                                                strength={20}
                                                strengthText={10}
                                            >
                                                <Link href="mailto:info@chrispratt.com">
                                                    <span className="btn-text">
                                                        <span className="btn-text-inner">
                                                            info@chrispratt.com
                                                        </span>
                                                    </span>
                                                </Link>
                                            </MagneticBtn>
                                        </li>
                                    </ul>
                                    <h5>Socials</h5>
                                    <div className="links-wrap">
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <footer className="section footer footer-contact theme-dark">
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
                                        <div className="stripe" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    );
}
