import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Typography } from "../typography/typography";

const Footer = () => {
  return (
    <footer className="section-container">
      <div className="bg-dark-gray text-white rounded-[32px] pt-[24px] lg:pt-[40px] -mt-12 lg:-mt-20 relative overflow-hidden">
        <div className="px-4 lg:px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-[#F6A623] text-xl font-semibold">About us</h3>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#F6A623] text-xl font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {[
                "Runners",
                "Sneakers",
                "Basketball",
                "Outdoor",
                "Golf",
                "Hiking",
              ].map((item: string) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#F6A623] text-xl font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {["About", "Contact", "Blogs"].map((item: string) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#F6A623] text-xl font-semibold">Follow us</h3>
            <div className="flex items-center gap-4 mt-4 text-white/80">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
            </div>
          </div>
        </div>

        {/* Big Background Logo */}
        <div className="w-full px-[30px] pt-[45px] lg:pt-[90px]">
          <Image
            src="/footer-logo.png"
            alt="Kicks Big Logo"
            width={1262}
            height={313}
            className="w-full object-contain object-bottom"
          />
        </div>
      </div>
      {/* copy right area  */}
      <div className="text-center py-4 lg:py-6">
        <Typography variant="body" className="text-dark-gray text-center">
          © All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
