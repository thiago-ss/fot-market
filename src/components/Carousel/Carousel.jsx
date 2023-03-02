import './Carousel.css'

import { motion } from 'framer-motion';

import EmblaCarousel from "./EmblaCarousel";
import { tutorials1, tutorials2 } from '../../constants';
import { textVariant, fadeIn, zoomIn } from '../../utils/motion';

const OPTIONS = { inViewThreshold: 0, dragFree: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => (
  <section className="bg-[#181818] font-poppins p-5 min-h-screen-[55vh] pb-[50px]">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container"
    >
      <motion.h1 variants={textVariant(0.5)} className="text-white font-bold text-[45px] text-center mt-[30px]">TUTORIAIS</motion.h1>

      <motion.div
        variants={zoomIn(0.8, 1)}
        className="sandbox mt-20"
      >
        <div className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </motion.div>
      <div className="flex flex-col gap-[80px] mt-[35px]">
        <div className='flex gap-[300px] items-center justify-center'>
          {tutorials1.map((item) => (
            <motion.div variants={textVariant(1.1)} className="flex flex-col gap-2" key={item.id}>
              <img src={item.imgUrl} className="w-[45px] mx-auto" />
              <p className="text-center text-[15px] font-bold text-white max-w-[174px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className='flex gap-[300px] items-center justify-center ml-[3%]'>
          {tutorials2.map((item) => (
            <motion.div variants={textVariant(1.4)} className="flex flex-col gap-2" key={item.id}>
              <img src={item.imgUrl} className="w-[45px] mx-auto" />
              <p className="text-center text-[15px] font-bold text-white max-w-[174px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Carousel;