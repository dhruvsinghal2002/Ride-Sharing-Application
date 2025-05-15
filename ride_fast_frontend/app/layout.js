import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RideFast",
  description:
    "A Ride Sharing Application similar to that of Rapido or Ola where a customer can book their ride conveniently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider children={children} />
      </body>
    </html>
  );
}