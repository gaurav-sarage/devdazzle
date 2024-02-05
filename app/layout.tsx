import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "DevDazzle | Tech Blogs by 0xgauravv",
  description: "DevDazzle is a technical blog built using NextJS, Tailwind CSS & Sanity CMS",
};

export default function RootLayout({
  children
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-2xl mx-auto px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
};