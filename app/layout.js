import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

export const metadata = {
    title: "Optica Media",
    description: "build by high-house",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
            <body className="antialiased" cz-shortcut-listen="true">
                {children}
            </body>
        </html>
    );
}
