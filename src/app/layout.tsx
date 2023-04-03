import Header from "@/components/Common/Header";
import Navigation from "@/components/Common/Navigation";
import { navs } from "@/constants/stringsKor";
import "@/styles/globalStyle.css";
export const metadata = {
  title: "SeaOfEverything",
  description: "Let's sail!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Navigation navList={navs} />
      </body>
    </html>
  );
}
