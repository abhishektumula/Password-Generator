import { motion } from "motion/react";

export function NavBar() {
    return (
        <div className="w-full flex items-center sm:justify-end justify-center gap-6 m-4 p-4">
            {/* Image Link 1 */}
            <motion.a
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
                href="https://github.com/abhishektumula" className="hover:scale-110 transition-transform duration-200">
                <img
                    src="src/assets/bx-star.svg"
                    alt="Link 1"
                    className="h-8 w-8 object-contain"
                />
            </motion.a>

            {/* Image Link 2 */}
            <a href="https://github.com/abhishektumula" className="hover:scale-110 transition-transform duration-200">
                <img
                    src="src/assets/bx-github.svg"
                    alt="Link 2"
                    className="h-8 w-8 object-contain"
                />
            </a>
            <a href="https://x.com/axyzk9" className="hover:scale-110 transition-transform duration-200">
                <img
                    src="src/assets/bx-twitter-x.svg"
                    alt="Link 2"
                    className="h-8 w-8 object-contain"
                />
            </a>
        </div>
    );
}
