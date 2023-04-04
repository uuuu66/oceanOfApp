import CategoryMenu from "@/components/Home/CategoryMenu";
import EventBannerCarousel from "@/components/Home/EventBannerCarousel";
import BannerEvent from "@/models/BannerEvent";
import Category from "@/models/Category";
import httpRequest from "@/networks/httpRequest";

export default function Home() {
  const list = httpRequest({ url: "/event-banners", method: "get" });
  const eventList: BannerEvent[] = [
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      from: "",
      to: "",
      description: "",
    },
    {
      imgSrc: "/Icon/Tab.png",
      id: "2",
      from: "",
      to: "",
      description: "",
    },
    {
      imgSrc: "/Icon/arrow-left.svg",
      id: "1",
      from: "",
      to: "",
      description: "",
    },
  ];
  const categories: Category[] = [
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "3",
      name: "반지",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "1",
      name: "피어싱",
    },
    {
      imgSrc: "/Icon/cart.png",
      id: "2",
      name: "목걸이",
    },
  ];
  return (
    <>
      <main>
        <div className="py-24 gap-4 flex flex-col h-screen">
          <EventBannerCarousel bannerEvents={eventList} />
          <CategoryMenu categories={categories} />
        </div>
      </main>
    </>
  );
}
