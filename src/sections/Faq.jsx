import {faq} from '../constants/index'

export default function Faq() {
  return (
    <section className="bg-[#EBEDEE] min-h-[60vh] py-[20px] px-[170px]">
      <div className="flex gap-[30px] items-center mb-[35px]">
        <h1 className="font-bold text-black text-[45px] font-poppins">FAQ</h1>
        <div className="w-[400px] h-[1px] bg-[#000]" />
      </div>
      {faq.map((item) => (
        <div key={item.id} className="flex flex-col gap-[12px] font-montserrat mb-[20px]">
          <h2 className='font-bold text-[20px] text-black'>{item.title}</h2>
          <p className='max-w-[762px] text-[#4F4F4F] text-[16px] font-semibold'>{item.label}</p>
        </div>
      ))}
    </section>
  )
}
