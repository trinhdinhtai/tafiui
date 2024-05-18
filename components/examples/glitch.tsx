"use client"

import { useEffect, useMemo, useState } from "react"

interface Word {
  text: string
  color: string
}

export default function GlitchBanner() {
  const words: Word[] = useMemo(
    () => [
      { text: "UNIQUE", color: "#FFB3C0" },
      { text: "COOL", color: "#FFA36F" },
      { text: "GREAT", color: "#FDE047" },
      { text: "AWESOME", color: "#8FC0F7" },
      { text: "TOP", color: "#C7A4FF" },
    ],
    []
  )
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState<Word>({
    text: words[currentWordIndex].text,
    color: words[currentWordIndex].color,
  })
  const [glitchActive, setGlitchActive] = useState(false)

  const GLYPHS = "!$%&/()=?¡*+_-.,;:[]{}^<>'~#|@abcdefghijk1234567890"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      setGlitchActive(true)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  const MAX_GLITCH_CHARACTERS = 10

  useEffect(() => {
    if (glitchActive) {
      const glitchInterval = setInterval(() => {
        const newText = Array.from(
          { length: currentText.text.length },
          (_, i) => {
            if (i < MAX_GLITCH_CHARACTERS) {
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            }
            return currentText.text[i]
          }
        ).join("")
        setCurrentText({ text: newText, color: currentText.color })
      }, 50)

      setTimeout(() => {
        clearInterval(glitchInterval)
        setGlitchActive(false)
        setCurrentText({
          text: words[currentWordIndex].text,
          color: words[currentWordIndex].color,
        })
      }, 300)
    }
  }, [currentText, glitchActive, words, currentWordIndex])

  return (
    <section className="z-10 flex h-[400px] w-full justify-center p-4">
      <h1 className="flex h-full w-full flex-col justify-center text-5xl font-black tracking-tighter max-lg:text-center sm:text-6xl md:text-7xl">
        BUILDING
        <span style={{ color: currentText.color }}>
          {currentText.text.split("").map((char, index) => (
            <span
              key={index}
              data-char={char}
              style={
                {
                  "--index": index,
                  "--char-1": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                  "--char-2": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                  "--char-3": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                } as any
              }
            >
              {char}
            </span>
          ))}
        </span>
        PRODUCTS
      </h1>
    </section>
  )
}
