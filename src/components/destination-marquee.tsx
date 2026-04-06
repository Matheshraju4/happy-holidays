"use client";

import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

type DestinationMarqueeProps = {
  destinations: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

const speedClasses = {
  slow: "[--marquee-duration:32s]",
  normal: "[--marquee-duration:24s]",
  fast: "[--marquee-duration:18s]",
} as const;

const pillClassName =
  "inline-flex shrink-0 items-center gap-1 rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white";

const DestinationMarquee = ({
  destinations,
  className,
  speed = "normal",
}: DestinationMarqueeProps) => {
  if (destinations.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden [--marquee-gap:0.5rem] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-[var(--marquee-gap)] py-1 will-change-transform animate-destination-marquee hover:[animation-play-state:paused] motion-reduce:animate-none",
          speedClasses[speed],
        )}
      >
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? "duplicate" : "original"}
            aria-hidden={isDuplicate}
            className="flex shrink-0 items-center gap-[var(--marquee-gap)]"
          >
            {destinations.map((place) => (
              <span
                key={`${isDuplicate ? "duplicate" : "original"}-${place}`}
                className={pillClassName}
              >
                <MapPin className="size-3" />
                {place}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationMarquee;
