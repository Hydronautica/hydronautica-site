import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hydronautica | AI for Offshore Engineering",
  description:
    "Hydronautica uses artificial intelligence, neural operators, and GPU programming to accelerate offshore wind, tidal, and floating structure design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
