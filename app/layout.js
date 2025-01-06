// app/layout.js
import localFont from "next/font/local"; // Import localFont
import { Sora } from 'next/font/google'; // Import the Sora font
import "./globals.css"; // Import your global CSS


// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load the Sora font
const sora = Sora({
  subsets: ['latin'], // Specify the subsets you need
  weights: ['100', '400', '600', '800'], // Specify the font weights you want to use
});

export const metadata = {
  title: "Gafoor NFC",
  description: "Ranzom Trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.className} antialiased`} // Add Sora class here
      >
       
        {children}
       
      </body>
    </html>
  );
}