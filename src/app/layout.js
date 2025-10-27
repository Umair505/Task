import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy Pay",
  description: "A simple and efficient payment processing application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
