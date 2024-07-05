import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | My Bank",
  description: "My bak website",
  icons:{
    icon:'/my-bank-logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
