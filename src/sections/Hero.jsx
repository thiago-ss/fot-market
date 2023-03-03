import { motion } from 'framer-motion';

import { textVariant } from '../utils/motion';

export default function Hero() {
  return (
    <section
      className="bg-[url('/bg-paralax1.jpg')] h-[500px] bg-cover w-full bg-no-repeat pt-[25px] sm:h-[100%]"
      id='hero'
    >
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} 
        className="font-montserrat text-white ml-[170px] mr-[170px] py-[110px] z-8 absolute sm:static sm:mr-[30px] sm:ml-[30px]"
      >
        <motion.h1 
          variants={textVariant(0.4)} 
          className="max-w-[500px] text-[30px] font-bold leading-[48px] sm:text-[20px] "
        >
          NEGOCIAÇÃO FOREX, ÍNDICES,
          CFDs CRIPTOS E MUITO MAIS
        </motion.h1>

        <motion.p 
          variants={textVariant(0.5)} 
          className="max-w-[530px] text-[20px] font-bold mt-[12px] leading-[26px] mb-[20px] sm:text-[14px]"
        >
          Negocie em qualquer mercado, de qualquer lugar
          a qualquer horário e conte com nosso Suporte 12/6
        </motion.p>
        
        <motion.div className="grid grid-cols-3 gap-5 sm:grid-cols-1" variants={textVariant(0.6)} >
          <button className="button2 bg-[#C6AA0E] text-[#3C3400]">Abra conta demo</button>
          <button className="button2 bg-[#E0DCDC] text-[#404040]">Abra conta real</button>
          <button className="button2 bg-[#A0A0A0] text-[#3C3400]">Negocie 24/7</button>
        </motion.div>
      </motion.div>
    </section>
  )
}