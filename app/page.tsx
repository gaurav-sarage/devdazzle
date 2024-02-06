import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30; // Refetch blog posts every 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.titleImage).url()} alt="Title Image" width={500} height={500} className="rounded-t-lg h-[200px] object-cover" />

          <CardContent className="mt-5">
            <h3 className="text-xl line-clamp-2 font-bold">{post.title}</h3>

            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>

            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>
                Read More
              </Link>
            </Button>

          </CardContent>
        </Card>
      ))}
    </div>
  );
};