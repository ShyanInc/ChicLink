import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Layout/Header";
import {Footer} from "@/components/Layout/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "ChicLink",
    description: "The application to find new relationships",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={'min-h-screen flex flex-col bg-no-repeat bg-cover bg-bg_image ' + inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
