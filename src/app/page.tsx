import httpRequest from "@/networks/httpRequest";

export default function Home() {
  const list = httpRequest({ url: "/event-banners", method: "get" });
  console.log(list);
  return (
    <>
      <main></main>
    </>
  );
}
