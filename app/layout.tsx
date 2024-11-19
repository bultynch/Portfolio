import type { Metadata } from "next";
import "./globals.css";
import { montserrat,pacifico,fjallaone, lobster, inter } from "./fonts";


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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
