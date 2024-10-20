import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeContextProvider } from "./home-context";
import PageCheck from "./PageCheck";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen w-screen overflow-y-auto overflow-x-hidden`}
      >
        <HomeContextProvider>
          <Header />
          <PageCheck>
            {children}
          </PageCheck>
          <Footer />
        </HomeContextProvider>
      </body>
    </html>
  );
}
