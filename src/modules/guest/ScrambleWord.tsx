"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["BUSCA", "AGENDA", "OFRECE", "VENDE"];

function ScrambleWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");

  const addWord = () => {
    const timeout = setTimeout(() => {
      setDisplayedWord(words[wordIndex].slice(0, displayedWord.length + 1));
    }, 150); // Tiempo entre cada letra

    return timeout;
  };

  useEffect(() => {
    let timeout;

    if (displayedWord.length < words[wordIndex].length) {
      timeout = addWord();
    } else {
      // Espera antes de cambiar a la siguiente palabra
      timeout = setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        if (words[wordIndex + 1]) {
          setDisplayedWord(words[wordIndex + 1][0]);
        } else {
          setDisplayedWord(words[0][0]);
        }
      }, 3000); // Tiempo que la palabra se mantiene completa
    }

    return () => clearTimeout(timeout);
  }, [displayedWord, wordIndex]);

  return (
    <div>
      <motion.h2
        key={displayedWord} // Clave para animación en cambios
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="block text-linear-gradient">{displayedWord}</span>
      </motion.h2>
    </div>
  );
}

export default ScrambleWord;
