import EventBannerCarousel from "@/components/Home/EventBannerCarousel";
import BannerEvent from "@/models/BannerEvent";
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
  return (
    <>
      <main>
        <div className="container py-24 flex flex-col h-screen">
          <EventBannerCarousel bannerEvents={eventList} />
        </div>
      </main>
    </>
  );
}
