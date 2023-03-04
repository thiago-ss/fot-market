import {faq} from '../constants/index'

export default function Faq() {
  return (
    <section className="bg-[#EBEDEE] h-[555px] py-[20px] md:px-[20px] lg:px-[170px] xl:px-[170px] 2xl:px-[170px] sm:h-[850px] md:h-[850px]">
      <div className="flex gap-[30px] items-center mb-[35px]">
        <h1 className="font-bold text-black text-[45px] font-poppins sm:ml-[10px]">FAQ</h1>
        <div className="w-[400px] h-[1px] bg-[#000]" />
      </div>
      {faq.map((item) => (
        <div key={item.id} className="flex flex-col gap-[12px] font-montserrat mb-[20px]">
          <h2 className='font-bold text-[20px] text-black sm:ml-[10px]'>{item.title}</h2>
          <p className='max-w-[762px] text-[#4F4F4F] text-[16px] font-semibold sm:ml-[10px] '>{item.label}</p>
        </div>
      ))}
    </section>
  )
}
