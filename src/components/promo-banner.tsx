const promoItems = [
  "EMI Available at just ₹2,000/month",
  "Limited Period Offer — 20% OFF on All Memberships",
];

const PromoBanner = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground overflow-hidden py-2 [--promo-gap:2rem] my-2">
      <div className="flex w-max shrink-0 items-center gap-(--promo-gap) animate-promo-marquee hover:paused motion-reduce:animate-none">
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? "dup" : "orig"}
            aria-hidden={isDuplicate}
            className="flex shrink-0 items-center gap-(--promo-gap)"
          >
            {promoItems.map((item) => (
              <span
                key={`${isDuplicate ? "d" : "o"}-${item}`}
                className="flex shrink-0 items-center gap-(--promo-gap) text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                <span className="text-primary-foreground/60">★</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
