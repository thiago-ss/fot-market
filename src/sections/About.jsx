import { motion } from "framer-motion"
import { about } from '../constants'

export default function About() {
  return (
    <section id="about" className="h-[600px] bg-[#181818] py-[50px] flex flex-col items-center justify-around sm:h-[1000px] md:h-[910px]">

      <h1 className="uppercase font-bold text-[45px] text-center text-white sm:text-[30px] md:text-[32px]">sobre a fot</h1>

      <p className="text-white font-bold text-center text-[20px] sm:text-[16px] md:text-[16px] md:max-w-[350px] lg:text-[18px] lg:max-w-[700px] xl:max-w-[1100px] 2xl:max-w-[1100px]">
        Nascemos grandes, ousados e precisos. Fazemos parte de um grande grupo de empresas, que desde 2016 se posicionou como um dos maiores
        grupos de investimento a nível internacional, o que nos credenciou a crescer tão rapidamente a expandir este crescimento como corretora de FOREX,
        totalmente regulamentada. Atuamos hoje em Portugal, Chile, Argentina e Colômbia, mas em breve estaremos em toda a América Latina, Europa e EUA.
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-1 mt-10 sm:mt-2 lg:text-[13px] lg:mt-1">
        {about.map((item) => (
          <div key={item.id}>
            <img src={item.imgUrl} alt="icon" className="max-w-[42.51px] h-[50px] mx-auto" />
            <p className="text-center text-white font-bold md:mb-10 sm:mb-10">{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
