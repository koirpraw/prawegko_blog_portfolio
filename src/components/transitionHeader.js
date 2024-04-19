import { easeInOut, motion } from "framer-motion"



const TransitionHeader = ({ title }) => {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}



        >
            <h3 className="mb-12 text-5xl font-serif font-black">{title}</h3>
        </motion.div>


    )
}

export default TransitionHeader;