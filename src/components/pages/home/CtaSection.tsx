import { Typography } from "@/components/typography/typography";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="section-container ">
      <div className="bg-blue rounded-[32px] px-6 lg:px-16 pt-12 lg:pt-16 pb-20 lg:pb-28 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <Typography variant="h3-display" className="lg:uppercase text-white">
            Join our KicksPlus <br />
            Club & get 15% off
          </Typography>
          <Typography variant="body-lg" className="text-white/80 mt-2 lg:mt-4">
            Sign up for free! Join the community.
          </Typography>

          {/* Input + Button */}
          <div className="mt-6 flex items-center gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-[220px] sm:w-[260px] lg:w-[320px]
                         bg-transparent border border-white/40
                         text-white placeholder:text-white/60
                         rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="button"
              className="bg-black text-white text-sm font-semibold
                         px-6 py-3 rounded-lg hover:bg-neutral-800
                         transition"
            >
              SUBMIT
            </button>
          </div>
        </div>

        {/* Logo Right */}
        <div className="relative w-[160px] sm:w-[220px] lg:w-[280px] h-[80px] sm:h-[110px] lg:h-[140px]">
          <Image
            src="/call-to-logo.png"
            alt="Kicks Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
