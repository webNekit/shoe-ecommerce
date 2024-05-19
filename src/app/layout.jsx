import { Inter } from "next/font/google";
import "./globals.css";
import LayoutPage from "../layout/LayoutPage/LayoutPage";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getCatalogProps } from "@/hooks/Catalog/getCatalog";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kirani",
  description: "Generated by create next app",
};


export default function RootLayout({ headerData, children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg-gray-50 text-gray-700 text-base min-h-screen'}>
        <Header />
        <LayoutPage>
          {children}
        </LayoutPage>
        <Footer />
      </body>
    </html>
  );
}