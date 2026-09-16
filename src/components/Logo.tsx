import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="CrowdStock"
      width={64}
      height={64}
      className={cn("h-8 w-8 rounded-[9px]", className)}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-text">
        CrowdStock
      </span>
    </span>
  );
}
