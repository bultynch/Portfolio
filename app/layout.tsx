import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts/fonts";


export const metadata: Metadata = {
  title: "Bultynch Portfolio",
  description: "Proyect Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
