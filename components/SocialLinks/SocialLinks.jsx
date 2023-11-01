import Link from "next/link";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import { socialLinksList } from "./data";
import { v4 as uuidv4 } from "uuid";

export default function SocialLinks() {
    const links = socialLinksList.map((el) => {
        return (
            <li key={uuidv4()} className="btn btn-link btn-link-external">
                <MagneticBtn strength={20} strengthText={10}>
                    <Link href={el.link} target="_blank">
                        <span className="btn-text">
                            <span className="btn-text-inner">{el.name}</span>
                        </span>
                    </Link>
                </MagneticBtn>
            </li>
        );
    });

    return <ul>{links}</ul>;
}
