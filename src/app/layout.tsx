import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation/Header";

export const metadata: Metadata = {
  title: "Connectfolio",
  description: "social media website",
};
const font = Noto_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}    overflow-x-hidden`}>
        <Header />
        <div className=" lg:pt-6 ">{children}</div>
      </body>
    </html>
  );
}
