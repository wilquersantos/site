"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Forro com Sanca Iluminada",
    description: "Projeto residencial com forro rebaixado e sanca com LED",
    image: "/modern-drywall-ceiling-with-led-lighting-in-living.png",
  },
  {
    id: 2,
    title: "Parede Divisória Escritório",
    description: "Divisória acústica para ambiente corporativo",
    image: "/office-drywall-partition-wall-with-glass-insert.png",
  },
  {
    id: 3,
    title: "Nichos Decorativos",
    description: "Nichos em gesso acartonado para sala de estar",
    image: "/decorative-drywall-niches-in-modern-living-room.png",
  },
  {
    id: 4,
    title: "Forro Mineral Comercial",
    description: "Forro mineral para ambiente comercial",
    image: "/commercial-mineral-fiber-ceiling-in-office-space.png",
  },
  {
    id: 5,
    title: "Sanca com iluminação",
    description: "Sanca de drywall com iluminação embutida",
    image: "/sancaconcluida.png",
  },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/20 to-muted rounded-2xl overflow-hidden group">
      {/* Main Image */}
      <div className="relative h-full">
        <img
          src={projects[currentIndex].image || "/placeholder.svg"}
          alt={projects[currentIndex].title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Overlay with project info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{projects[currentIndex].title}</h3>
          <p className="text-sm opacity-90">{projects[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="absolute top-4 right-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  )
}
