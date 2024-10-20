import { motion } from "motion/react";
import GHIcon from "@/assets/bx-github.svg"
import StartIcon from "@/assets/bx-star.svg"
import XIcon from "@/assets/bx-twitter-x.svg"

export function NavBar() {
    return (
        <div className="w-full flex items-center sm:justify-end justify-center gap-6 m-4 p-4">
            <motion.a
                whileHover={{scale:1.15}}
                transition={{ duration: 0.4 }}
                href="https://github.com/abhishektumula/Password-Generator" className="hover:scale-110 transition-transform duration-200">
                <img
                    src={StartIcon}
                    alt="Link 1"
                    className="h-8 w-8 object-contain"
                />
            </motion.a>

            <a href="https://github.com/abhishektumula" className="hover:scale-110 transition-transform duration-200">
                <img
                    src={GHIcon}
                    alt="Link 2"
                    className="h-8 w-8 object-contain"
                />
            </a>
            <a href="https://x.com/axyzk9" className="hover:scale-110 transition-transform duration-200">
                <img
                    src={XIcon}
                    alt="Link 2"
                    className="h-8 w-8 object-contain"
                />
            </a>
        </div>
    );
}
