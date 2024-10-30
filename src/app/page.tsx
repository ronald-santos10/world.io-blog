import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 md:gap-28">
      <Header />
      <section>
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:w-2/4">
            <h1 className="text-2xl text-gray-50 md:text-5xl"><span className="text-cyan-400 font-bold">World.io</span>: Explorando Ideias que Transformam o Mundo!</h1>
            <h2 className="text-gray-500 font-normal text-base md:text-2xl">
              Descubra Perspectivas, Conecte-se com o Novo e Inspire-se a Cada
              Postagem!
            </h2>
          </div>
          <img className="size-80 md:size-2/5" src="/hero-section.svg" alt="planetas conectados" />
        </div>
      </section>
      <h3 className="text-gray-50 text-lg md:text-3xl">Blogs recentes</h3>
      <section>

      </section>
    </div>
  );
}
