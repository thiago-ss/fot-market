import { negotiations } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export default function Negotiation() {
  return (
    <section className="h-[655px] w-full bg-black font-poppins flex sm:h-[700px] md:h-[700px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[50%] sm:w-[100%] md:w-[100%]"
      >
        <div className="text-center">
          <motion.h1 variants={textVariant(0.5)} className="font-bold mx-auto text-[30px] uppercase text-white pt-[75px] sm:text-[25px]">comece a negociar agora mesmo</motion.h1>
        </div>
        <div className="grid grid-rows-6 gap-10 mt-10 ml-[50px]">
          {negotiations.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              variants={fadeIn('right', 'tween', 1, 0.7)}
            >
              <img src="/check-icon-2.svg" alt="Check icon" className='w-[15px]'/>
              <p className="text-white font-bold text-[20px] max-w-[800px] sm:max-w-[100%] sm:text-[11px] md:max-w-[100%] md:text-[11px]">{item}</p>
            </motion.div>
          ))}
          <motion.button variants={fadeIn('up', 'tween', 1.3, 0.5)} href="#" className="button2 mt-[40px] bg-[#C6AA0E] text-[#3C3400] mb-10 md:mt-[10px]">Abra sua conta</motion.button>
        </div>
      </motion.div>
      <div className="bg-[url('/trading2.jpg')] w-[50%] bg-no-repeat bg-cover sm:hidden md:hidden" />
    </section>
  )
}
