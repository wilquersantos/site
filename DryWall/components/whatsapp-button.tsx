"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5562985276028" // Inclua o código do país, por exemplo, "55" para Brasil
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de drywall."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="sr-only">Contato via WhatsApp</span>
    </Button>
  )
}
