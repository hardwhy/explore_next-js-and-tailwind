import { HeaderImg } from "@/assets";
import Image from "next/image";
import React from "react";

const localImageUrl = "https://picsum.photos/200/300";

type TourDetailProp = {
  id: string;
};
export default async function TourDetail({
  params: { id },
}: {
  params: TourDetailProp;
}) {
  return (
    <div>
      <h1 className="text-4xl">ID : {await id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={HeaderImg}
            width={192}
            height={192}
            alt="headerImg"
            className="w-48 h-48 object-cover rounded"
          />
        </div>

        <div>
          <Image
            src={localImageUrl}
            width={192}
            height={192}
            alt="localImage"
            className="w-48 h-48 object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
}
