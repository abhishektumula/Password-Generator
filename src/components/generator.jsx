import { motion } from "motion/react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function Generator({ password, setPassword, value, numbers, symbols, setNumbers, setSymbols, setValue }) {
  function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersSet = "0123456789";
    const symbolsSet = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let chars = lowercase + uppercase;
    if (numbers) chars += numbersSet;
    if (symbols) chars += symbolsSet;

    let passArray = [];

    // Force at least 2 numbers
    if (numbers) {
      for (let i = 0; i < 2; i++) {
        passArray.push(numbersSet[Math.floor(Math.random() * numbersSet.length)]);
      }
    }

    // Force at least 2 symbols
    if (symbols) {
      for (let i = 0; i < 2; i++) {
        passArray.push(symbolsSet[Math.floor(Math.random() * symbolsSet.length)]);
      }
    }

    // Fill the rest of the password
    while (passArray.length < value) {
      passArray.push(chars[Math.floor(Math.random() * chars.length)]);
    }

    // Shuffle the array to avoid predictable placement
    passArray = passArray.sort(() => Math.random() - 0.5);

    setPassword(passArray.join(""));
  }

  return (
    <motion.div
      initial={{x:0, y:400, opacity: 0}}
      animate={{x:0, y:0, opacity: 1}}
      className="flex flex-col sm:flex-row justify-center items-center w-full p-2 m-2 gap-10">
      <p>Password size: {value}</p>

      <Slider
        defaultValue={[2]}
        min={7}
        max={64}
        step={1}
        className={cn("w-[50%]")}
        onValueChange={(val) => setValue(val)}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        onClick={generatePassword}
        className="px-4 p-2 m-2 text-2xl font-semibold text-neutral-100 bg-neutral-900 rounded-4xl hover:shadow-xl/30"
      >
        Generate
      </motion.button>
    </motion.div>
  );
}
