import CategoryMenu from "@/components/Home/CategoryMenu";
import EventBannerCarousel from "@/components/Home/EventBannerCarousel";
import Recomendation from "@/components/Home/Recomendation";
import BannerEvent from "@/models/BannerEvent";
import Category from "@/models/Category";
import Goods from "@/models/Goods";
import httpRequest from "@/networks/httpRequest";

export default function Home() {
  const list = httpRequest({ url: "/event-banners", method: "get" });
  const eventList: BannerEvent[] = [
    {
      imgSrc: "/Icon/example.png",
      id: "3",
      from: "",
      to: "",
      description: "",
    },
    {
      imgSrc: "/Icon/example.png",
      id: "2",
      from: "",
      to: "",
      description: "",
    },
    {
      imgSrc: "/Icon/example.png",
      id: "1",
      from: "",
      to: "",
      description: "",
    },
  ];
  const categories: Category[] = [
    {
      imgSrc: "/Icon/earring.png",
      id: "1",
      name: "귀걸이",
    },
    {
      imgSrc: "/Icon/necklace.png",
      id: "2",
      name: "목걸이",
    },
    {
      imgSrc: "/Icon/ring.png",
      id: "3",
      name: "반지",
    },
    { imgSrc: "/Icon/bracelet.png", id: "4", name: "팔찌" },
  ];
  const goodsList: Goods[] = [
    {
      name: "아름다운 다이아몬드",
      id: 1,
      price: 1000,
      imgSrcs: ["/Icon/example.png"],
      description: "다이아몬드 처럼 생긴 무언가",
      status: [{ name: "공격력", property: 1, imgSrc: "" }],
    },
  ];
  return (
    <>
      <main>
        <div className="py-24 gap-4 flex flex-col h-auto">
          <EventBannerCarousel bannerEvents={eventList} />
          <CategoryMenu categories={categories} />
          <Recomendation recomendationList={goodsList} />
        </div>
      </main>
    </>
  );
}
