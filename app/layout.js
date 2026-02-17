import { Plus_Jakarta_Sans, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-georgian",
  weight: ["300", "400", "600", "800"],
});

export const metadata = {
  title: "redRox | Premium Web Solutions & Digital Design",
  description: "redRox Webstudio specializes in creating high-performance, visually stunning websites and digital experiences. Elevate your brand with our premium design and development services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${notoSansGeorgian.variable}`}>
        {children}
        <style dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: var(--font-plus-jakarta), var(--font-noto-georgian), sans-serif;
          }
        `}} />
      </body>
    </html>
  );
}
