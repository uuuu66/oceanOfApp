import Header from "@/components/Common/Header";
import Navigation from "@/components/Common/Navigation";
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
        {children}
        <Navigation
          navList={[
            { to: "", name: "홈", iconSrc: "/Icon/Tab.png" },
            { to: "", name: "구매하기", iconSrc: "/Icon/Tab.png" },
            { to: "", name: "그리기", iconSrc: "/Icon/Tab.png" },
            { to: "", name: "주문내역", iconSrc: "/Icon/Tab.png" },
            { to: "", name: "내 정보", iconSrc: "/Icon/Tab.png" },
          ]}
        />
      </body>
    </html>
  );
}
