import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hoverboard.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hoverboard Skate Elétrico com luzes neon" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8 animate-pulse-glow">
            <Zap className="h-4 w-4" />
            <span>Melhores Ofertas de 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl mb-6">
            <span className="block text-foreground">Melhores</span>
            <span className="block gradient-text neon-text">Hoverboard</span>
            <span className="block text-foreground">Skates Elétricos</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 text-balance">
            Descubra os <strong className="text-foreground">melhores hoverboards e skates elétricos</strong> do mercado. 
            Análises completas, comparativos detalhados e as <strong className="text-foreground">melhores ofertas</strong> do Mercado Livre.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="affiliate" size="xl" asChild className="w-full sm:w-auto">
              <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer">
                Ver Melhores Ofertas
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/produtos">
                Explorar Produtos
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Análises Verificadas</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-secondary" />
              <span>+25 Produtos Avaliados</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span>Melhores Preços</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
