"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    },
    {
      name: "Daniel Thompson",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Discover a payment app focused on clarity and transparency. Enjoy a seamless flow without hidden fees, providing clarity at every step. It's designed to put confidence back into your payments.",
    },
    {
      name: "Sophia Lee",
      role: "Finance Consultant",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "This platform has completely changed how I handle payments. The process is intuitive, reliable, and transparent — perfect for both business and personal use.",
    },
    {
      name: "Sophia Lee",
      role: "Finance Consultant",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "This platform has completely changed how I handle payments. The process is intuitive, reliable, and transparent — perfect for both business and personal use.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="bg-[#FAFAFF] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold text-purple-600 mb-4 tracking-wider uppercase">
            TESTIMONIAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We've built trust with <br /> reviews from real users
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>

          {/* ARROWS */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-gray-400 hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative w-full overflow-hidden flex justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full mb-2"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 flex justify-center"
              >
                <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-[16px]">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-gray-900 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}