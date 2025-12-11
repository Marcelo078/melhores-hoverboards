import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare } from "lucide-react";

const Contato = () => {
  return (
    <>
      <SEOHead
        title="Contato - Fale Conosco"
        description="Entre em contato com a equipe do Melhores Hoverboard Skates Elétricos. Tire suas dúvidas, envie sugestões ou faça parcerias."
        keywords="contato, fale conosco, suporte, dúvidas hoverboard"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold mb-4 text-center">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Tem alguma dúvida sobre hoverboards? Quer sugerir um produto para análise? 
              Ou deseja fazer uma parceria? Entre em contato conosco!
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Para dúvidas gerais e sugestões:
                  </p>
                  <a 
                    href="mailto:contato@melhoreshoverboard.com.br" 
                    className="text-primary hover:underline"
                  >
                    contato@melhoreshoverboard.com.br
                  </a>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <MessageSquare className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Parcerias</h3>
                  <p className="text-muted-foreground text-sm">
                    Interessado em parcerias comerciais? Entre em contato pelo e-mail acima 
                    com o assunto "Parceria" e descreva sua proposta.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <MapPin className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Localização</h3>
                  <p className="text-muted-foreground text-sm">
                    São Paulo, Brasil<br />
                    Atendimento 100% online
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-display text-xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Nome
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      E-mail
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Assunto
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Assunto da mensagem" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Mensagem
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Escreva sua mensagem aqui..." 
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button variant="neon" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contato;
