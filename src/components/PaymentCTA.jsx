"use client";
import Image from "next/image";
import backGroundImg from "../../public/images/backGroundImg.png";

export default function PaymentCTA() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={backGroundImg}
          alt="Payment background"
          fill
          className="object-cover"
          quality={100}
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Ready to experience seamless <br className="hidden sm:block" />
            secure payments globally
          </h2>

          <p className="text-gray-200 max-w-2xl mb-8 text-[17px] leading-relaxed">
            Ready for hassle-free, secure payments anywhere in the world? Start using
            <span className="font-semibold"> Monks Pay </span> today — it's fast, free, and
            focused on keeping your transactions secure!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all">
              Download the App
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-medium transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
