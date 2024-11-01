import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import client from "../../../sanity";
import Image from "next/image";

export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(query);

  return slugs.map((slug: string) => ({
    pageSlug: slug,
  }));
}

export default async function PostPage({ params }: { params: { pageSlug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    short_text,
    publishedAt,
    "mainImage": mainImage.asset->url
  }`;
  const post = await client.fetch(query, { slug: params.pageSlug });

  if (!post) {
    return <div>Página não encontrada</div>;
  }
    return (
        <div className="flex flex-col gap-14 md:gap-28">
      <main className="mx-auto max-w-sm flex flex-col justify-between gap-14 md:gap-28 md:max-w-7xl">
        <Header />
        <section className="flex flex-col gap-4 items-center md:gap-8">
          <span className="text-cyan-400 text-sm text-center md:text-2xl">
            {post.publishedAt}
          </span>
          <h2 className="text-gray-50 text-2xl font-bold text-center md:text-5xl">
            {post.title}
          </h2>
          <Image
            className="rounded-lg w-full h-40 bg-cover bg-no-repeat bg-center md:h-[518px]"
            src={post.mainImage} width={1216} height={518} alt={post.title}
          />
          <p className="text-gray-500 md:text-2xl">
            {post.short_text}
          </p>
        </section>
        <section className="flex flex-col gap-6 md:gap-8">
          <div className="h-px bg-gray-900"/>
          <h3 className="text-gray-50 text-lg md:text-3xl">Blogs recentes</h3>
          <div className="flex flex-wrap gap-6 ">
            
          </div>
        </section>
      </main>
      <Footer/>
    </div>
    )
}
