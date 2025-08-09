import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "../../../Components/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const VoicesOfCare = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonials");
      return res.data;
    },
  });

  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) return <Loader />;

  return (
    <section className="px-6 md:px-20 text-primary">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-5 text-center text-gradient"
      >
        Voices of Care
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" mb-16 text-center text-accent"
      >
        Hear from our community members about how Share and Care connects people, reduces food waste, and spreads kindness through food sharing.
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="max-w-6xl mx-auto"
        spaceBetween={40}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
      >
        {testimonials.map(({ name, location, photo, testimonial }, idx) => {
          // Adjust activeIndex matching with breakpoints:
          // On mobile with slidesPerView=1 and centeredSlides=false,
          // the slide indexes line up, so activeIndex is fine.
          // Just keep logic same, Framer motion will animate the focused slide.

          // For mobile when centeredSlides false, treat current slide as active:
          const isActive =
            idx === activeIndex ||
            (window.innerWidth < 768 && idx === activeIndex);

          return (
            <SwiperSlide key={idx}>
              <motion.div
                initial={false}
                animate={{
                  y: isActive ? 20 : 0,
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.85,
                  borderRadius: "1rem",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                className="relative bg-gradient-to-tr from-[#1F2937] to-[#374151] p-10 rounded-xl cursor-pointer select-none flex flex-col items-center text-center "
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#9EADBF] shadow-lg mb-8">
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <p className="italic text-[#CBD5E1] mb-8 leading-relaxed max-w-[300px] font-light drop-shadow-md">
                  “{testimonial}”
                </p>
                <p className="font-semibold text-[#E0E7FF] text-lg tracking-wide">
                  {name}
                </p>
                <p className="text-sm text-[#9CA3AF] mt-1">{location}</p>

                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-4 left-6 text-[6rem] text-[#9EADBF] select-none pointer-events-none"
                  >
                    ❝
                  </motion.span>
                )}
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default VoicesOfCare;
