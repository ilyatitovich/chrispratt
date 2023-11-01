import { Inter } from "next/font/google";
import "./normalize.css";
import "./styleguide.css";
import "./components.css";
import "./style-new.css";

import PageWrapper from "@/components/PageWrapper";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chris Pratt",
    description: "Awward winning photographer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <PageWrapper>{children}</PageWrapper>
            </body>
        </html>
    );
}
