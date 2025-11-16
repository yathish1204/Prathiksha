import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Prathiksha Weds Ganesh",
  description:
    "Join us in celebrating the wedding of Prathiksha and Ganesh on December 1, 2025, in Udupi, India. Your presence will make our day truly special!",
};

const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.woff",
  variable: "--font-great-vibes",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable} `}>{children}</body>
    </html>
  );
}
