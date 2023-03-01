import { negotiations } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export default function Negotiation() {
  return (
    <section className="min-h-[70vh] w-full bg-black font-poppins flex">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[50%]"
      >
        <div className="flex flex-col gap-3">
          {/* <Typed className="font-bold mx-auto text-[30px] uppercase text-white pt-[75px]" strings={['COMECE A NEGOCIAR AGORA MESMO']} typeSpeed={30}/> */}
          <motion.h1 variants={textVariant(0.5)} className="font-bold mx-auto text-[30px] uppercase text-white pt-[75px]">comece a negociar agora mesmo</motion.h1>
        </div>
        <div className="flex flex-col gap-[30px] mt-[50px] ml-[75px] pb-[115px]">
          {negotiations.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-5"
              variants={fadeIn('right', 'tween', 1, 0.7)}
            >
              <img src="/check-icon-2.svg" alt="Check icon" />
              <p className="text-white font-bold text-[16px] max-w-[550px]">{item}</p>
            </motion.div>
          ))}
          <motion.button variants={fadeIn('up', 'tween', 1.3, 0.5)} href="#" className="button2 mt-[40px] bg-[#C6AA0E] text-[#3C3400]">Abra sua conta</motion.button>
        </div>
      </motion.div>
      <div className="bg-[url('/trading2.jpg')] w-[50%] bg-no-repeat bg-cover" />
    </section>
  )
}
