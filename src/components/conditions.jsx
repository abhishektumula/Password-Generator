import { motion } from "motion/react";

export function Conditions({ setNumbers, setSymbols, numbers, symbols }) {
    return (
        <div className="flex flex-row gap-2 sm:gap-10">
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setNumbers(!numbers)}
                className={`px-4 p-2 m-2 text-2xl font-semibold text-neutral-100 rounded-4xl hover:shadow-xl/30 ${numbers ? "bg-neutral-800" : "bg-neutral-300"
                    }`}
            >
                Numbers
            </motion.button>

            <motion.button
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                onClick={() => setSymbols(!symbols)}
                className={`px-4 p-2 m-2 text-2xl font-semibold text-neutral-100 rounded-4xl hover:shadow-xl/30 ${symbols ? "bg-neutral-800" : "bg-neutral-300"
                    }`}
            >
                Symbols
            </motion.button>
        </div>
    );
}
