export function Logo({
  className = "text-[40px]",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-end gap-[0.12em] leading-none ${className}`}>
      <svg viewBox="0 0 38 47" className="h-[1em] w-auto shrink-0" aria-hidden="true">
        <rect width="38" height="47" fill="#D6AE5F" />
        <path
          fill="#ffffff"
          d="M6 5H18.2A13.2 13.2 0 1 1 14.8 31H10V38H20V43H6V15H20V20H10V27H21A9.2 9.2 0 0 0 21 9.5H6Z"
        />
      </svg>
      <span className="flex flex-col items-end font-logo">
        <span
          className={`text-[0.72em] font-bold tracking-[-0.045em] ${tone === "light" ? "text-ivory" : "text-[#141210]"}`}
        >
          PALLADIUM
        </span>
        <span className="mt-[0.08em] text-[0.25em] font-medium tracking-[0.04em] text-[#D6AE5F]">
          estética
        </span>
      </span>
    </span>
  );
}
