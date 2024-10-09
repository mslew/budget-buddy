import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./_components/nav";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Budget Buddy",
  description: "The one application for your budgeting needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="h-screen w-screen overflow-hidden">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
