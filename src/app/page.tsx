"use client";

import Image from "next/image";
import svgPhone from "@/assets/iphone-black.svg";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Cursor } from "@/components/cursor";
import { ChevronLeft, CircleHelp, Italic } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import ineImage from "@/assets/ineImage.png";
import selfieImage from "@/assets/selfieImage.png";

const options = [
	{ id: 1, emoji: "🌍", text: "Explorar nuevos destinos" },
	{ id: 2, emoji: "🏠", text: "Comprar tu primera casa" },
	{ id: 3, emoji: "💼", text: "Lanzar tu propio negocio" },
	{ id: 4, emoji: "🎓", text: "Continuar tus estudios" },
	{ id: 5, emoji: "📈", text: "Empezar a invertir" },
	{ id: 6, emoji: "🚗", text: "Adquirir un auto nuevo" },
	{ id: 7, emoji: "🎉", text: "Organizar un gran evento" },
	{ id: 8, emoji: "🚑", text: "Crear un fondo de emergencia" },
	{ id: 9, emoji: "🫶", text: "Hacer donaciones importantes" },
	{ id: 10, emoji: "💪", text: "Lograr independencia financiera" },
];

export default function Page() {
	const [currentStep, setCurrentStep] = useState(0);
	const [direction, setDirection] = useState();
	const [name, setName] = useState("");

	const content = useMemo(() => {
		switch (currentStep) {
			case 0:
				return (
					<>
						<div className='flex flex-col h-full w-full items-center justify-end py-8 px-10'>
							<div className='text-center mb-16 flex-col flex gap-2 text-balance'>
								<h1 className='text-3xl text-center font-bold text-black tracking-tight'>
									Empieza tu camino financiero con Banorte
								</h1>
								<p className='font-semibold text-gray-400'>
									Abre tu cuenta en minutos y personaliza tu experiencia
									bancaria.
								</p>
							</div>
							<div className='flex flex-col gap-3'>
								<motion.button
									className='rounded-full text-lg font-bold w-full h-12 bg-banorte hover:bg-banorte/95 text-white'
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										if (currentStep === 2) {
											setCurrentStep(0);
											setDirection(-1);
											return;
										}
										setDirection(1);
										setCurrentStep((prev) => prev + 1);
									}}
								>
									Crear una Nueva Cuenta
								</motion.button>
								<motion.button
									className='rounded-full text-lg font-bold w-full h-12 border border-input bg-background hover:bg-accent hover:text-accent-foreground'
									whileTap={{ scale: 0.95 }}
								>
									Agregar una Cuenta Existente
								</motion.button>

								<p className='text-xs text-center font-display mt-6 text-gray-300 font-semibold'>
									Usando la app, aceptas los{" "}
									<span className='text-gray-400'>Términos y Condiciones</span>{" "}
									y el{" "}
									<span className='text-gray-400'>Aviso de Privacidad</span> de
									Banorte.
								</p>
							</div>
						</div>
					</>
				);
			case 1:
				return (
					<>
						<div className='flex flex-col h-full w-full items-center justify-between py-8 px-8 pt-36'>
							<div className='text-left mb-16 flex-col flex gap-2 text-balance'>
								<h1 className='text-3xl font-bold text-black tracking-tight'>
									¿Cómo te llamas?
								</h1>
								<p className='font-semibold text-gray-400'>
									Queremos conocerte mejor para personalizar tu experiencia.
								</p>
								<Input
									className='border-none shadow-none font-display font-semibold text-lg text-black w-full h-12 bg-input ring-0 focus-visible:ring-0 mt-2 caret-banorte'
									type='text'
									placeholder='Tu nombre'
								/>
							</div>
							<div className='flex gap-2 w-full'>
								{/* <motion.button
									className='rounded-full text-lg font-bold h-12 hover:text-accent-foreground w-1/3 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										if (currentStep === 0) {
											return;
										}
										setDirection(-1);
										setCurrentStep((prev) => prev - 1);
									}}
								>
									Regresar
								</motion.button> */}
								<motion.button
									className='rounded-full text-lg font-bold w-full h-12 bg-banorte hover:bg-banorte/95 text-white disabled:opacity-50 disabled:pointer-events-none'
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										if (currentStep === 2) {
											setCurrentStep(0);
											setDirection(-1);
											return;
										}
										setDirection(1);
										setCurrentStep((prev) => prev + 1);
									}}
								>
									Continuar
								</motion.button>
							</div>
						</div>
					</>
				);
			case 2:
				return (
					<>
						<div className='flex flex-col h-full w-full items-center justify-between py-8 px-8'>
							<div className='text-left mt-20 flex-col flex gap-2 text-balance'>
								<h1 className='text-3xl font-bold text-black tracking-tight'>
									¿Qué te gustaría lograr con tu dinero?
								</h1>
								<p className='font-semibold text-gray-400'>
									Te ayudaremos a que logres tus metas financieras. Elige las
									que te representen mejor o selecciona tus propias metas.{" "}
								</p>
								<div className='flex flex-wrap gap-2'>
									{options.map((option) => (
										<Toggle
											key={option.id}
											className='flex items-center gap-1 rounded-full font-display font-medium'
											variant='outline'
										>
											<span>{option.emoji}</span>
											<span>{option.text}</span>
										</Toggle>
									))}
								</div>
							</div>
							<div className='flex gap-2 w-full'>
							<motion.button
                className='rounded-full text-lg font-bold w-full h-12 bg-banorte hover:bg-banorte/95 text-white disabled:opacity-50 disabled:pointer-events-none'
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setDirection(1);
                    setCurrentStep(3);
                }}
            >
                Continuar
            </motion.button>
							</div>
						</div>
					</>
				);
			case 3:
				return (
					<>
						<div className='flex flex-col h-full w-full items-center justify-between py-8 px-8'>
							<div className='text-left mt-20 flex-col flex gap-2 text-balance'>
								<h1 className='text-3xl font-bold text-black tracking-tight'>
									Sube tu INE
								</h1>
								<p className='font-semibold text-gray-400 text-center mt-4'>
									Sube una foto clara de tu INE para verificar tu identidad. Es seguro y solo tomará un momento. Así garantizamos que tu cuenta sea realmente tuya.
								</p>
							</div>
							<Image src={ineImage} alt='camera' className='w-40 h-40 mb-10 self-center' />
							<div className='flex gap-2 w-full'>
								<motion.button
									className='rounded-full text-lg font-bold w-full h-12 bg-banorte hover:bg-banorte/95 text-white disabled:opacity-50 disabled:pointer-events-none'
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										if (currentStep === 3) {
											setCurrentStep(4);
											setDirection(1);
											return;
										}
										setDirection(1);
										setCurrentStep((prev) => prev + 1);
									}}
								>
									Continuar
								</motion.button>
							</div>
						</div>
					</>
				);
			case 4:
				return (
					<>
						<div className='flex flex-col h-full w-full items-center justify-between py-8 px-8'>
							<div className='text-left mt-20 flex-col flex gap-2 text-balance'>
								<h1 className='text-3xl font-bold text-black tracking-tight'>
								¿Listo para una selfie? 📸
								</h1>
								<p className='font-semibold text-gray-400 text-center mt-4'>
								Tu selfie nos ayuda a asegurar que eres tú y mantener tu cuenta segura. Solo toma una foto rápida y ¡listo! Esto nos permite proteger tu cuenta y ofrecerte una experiencia personalizada.
								</p>
							</div>
							<Image src={selfieImage} alt='camera' className='w-40 h-40 mb-10 self-center' />
							<div className='flex gap-2 w-full'>
								<motion.button
									className='rounded-full text-lg font-bold w-full h-12 bg-banorte hover:bg-banorte/95 text-white disabled:opacity-50 disabled:pointer-events-none'
									whileTap={{ scale: 0.95 }}
									onClick={() => {
										if (currentStep === 4) {
											setCurrentStep(0);
											setDirection(-1);
											return;
										}
										setDirection(1);
										setCurrentStep((prev) => prev + 1);
									}}
								>
									Continuar
								</motion.button>
							</div>
						</div>
					</>
				);
        }
    }, [currentStep]);
	return (
        <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
            <main className='flex h-screen select-none items-center justify-center overflow-hidden font-display'>
                <div className='relative flex aspect-square h-screen items-center justify-center bg-gradient-to-br from-[#FAF9F2]/70 to-[#F2F0E7]'>
                    <div className='absolute left-1/2 top-1/2 z-10 h-[810px] w-[375px] -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                        <section className='relative z-50 bg-white rounded-[44px] overflow-hidden h-full w-full flex items-center justify-center'>
                            {currentStep > 0 && (
                                <AnimatePresence mode='popLayout' initial={false}>
                                    <motion.div className='flex justify-evenly items-center flex-row absolute top-16 w-full z-50'>
                                        <motion.button
                                            onClick={() => {
                                                if (currentStep === 0) {
                                                    return;
                                                }
                                                setDirection(-1);
                                                setCurrentStep((prev) => prev - 1);
                                            }}
                                            type='button'
                                            className='focus-visible:shadow-focus-ring-button z-50 flex h-8 w-8 items-center justify-center transition-transform focus:scale-95 focus:outline-none focus:ring-0 active:scale-75 rounded-full bg-[#E4E3E5] p-1 text-[#807E85]'
                                        >
                                            <ChevronLeft />
                                        </motion.button>
                                        <Progress
                                            className='w-7/12 z-50'
                                            value={currentStep * 10}
                                        />
                                        <CircleHelp className='text-[#807E85] h-8 w-8 p-1' />
                                    </motion.div>
                                </AnimatePresence>
                            )}
                            <AnimatePresence
                                mode='popLayout'
                                initial={false}
                                custom={direction}
                            >
                                <motion.div
                                    key={currentStep}
                                    variants={variants}
                                    initial='initial'
                                    animate='active'
                                    exit='exit'
                                    custom={direction}
                                    className='size-full fixed left-0 top-0 z-10 flex items-center justify-center overflow-hidden rounded-[44px] bg-white flex-col'
                                >
                                    {content}
                                </motion.div>
                            </AnimatePresence>
                        </section>
                    </div>

                    <div className='fixed bottom-[120px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28'>
                        <div className='size-full rounded-3xl bg-black' />
                    </div>

                    <Image
                        src={svgPhone}
                        alt='iphone mock'
                        className='pointer-events-none relative z-50 drop-shadow-xl'
                    />
                </div>
            </main>
        </MotionConfig>
    );
}

const variants = {
    initial: (direction: number) => {
        return { x: `${110 * direction}%`, opacity: 0 };
    },
    active: { x: "0%", opacity: 1 },
    exit: (direction: number) => {
        return { x: `${-110 * direction}%`, opacity: 0 };
    },
};