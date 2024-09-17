import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image"; // Import the Next.js Image component
import Link from "next/link"; // Import the Next.js Link component

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
        {/* Favicon for browser tab */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${manrope_init.variable}`}>
        <Navbar />
        {/* Public Image and Title */}
        <div className="flex justify-center items-center mt-4">
          {/* Link wraps the logo and title to link back to the homepage */}
          <Link href="/">
            <a className="flex items-center">
              {/* Using Next.js Image component */}
              <Image
                src="/favicon.ico" // Path to the image in the public folder
                alt="Site Logo"
                width={48} // Adjust the width as needed
                height={48} // Adjust the height as needed
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
