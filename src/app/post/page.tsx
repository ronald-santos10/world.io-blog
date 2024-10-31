import { CardBlog } from "@/components/card-blog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <div className="flex flex-col gap-14 md:gap-28">
      <main className="mx-auto max-w-sm flex flex-col justify-between gap-14 md:gap-28 md:max-w-7xl">
        <Header />
        <section className="flex flex-col gap-4 items-center md:gap-8">
          <span className="text-cyan-400 text-sm text-center md:text-2xl">
            29 de outubro de 2024
          </span>
          <h2 className="text-gray-50 text-2xl font-bold text-center md:text-5xl">
            Os Benefícios da Meditação Diária para a Saúde Mental
          </h2>
          <div
            className="rounded-lg w-full h-40 bg-cover bg-no-repeat bg-center md:h-[518px]"
            style={{ backgroundImage: "url('/image.webp')" }}
          />
          <p className="text-gray-500 md:text-2xl">
            Saiba como a prática de meditação está ajudando milhões a encontrar
            paz interior e a melhorar a qualidade de vida.
          </p>
        </section>

        <section className="flex flex-col gap-4 md:gap-8">
          <h3 className="text-gray-50 text-lg md:text-3xl">Introdução</h3>
          <div>
            <p className="text-gray-100 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum placerat tincidunt. Sed ac dui tincidunt, vestibulum
              eros id, interdum ligula. Ut ac lectus lectus. Fusce ultricies
              commodo augue sit amet fermentum. In sapien lectus, laoreet a
              tempor ut, posuere eu elit. Aenean aliquet sollicitudin massa, ac
              vehicula nibh elementum ut. Nulla aliquam fermentum arcu nec
              tempus. Morbi tristique leo ac nulla euismod, vel fermentum magna
              convallis. Aliquam efficitur hendrerit nibh, non ultricies odio
              sagittis at. Maecenas venenatis tellus a elementum auctor. Donec
              eget vestibulum diam, non tempor felis. Fusce turpis magna,
              elementum rhoncus luctus sit amet, consectetur at libero. Aliquam
              ut est turpis. Fusce suscipit lobortis libero, porta tincidunt
              felis tincidunt sed. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Vestibulum imperdiet in
              nulla ac interdum. Donec nisl arcu, accumsan sit amet sapien in,
              viverra tristique ante. Cras semper ac libero eu feugiat.
              Vestibulum sem turpis, viverra eget gravida sit amet, consequat ut
              lectus. Nam vulputate justo non urna tristique, vitae ultricies
              elit venenatis. Cras mauris turpis, tempor porttitor aliquet id,
              eleifend sit amet risus. Aenean porta blandit rutrum. Aliquam
              neque justo, condimentum eu metus vitae, aliquet euismod nunc.
              Aliquam efficitur ut lacus nec congue.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6 md:gap-8">
          <div className="h-px bg-gray-900"/>
          <h3 className="text-gray-50 text-lg md:text-3xl">Blogs recentes</h3>
          <div className="flex flex-wrap gap-6 ">
            <CardBlog />
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
