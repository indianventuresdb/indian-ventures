import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

const manrope_init = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Indian Ventures",
  description: "Innovating Web & Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${manrope_init.variable}`}>
        <Navbar />
        <div className="flex justify-center items-center mt-4">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/favicon.ico"
                alt="Site Logo"
                width={48}
                height={48}
                className="mr-2"
              />
              <h1 className="text-3xl font-bold">{metadata.title}</h1>
            </a>
          </Link>
        </div>
        <div className="max-w-screen-2xl mx-auto">{children}</div>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
