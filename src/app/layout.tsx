import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigation/Header";
import AuthContextFunc from "@/lib/AuthContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/Navigation/ThemeProvider";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AuthContextFunc>
            <Header />
            <div className=" lg:pt-6 ">{children}</div>
            <Toaster position="bottom-right" reverseOrder={false} />
          </AuthContextFunc>
        </ThemeProvider>
      </body>
    </html>
  );
}
