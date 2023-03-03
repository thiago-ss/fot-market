import { motion } from 'framer-motion';
import { webinarios } from '../constants';

import { fadeIn, staggerContainer } from '../utils/motion';

export default function Webinarios() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="overflow-hidden"
      >
        <div className="h-[750px] bg-[url('/bg-webinararios.png')] bg-cover bg-no-repeat sm:h-[700px]">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="grid grid-cols-1 gap-6 font-poppins text-white p-[170px] sm:p-[10px]"
          >
            <h1 className=" font-bold text-[45px] sm:text-[30px] sm:mt-10">WEBINÁRIOS</h1>
            <p className="max-w-[768px] font-semibold text-[22px] sm:max-w-[100%] sm:text-[16px]">
              Webinários diários e gratuitos, apresentados por nossos especialistas, feito para você, que quer aprender de forma rápida e 
              interativa, ou para quem já opera, mas quer acompanhar as análises dos movimentos diários do mercado. Nossos especialistas 
              realizam análises técnicas e fundamentalistas e demonstram o que estão visualizando no mercado e as tendências para os períodos.
            </p>
          <button href="#" className="button2 mt-[40px] bg-[#C6AA0E] text-[#3C3400]">Abra sua conta</button>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1)}
            className="flex gap-[20px] items-center bg-[#C6AA0E] w-[315px] h-[70px] px-5 py-5 rounded-[8px]  opacity-80 absolute -bottom-[650px] right-[15px] sm:-bottom-[1580px]"
          >
            <img src="/calendar.png" alt="Agenda icon" />
            <p className="font-nunito font-semibold px-3 text-white max-w-[205px] text-[13px]">Agenda com diversos horários em inglês, espanhol e português.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
