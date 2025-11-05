import { motion, useMotionValue, useTransform } from "framer-motion";

function GlowCard({children, className, onClick}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const background = useTransform(
        [x, y],
        ([latestX, latestY]) =>
        `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(88,166,255,0.15), transparent 80%)`
    );
    
    return (
        <motion.div 
            className={className}
            onClick={onClick}
            style={{background}}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left);
                y.set(e.clientY - rect.top);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}  
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(88,166,255,0.25)"
            }}
            transition={{type: "spring", stiffness: 200, damping:15}}
        >
            {children}
        </motion.div>
    )
}

export default GlowCard