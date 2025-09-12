import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Infinia - Software Development Solutions | Custom Web & Mobile Apps",
  description:
    "Professional software development services. We build custom web applications, mobile apps, and enterprise solutions with modern technologies and best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} antialiased font-sans`}>
        <NextTopLoader
          color="#8b5cf6"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #8b5cf6,0 0 5px #8b5cf6"
        />
        {children}
      </body>
    </html>
  );
}
