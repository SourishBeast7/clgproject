import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BloodFinder",
  description: "BloodFinder helps people to find the bloodbanks in their city according to their desired blood type",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
