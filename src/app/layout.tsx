import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/header.component";

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

export const metadata: Metadata = {
  title: "J Kamal Kumar, Personal Website",
  description:
    "Hello, Welcome to kamal's personal website where he posts his experience through blogs and writeups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-200`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
