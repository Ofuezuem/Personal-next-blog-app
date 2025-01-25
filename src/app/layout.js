import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import ThemeComp from "./components/ThemeComp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ofuezuem's Blog",
  description: "A blog about software development and other things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeComp>
            <Header />
            {children}
          </ThemeComp>
        </ThemeProvider>
      </body>
    </html>
  );
}
