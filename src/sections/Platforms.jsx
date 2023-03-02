import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

export default function Platforms() {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="bg-[#EBEDEE] min-h-[45vh] px-[355px] py-[110px]">

          <h1 className="text-black font-montserrat font-bold text-[30px] mb-[17px]">BAIXE AS PLATAFORMAS DE TRADING</h1>
          <p className="font-montserrat text-[2 0px] text-[#3C3400] max-w-[707px]">
            O METATRADER 5 é uma plataforma para realizar transações de forma rápida e prática, contendo todos os ativos. Utilizada por cerca de 7 milhões de
            pessoas no planeta, usada tanto por especialistas quanto por investidores menos experientes.
          </p>
          <img src="/line.svg" alt="Line" className=" mt-5 mb-5" />
          <div className="flex items-center gap-[45px]">
            <img src="/Metatrade-SVG.svg" alt="Metatrader 5 logo" className="w-60" />
            <div className="text-center mt-[10px]">
              <img src="/windows.svg" alt="Windows logo" />
              <p className="text-black">PC</p>
            </div>
            <div className="text-center">
              <img src="/android.svg" alt="Android logo" className="ml-[5px]" />
              <p className="text-black">Android</p>
            </div>
            <div className="text-center">
              <img src="/mac-desktop.svg" alt="Mac logo" />
              <p className="text-black">MAC</p>
            </div>
            <div className="text-center">
              <img src="/ios.svg" alt="iOS logo" />
              <p className="  text-black">iOS</p>
            </div>
            <div className="text-center">
              <img src="/web.svg" alt="Web logo" />
              <p className="text-black">Web</p>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}
