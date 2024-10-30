import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const Post = () => {
  return (
    <div className="flex flex-col gap-14 md:gap-28">
      <main className="mx-auto max-w-sm flex flex-col gap-14 md:gap-28 md:max-w-7xl">
        <Header />
      </main>
      <Footer />
    </div>
  );
};
