"use client";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

export default function Batch({ props }: { props: BatchProps }) {
  const { name, count, images } = props;
  const [hasError, setHasError] = useState(false);
  const hasAnyError = images.find((i) => i.ready == false || i.error == true);
  console.log(hasAnyError);
  return (
    <div className="h-screen w-screen bg-white p-5">
      <div className="w-full bg-black px-5 flex items-center gap-10 h-50">
        <div className=" grid grid-cols-2 gap-5 max-w-50">
          {images.map((i) => {
            // console.log(i)
            if (i.ready == true && i.error == false) {
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
            } else {
            //   setHasError(true);
              return (
                <TriangleAlert
                  key={i.url}
                  className="bg-red-500 p-3 text-white h-15 w-15 rounded-full"
                />
              );
            }
          })}
        </div>
        <div className="flex-1">
          <p className="text-3xl">
            {name} {count}
          </p>
          <p className="text-gray-300">Moradabad, Uttar Pradesh</p>
        </div>
        <div>
          {hasAnyError ? (
            <TriangleAlert className="bg-red-500 p-3 text-white h-15 w-15 rounded-full" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
