import { motion } from "motion/react"
import clipboard from 'clipboardy';


async function CopyClipBoard__(password) {
    console.log('func')
    const pass = await clipboard.write(password)
    console.log('copied successfully')

}
export function PasswordHolder({ password, setPassword, value, numbers, symbols }) {
    async function CopyClipBoard__() {
        console.log('func')
        const pass = await clipboard.write(password)
        console.log('copied successfully')

    }
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            < div className="text-2xl font-bold itallic underline text-center" >
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
        </div >
    )
}

