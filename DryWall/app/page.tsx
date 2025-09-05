import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Hammer,
  Home,
  Building,
  Layers,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import ProjectCarousel from "@/components/project-carousel"

export default function HomePage() {
  const services = [
    {
      title: "Paredes de Drywall",
      description: "Instalação de paredes divisórias com isolamento acústico e térmico superior.",
      icon: <Building className="h-8 w-8" />,
      features: ["Isolamento acústico", "Instalação rápida", "Acabamento perfeito"],
    },
    {
      title: "Forros e Sancas",
      description: "Forros suspensos e sancas decorativas que transformam qualquer ambiente.",
      icon: <Layers className="h-8 w-8" />,
      features: ["Design moderno", "Iluminação integrada", "Durabilidade garantida"],
    },
    {
      title: "Nichos Decorativos",
      description: "Nichos personalizados para otimizar espaços e criar pontos focais únicos.",
      icon: <Home className="h-8 w-8" />,
      features: ["Sob medida", "Múltiplos formatos", "Integração perfeita"],
    },
    {
      title: "Forro Mineral",
      description: "Forros minerais para ambientes comerciais com máxima funcionalidade.",
      icon: <Hammer className="h-8 w-8" />,
      features: ["Resistente à umidade", "Fácil manutenção", "Normas técnicas"],
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente trabalho! Transformaram minha casa com um forro incrível. Muito profissionais e pontuais.",
      rating: 5,
      serviceImage: "/elegant-drywall-ceiling-with-recessed-lighting.png",
      serviceAlt: "Forro de drywall elegante com iluminação embutida",
    },
    {
      name: "João Santos",
      text: "A qualidade do drywall é excepcional. Recomendo para quem busca modernidade e eficiência.",
      rating: 5,
      serviceImage: "/modern-drywall-wall-installation-residential.png",
      serviceAlt: "Instalação de parede de drywall residencial moderna",
    },
    {
      name: "Ana Costa",
      text: "Sancas perfeitas e acabamento impecável. Superou todas as minhas expectativas!",
      rating: 5,
      serviceImage: "sanca.png",
      serviceAlt: "Sanca personalizada de drywall em sala de estar",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Inovar
              </span>
              <span className="text-xl font-bold text-foreground ml-1">Drywall</span>
              
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#servicos" className="text-muted-foreground hover:text-blue-500 transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-blue-500 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-blue-500 transition-colors font-medium">
              Contato
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              <a href="https://api.whatsapp.com/send?phone=5562985276028&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20seu%20servi%C3%A7o.">WhatsApp</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div id="home" className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Inovação e experiência em
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Drywall</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Soluções inteligentes em gesso acartonado. Paredes, forros, sancas, nichos e forro
              mineral com precisão e acabamento perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <><a href="https://api.whatsapp.com/send?phone=5562985276028&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20seu%20servi%C3%A7o."> Solicitar Orçamento</a></>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+5562985276028">(62) 98527-6028</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-muted/30 to-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções inteligentes em gesso drywall
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-blue-200 hover:-translate-y-2 bg-gradient-to-br from-card to-blue-50/30"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-xl text-blue-600 group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-pretty">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experiência em Drywall 
                <p> há mais de 20 Anos</p>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Pioneiros em soluções em gesso acartonado combinados com a experiência tradicional.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <span>Mais de 700 projetos</span>
                </div>
                
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <span>Equipe certificada</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <span>Materiais premium</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg">
                Conheça Nossos Projetos
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <ProjectCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-muted-foreground">
              Depoimentos reais de clientes satisfeitos com nosso serviço
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-blue-50/30"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={testimonial.serviceImage || "/placeholder.svg"}
                    alt={testimonial.serviceAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Entre em Contato Conosco</h2>
              <p className="text-lg text-muted-foreground">Pronto para inovar seu espaço? Fale conosco agora mesmo!</p>
            </div>
            <div className="grid md:grid-cols-1 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <span><a href="tel:5562985276028"> (62) 98527-6028</a></span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Goiânia, Go - Atendemos Goiânia e toda a região metropolitana</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-foreground mb-4">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  <p className="text-muted-foreground">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-card to-blue-50/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Inovar
                  </span>
                  <span className="text-xl font-bold text-foreground ml-1">Drywall</span>
                </div>
              </div>
              <p className="text-muted-foreground text-pretty">
                Experiência e profissionalismo em soluções de drywall com qualidade garantida.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Paredes de Drywall</li>
                <li>Forros e Sancas</li>
                <li>Nichos Decorativos</li>
                <li>Forro Mineral</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://api.whatsapp.com/send?phone=5562985276028&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20seu%20servi%C3%A7o."> (62) 98527-6028</a></li>
                <li>Goiânia, Go</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Inovar Drywall. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}
