export default function Platforms() {
	return (
		<section className="bg-[#EBEDEE] sm:min-h-[60vh] md:min-h-[40vh]">
			<div className="sm:py-10 sm:px-[5px] md:py-10 lg:py-10 lg:pl-20 lg:container lg:mx-auto xl:container xl:mx-auto 2xl:container 2xl:mx-auto">
				<div className="grid grid-cols-2 md:px-2 min-h-[450px]">
					<div className="flex items-center">
						<div className="bg-[#EBEDEE]">
							<h1 className="text-black font-montserrat font-bold text-[30px] mb-[17px] sm:text-[28px] lg:mt-10">BAIXE AS PLATAFORMAS DE TRADING</h1>
							<p className="font-montserrat text-[20px] text-[#3C3400] sm:text-[18px] md:text-[18px] lg:text-[19px]">
								O METATRADER 5 é uma plataforma para realizar transações de forma rápida e prática, contendo todos os ativos. Utilizada por cerca de 7 milhões
								de pessoas no planeta, usada tanto por especialistas quanto por investidores menos experientes.
							</p>
						</div>
					</div>

					<div className="flex">
						<div className="mx-auto my-auto flex flex-col gap-[20px] md:gap-[5px] sm:gap-[0px]">
							<img src="/metatrader-250-150.png" alt="Metatrader 5 logo" className="w-[200px] sm:w-[200px] block sm:hidden md:hidden" />

							<div className="grid grid-cols-3 max-w-[800px] gap-10 sm:grid-cols-1 md:grid-cols-1 sm:ml-20 md:ml-10">
								<div className="mx-auto">
									<img src="/windows.svg" alt="Windows logo" className=" w-[45px] h-[50px]" />
									<p className="text-black text-center mt-2">PC</p>
								</div>
								<div className="mx-auto">
									<img src="/android.svg" alt="Android logo" className=" w-[50px] h-[50px]" />
									<p className="text-black text-center mt-2">Android</p>
								</div>
								<div className="mx-auto">
									<img src="/mac-desktop.svg" alt="Mac logo" className=" w-[50px] h-[50px]" />
									<p className="text-black text-center mt-2">MAC</p>
								</div>
							</div>
							{/* <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-10 sm:ml-20 md:gap-10 md:grid-cols-1 md:ml-10"> */}
							<div className="flex justify-center gap-[20px] sm:flex-col sm:items-center sm:ml-[47px] md:flex-col md:ml-[28px]">
								<div className="md:pt-10 sm:pt-10">
									<img src="/ios.svg" alt="iOS logo" className=" w-[50px] h-[50px]" />
									<p className="  text-black text-center mt-2">iOS</p>
								</div>
								<div className="">
									<img src="/web.svg" alt="Web logo" className=" w-[50px] h-[50px]" />
									<p className="text-black text-center mt-2">Web</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
