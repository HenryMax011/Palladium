import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/site";

export function Photo({
  name,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  name: PhotoKey;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={photos[name]}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      {...(priority ? { priority: true, loading: "eager" as const } : {})}
    />
  );
}
