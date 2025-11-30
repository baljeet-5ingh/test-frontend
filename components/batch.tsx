import { TriangleAlert } from "lucide-react";
import Image from "next/image";

interface BatchProps {
  name: string;
  count: number;
  images: images[];
}

interface images {
  url: string;
  ready: boolean;
  error: boolean;
}

export default async function Batch({ props }: { props: BatchProps }) {
  const { name, count, images } = props;
  return (
    <div className="h-screen w-screen bg-white p-5">
      <div className="w-full bg-black px-5 flex items-center gap-10 h-50">
        <div className=" grid grid-cols-2 gap-5 max-w-50">
          {images.map((i) => {
            // console.log(i)
            return (
              <Image
                key={i.url}
                src={i.url}
                height={40}
                width={40}
                alt="placeholder"
                className="object-cover h-full w-full rounded-full"
              />
            );
          })}
        </div>
        <div className="flex-1">
          <p className="text-3xl">
            {name} {count}
          </p>
          <p className="text-gray-300">Moradabad, Uttar Pradesh</p>
        </div>
        <div>
          <TriangleAlert />
        </div>
      </div>
    </div>
  );
}
