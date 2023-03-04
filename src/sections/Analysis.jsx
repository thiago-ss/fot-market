import { motion } from "framer-motion"

import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { analysis1, analysis2 } from "../constants";

export default function Analysis() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="overflow-hidden"
      >
        <div className="lg:gradient-3 xl:gradient-3 2xl:gradient-3" />
        <div className="lg:gradient-4 xl:gradient-4 2xl:gradient-4" />
        <div className="bg-[#EBEDEE] h-[550px] font-poppins pt-[37px] px-[285px] sm:h-[1000px] sm:px-[10px] md:h-[840px] md:px-[11px]">
          <motion.h1 variants={textVariant(0.2)} className="font-bold uppercase text-center text-[30px]">Condições de trading</motion.h1>
          <motion.div variants={textVariant(0.3)} className="w-[400px] h-[2px] bg-[#000] mx-auto sm:w-[100%] md:w-[100%]" />
          <motion.h1 variants={textVariant(0.4)} className="font-bold uppercase text-center text-[30px] text-[#C6AA0E]">Análise de mercado</motion.h1>
          <div className="lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between grid grid-cols-1">
            <motion.div
              variants={fadeIn('right', 'tween', 0.3, 1.2)}
              className="mt-[60px]"
            >
              {analysis1.map((item, index) => (
                <div className="flex gap-2 mb-3" key={index}>
                  <img src="/check.svg" alt="Check icon" />
                  <p className="font-bold text-[15px]">{item}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.3, 1.2)}
              className="mt-[60px]"
            >
              {analysis1.map((item, index) => (
                <div className="flex gap-2 mb-3" key={index}>
                  <img src="/check.svg" alt="Check icon" />
                  <p className="font-bold text-[15px]">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 0.6)} className="flex flex-col gap-3 justify-center items-center mt-[80px]">
            <h2 className="text-[#C6AA0E] font-semibold text-[22px]">DEPÓSITOS</h2>
            <div className="w-[400px] h-[2px] bg-[#000] mx-auto sm:w-[100%] md:w-[100%]" />
            <p className="max-w-[449px] font-bold text-[15px] text-center">
              Escolha dentre 13 opções, qual é a melhor alternativa para realizar seu depósito
              de forma segura e rápida e inicie suas operações no Mercado imediatamente.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
