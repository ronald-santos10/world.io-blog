import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanity";


function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

export const CardBlog = ({ post }) => {
  const {
    title,
    mainImage,
    publishedAt,
    short_text,
    slug,
  } = post;

  const newDate = new Date()
  const formatedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(newDate)

  console.log(publishedAt)

  return (
    <div className="flex flex-col gap-4 md:gap-6 bg-transparent border-2 border-gray-900 rounded-lg max-w-96">
      <Image className="rounded-lg w-full h-40 bg-cover bg-no-repeat bg-center md:h-56"
      src={urlFor(mainImage).url()} width={390} height={215} alt={title}
      />
      <div className="flex flex-col gap-4 md:gap-6 px-4 pb-4">
        <h3 className="text-cyan-400">{formatedDate}</h3>
        <h2 className="text-2xl text-gray-50">{title}</h2>
        <p className="text-gray-500 line-clamp-5">{short_text}</p>
        <Link href={`/${slug.current}`}>
          <span className="text-xl text-cyan-400">Ler mais</span>
        </Link>
      </div>
    </div>
  );
};
