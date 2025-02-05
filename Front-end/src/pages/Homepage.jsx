import { motion } from "framer-motion"
export default function HomePage() {
    return (
        <>
            <section className="mb-5 h-lvh ">

                <h1 className="w-4/5 m-auto mb-5 mt-12 text-5xl">la nostra storia</h1>
                <div className="grid grid-cols-1 place-content-center h-96">

                    <div className="grid grid-cols-2 m-auto gap-24 w-4/5">
                        <motion.div className="bg-red-500 w-full text-justify flex items-center"
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>

                            presentazione
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae totam fugit voluptatibus repellat officiis aliquid temporibus sapiente exercitationem numquam, quis dignissimos dolor, laboriosam explicabo? Est quibusdam maxime itaque asperiores error!
                        </motion.div>
                        <motion.div className="immagini grid grid-cols-3 gap-2 w-full"
                            initial={{ x: "100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>
                            <div className="bg-pink-400 col-span-2 rounded-tl-2xl h-30 overflow-hidden">
                                <img src="./homeimag/fieno.jfif" alt="" />
                            </div>
                            <div className="bg-pink-400 rounded-tr-2xl h-30 overflow-hidden">
                                <img src="./homeimag/ortaggi.jfif" alt="" />
                            </div>
                            <div className="bg-pink-400 rounded-bl-2xl h-30 overflow-hidden">
                                <img src="./homeimag/bosco.jfif" alt="" />
                            </div>
                            <div className="bg-pink-400 col-span-2 rounded-br-2xl h-30 overflow-hidden">
                                <img src="./homeimag/pesce.jfif" alt="" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            <section className="mb-5 h-lvh ">

                <h1 className="w-4/5 m-auto mb-5 mt-12 text-5xl">la nostra cucina</h1>
                <div className="grid grid-cols-1 place-content-center h-96">

                    <div className="grid grid-cols-2 m-auto gap-24 w-4/5">
                        <motion.div className="immagini grid grid-cols-3 gap-2 w-full"
                            initial={{ x: "100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>
                            <div className="bg-pink-400 rounded-tl-2xl h-30">img1</div>
                            <div className="bg-pink-400 col-span-2 rounded-tr-2xl h-30">img2</div>
                            <div className="bg-pink-400 col-span-2 rounded-bl-2xl h-30">img3</div>
                            <div className="bg-pink-400 rounded-br-2xl h-30">img4</div>
                        </motion.div>
                        <motion.div className="bg-red-500 w-full"
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>
                            presentazione
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae totam fugit voluptatibus repellat officiis aliquid temporibus sapiente exercitationem numquam, quis dignissimos dolor, laboriosam explicabo? Est quibusdam maxime itaque asperiores error!
                        </motion.div>


                    </div>
                </div>
            </section>
            <section className="mb-5 h-lvh ">
                <div className="grid grid-cols-1 place-content-center h-96">

                    <h1 className="w-4/5 m-auto mb-25 mt-12 text-5xl">il nostro Staff</h1>
                    <div className="w-4/5 m-auto grid grid-cols-8 gap-3 bg-green-950 rounded-l-[200px] rounded-r-[200px] overflow-hidden">
                        <div className="h-40 col-span-1 bg-green-600  overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="./staff-images/chef1.jfif" alt="" />

                        </div>
                        <div className="h-40 col-span-2 bg-green-500 overflow-hidden">
                            <img className="w-full h-full object-cover object-[50%_18%]" src="./staff-images/chef4.jfif" alt="" />

                        </div>
                        <div className="h-40 col-span-2 bg-cyan-500 overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="./staff-images/chef2.jfif" alt="" />
                        </div>
                        <div className="h-40 col-span-2 bg-green-500 overflow-hidden">
                            <img className="w-full h-full object-cover object-[50%_10%]" src="./staff-images/chef3.jfif" alt="" />

                        </div>
                        <div className="h-40 col-span-1 bg-green-600  overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="./staff-images/chef5.jfif" alt="" />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}