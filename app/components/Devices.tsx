import Image from "next/image";

/* Flattened mock-ups: Birch screens composited into Apple Design Resources bezels. */

export function Phone({
  screen,
  alt,
  className = "",
  priority = false,
  sizes = "320px",
}: {
  screen: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`device-phone ${className}`}>
      <Image
        src={`/devices/phone-${screen}.webp`}
        alt={alt}
        width={675}
        height={1380}
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}

export function Watch({
  screen,
  alt,
  className = "",
  sizes = "200px",
}: {
  screen: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`device-watch ${className}`}>
      <Image src={`/devices/watch-${screen}.webp`} alt={alt} width={560} height={880} sizes={sizes} />
    </div>
  );
}
