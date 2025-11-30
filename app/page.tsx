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
      error: true,
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
  return (
    <main>
      <Batch props={props} />
    </main>
  );
}
