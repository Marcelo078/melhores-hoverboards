import { Link } from "react-router-dom";
import { Zap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight gradient-text">
                  Melhores Hoverboard
                </span>
                <span className="text-xs text-muted-foreground">Skates Elétricos</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              O melhor portal de análises e reviews de hoverboards e skates elétricos do Brasil. 
              Encontre os melhores produtos com os melhores preços.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Todos os Produtos
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/transparencia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Transparência
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@melhoreshoverboard.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                contato@melhoreshoverboard.com.br
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                São Paulo, Brasil
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Melhores Hoverboard Skates Elétricos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Revisor: <strong>Marcelo Barbosa</strong> | Este site participa de programas de afiliados
          </p>
        </div>
      </div>
    </footer>
  );
}
