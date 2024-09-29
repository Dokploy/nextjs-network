import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milan Panin - Blog",
  description: "A personal blog by Milan Palin dedicated to modern web development and other cutting-edge technologies. Follow along for insights and tutorials.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
