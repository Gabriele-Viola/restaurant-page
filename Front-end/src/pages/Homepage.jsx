import { motion } from "framer-motion"
export default function HomePage() {
    return (

        <section className="grid grid-cols-2 m-auto w-4/5 overflow-hidden">
            <motion.div className="bg-red-500"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>
                presentazione
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae totam fugit voluptatibus repellat officiis aliquid temporibus sapiente exercitationem numquam, quis dignissimos dolor, laboriosam explicabo? Est quibusdam maxime itaque asperiores error!
            </motion.div>
            <motion.div className="immagini grid grid-cols-2 gap-2"
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", ease: 'easeOut', duration: 0.8 }}>
                <div className="bg-pink-400 rounded-tl-2xl h-30">img1</div>
                <div className="bg-pink-400 rounded-tr-2xl h-30">img2</div>
                <div className="bg-pink-400 rounded-bl-2xl h-30">img3</div>
                <div className="bg-pink-400 rounded-br-2xl h-30">img4</div>
            </motion.div>

        </section>
    )
}