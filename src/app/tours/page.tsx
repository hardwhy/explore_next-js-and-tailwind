import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  service: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log("Data", data);
  return data;
};

export default async function ToursPage() {
  const data = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((t) => (
          <Link
            className="hover:text-slate-500"
            key={t.id}
            href={`/tours/${t.id}`}
          >
            <div className="relative h-48 mb-2">
              <Image
                src={t.image}
                alt={t.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded"
              />
            </div>
            <h2> {t.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
