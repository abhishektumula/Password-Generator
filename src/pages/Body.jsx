import { motion } from "motion/react";

export function BodyRoot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200, }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col p-4 m-4 text-5xl text-neutral-900 gap-6 justify-center items-center"
    >
      <h1 className="text-4xl text-center font-bold">
        Random Password Generator
      </h1>
      <h1 className="text-xl text-center font-semibold">
        Instantly create strong and secure passwords to keep your account safe online.
      </h1>
    </motion.div>
  );
}
