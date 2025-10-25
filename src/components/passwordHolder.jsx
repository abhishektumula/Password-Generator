import { motion } from "motion/react"
import copy from "copy-to-clipboard"; 

  
export function PasswordHolder({ password, setPassword, value, numbers, symbols }) {
    async function CopyClipBoard__() {
      copy(password); 

    }
    return (
        <motion.div
        initial={{x:0, y:400, opacity:0}}
        animate={{x:0, y:0, opacity:1}}
        className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="w-full text-lg sm:text-lg md:text-xl font-bold italic overflow-hidden underline text-justify sm:text-center md:text-center break-all md:w-[90%]" >
                {password}
            </div >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    duration: 0.1,
                    delay: 0.1
                }}
                onClick={CopyClipBoard__}
                className="px-4 p-2 m-2 text-2xl font-semibold text-neutral-100 bg-neutral-900 rounded-4xl hover:shadow-xl/30"
            >Copy</motion.button>
        </motion.div >
    )
}

