import { Search } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex flex-col gap-6 py-6 md:flex-row md:justify-between md:items-center md:py-12">
      <a href="/">
        <Image src="/logo.svg" alt="logo world.io" width={126} height={28} />
      </a>

      <div className="flex items-center gap-3 p-3 border-2 rounded-lg border-gray-800 md:w-96">
        <Search className="text-gray-800" />
        <input
          className="flex-1 bg-transparent placeholder-gray-800 text-gray-50 focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="pesquise um blog..."
        />
      </div>
    </header>
  );
};
