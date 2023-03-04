import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

export default function Platforms() {
  return (
    <section className="bg-[#EBEDEE]">
      <div className="overflow-hidden ">
        <div className="lg:gradient-1 xl:gradient-1 2xl:gradient-1" />
        <div className="lg:gradient-2 xl:gradient-2 2xl:gradient-2" />
        <div className="bg-[#EBEDEE] h-[450px] px-[355px] py-[110px] 
        sm:h-[960px] sm:px-[10px] sm:py-[10px] md:h-[570px] md:px-[10px] md:py-[10px] lg:h-[360px] lg:px-[10px] lg:py-[10px] lg:mr-[30px] lg:ml-[30px] xl:h-[340px] xl:py-[10px] xl:px-[170px]">

          <h1 className="text-black font-montserrat font-bold text-[30px] mb-[17px] sm:text-[28px] lg:mt-10">BAIXE AS PLATAFORMAS DE TRADING</h1>
          <p className="font-montserrat text-[20px] text-[#3C3400] max-w-[707px] sm:text-[16px] md:text-[17px] lg:text-[19px]">
            O METATRADER 5 é uma plataforma para realizar transações de forma rápida e prática, contendo todos os ativos. Utilizada por cerca de 7 milhões de
            pessoas no planeta, usada tanto por especialistas quanto por investidores menos experientes.
          </p>
          <img src="/line.svg" alt="Line" className=" mt-5 mb-5 " />
          <div className="grid grid-cols-6 gap-1 max-w-[700px] sm:grid-cols-1 md:grid-cols-5">
            <img src="/Metatrade-SVG.svg" alt="Metatrader 5 logo" className="w-[140px] sm:w-[200px] sm:mr-auto sm:ml-auto md:hidden" />
            <div className="mr-auto ml-auto">
              <img src="/windows.svg" alt="Windows logo" className=" w-[50px] h-[50px]"/>
              <p className="text-black text-center mt-2">PC</p>
            </div>
            <div className="mr-auto ml-auto">
              <img src="/android.svg" alt="Android logo" className=" w-[50px] h-[50px]" />
              <p className="text-black text-center mt-2">Android</p>
            </div>
            <div className="mr-auto ml-auto">
              <img src="/mac-desktop.svg" alt="Mac logo" className=" w-[50px] h-[50px]"/>
              <p className="text-black text-center mt-2">MAC</p>
            </div>
            <div className="mr-auto ml-auto">
              <img src="/ios.svg" alt="iOS logo" className=" w-[50px] h-[50px]"/>
              <p className="  text-black text-center mt-2">iOS</p>
            </div>
            <div className="mr-auto ml-auto">
              <img src="/web.svg" alt="Web logo" className=" w-[50px] h-[50px]"/>
              <p className="text-black text-center mt-2">Web</p>
            </div>
          
          </div>
          <img src="/Metatrade-SVG.svg" alt="Metatrader 5 logo" className="w-[140px] md:w-[200px] mr-auto ml-auto sm:hidden lg:hidden xl:hidden 2xl:hidden" />
        </div>
      </div>
      


    </section>
  )
}
