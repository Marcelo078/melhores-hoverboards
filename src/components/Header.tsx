import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight gradient-text">
              Melhores Hoverboard
            </span>
            <span className="text-xs text-muted-foreground">Skates Elétricos</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <Link to="/produtos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Produtos
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre Nós
          </Link>
          <Link to="/contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="neon" size="sm" asChild>
            <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer">
              Ver Ofertas
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col gap-4 py-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/produtos" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/sobre" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button variant="neon" size="sm" className="w-fit" asChild>
              <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer">
                Ver Ofertas
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
