import Batch from "@/components/batch";

export default function Home() {
  const images = [
    {
      url: "/deer.webp",
      ready: true,
      error: false,
    },
    {
      url: "/Alpine.webp",
      ready: true,
      error: false,
    },
    {
      url: "/lakee.jpeg",
      ready: true,
      error: false,
    },
    {
      url: "/nature-background.webp",
      ready: true,
      error: false,
    },
  ];

  const name = "Super";
  const count = 30;

  const props = {
    name,
    count,
    images,
  };
  while (images.length < 4) {
    images.push({
      url: "/placeholder.png",
      ready: true,
      error: false,
    });
  }
  return (
    <main className="h-screen w-screen bg-white p-5">
      <Batch props={props} />
    </main>
  );
}
