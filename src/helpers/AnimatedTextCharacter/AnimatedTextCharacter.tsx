import React from "react";
import { motion } from "framer-motion";

// Определение типа для пропсов
interface AnimatedTextWordProps {
    text: string;
}

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({ text }) => {
    const words = text.split(" ");

    // Variants for Container of words.
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Задержка между анимациями букв
            },
        },
    };

    // Variants for each word.
    const child = {
        visible: {
            opacity: 1,
            y: 0,  // Конечная позиция y
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: -30, // Начальная позиция y (ниже на экране)
        },
    };

    return (
        <motion.div
            style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                fontSize: "2rem",
                color: 'white',
                height: '40px',
                userSelect: "none",
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;
