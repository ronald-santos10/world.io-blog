import Link from "next/link";

export const CardBlog = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 bg-transparent border-2 border-gray-900 rounded-lg max-w-96">
      <div
        className="rounded-lg w-full h-40 bg-cover bg-no-repeat bg-center md:h-56"
        style={{ backgroundImage: "url('/image.webp')" }}
      />
      <div className="flex flex-col gap-4 md:gap-6 px-4 pb-4">
        <h3 className="text-cyan-400">29 de outubro de 2024</h3>
        <h2 className="text-2xl text-gray-50">
          Os Benefícios da Meditação Diária para a Saúde Mental
        </h2>
        <p className="text-gray-500">
          Saiba como a prática de meditação está ajudando milhões a encontrar
          paz interior e a melhorar a qualidade de vida.
        </p>
        <Link href={"/"}>
          <span className="text-xl text-cyan-400">Ler mais</span>
        </Link>
      </div>
    </div>
  );
};
