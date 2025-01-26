"use client";

import Image from "next/image";
import ShellNav from "@/components/ShellNav/ShellNav";


{/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"></code> */}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center !h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <ShellNav placeholder="chmod +x bash-a-crumb.sh && ./bash-a-crumb.sh" />

        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Execute the command above!
          </li>
          <li>Navigate!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
