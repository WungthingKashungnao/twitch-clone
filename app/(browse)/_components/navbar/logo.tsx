import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"; //to merge tailwind classes, this cn is from shadcn
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden md:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1">
          <Image src={"/spooky.svg"} alt="GameHub" height={32} width={32} />
        </div>
        <div className={cn(font.className)}>
          <p className="text-lg font-semibold">GameHub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s Play</p>
        </div>
      </div>
    </Link>
  );
};
