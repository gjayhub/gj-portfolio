import type { Metadata } from "next";
import { Inter, MuseoModerno, Poppins } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const museo_moderno_init = MuseoModerno({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: "--font-museo-moderno",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gee Jay Rivera",
  description: "Portfolio built using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ scrollBehavior: "smooth" }}>
      <body
        className={` ${museo_moderno_init.variable} ${poppins_init.variable} font-poppins `}
      >
        {children}
      </body>
    </html>
  );
}
