import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"; //to merge tailwind classes, this cn is from shadcn

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4", font.className)}>
      <div className="bg-white rounded-full p-1">
        <Image src={"/spooky.svg"} alt="gamehub" width={80} height={80} />
      </div>
      <div className="flex flex-col items-center">
        <p className={"text-xl font-semibold text-white"}>GameHub</p>
        <p className={"text-sm text-muted-foreground"}>Let&apos;s Play</p>
      </div>
    </div>
  );
};
