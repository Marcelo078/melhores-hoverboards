import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Shield, Users, Award, Target } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <SEOHead
        title="Sobre Nós - Quem Somos"
        description="Conheça o Melhores Hoverboard Skates Elétricos. Somos especialistas em análises e reviews de hoverboards. Nossa missão é ajudar você a fazer a melhor escolha."
        keywords="sobre melhores hoverboard, quem somos, equipe hoverboard, reviews hoverboard"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container max-w-4xl">
            <article className="prose prose-invert max-w-none">
              <h1 className="font-display text-4xl font-bold mb-8">
                Sobre o <span className="gradient-text">Melhores Hoverboard</span>
              </h1>

              <div className="p-6 rounded-2xl bg-card/50 border border-border/50 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed m-0">
                  Somos o maior portal especializado em <strong className="text-foreground">hoverboards e skates elétricos</strong> do Brasil. 
                  Nossa missão é fornecer <strong className="text-foreground">análises detalhadas</strong>, 
                  <strong className="text-foreground"> comparativos honestos</strong> e as 
                  <strong className="text-foreground"> melhores ofertas</strong> para ajudar você a fazer a escolha certa.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Análises Confiáveis</h3>
                  <p className="text-muted-foreground text-sm">
                    Testamos e avaliamos cada produto com critérios rigorosos de qualidade, segurança e desempenho.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <Users className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Equipe Especializada</h3>
                  <p className="text-muted-foreground text-sm">
                    Nossa equipe é formada por entusiastas e especialistas em mobilidade elétrica pessoal.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <Award className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Compromisso com Qualidade</h3>
                  <p className="text-muted-foreground text-sm">
                    Recomendamos apenas produtos de marcas confiáveis com histórico comprovado de qualidade.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Foco no Consumidor</h3>
                  <p className="text-muted-foreground text-sm">
                    Nosso objetivo é ajudar você a encontrar o hoverboard perfeito para suas necessidades.
                  </p>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que todos merecem acesso a informações claras e imparciais sobre produtos de mobilidade elétrica. 
                  Por isso, dedicamos nosso tempo a pesquisar, testar e documentar cada aspecto dos hoverboards e skates elétricos 
                  disponíveis no mercado brasileiro.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4">Equipe Editorial</h2>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">MB</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">Marcelo Barbosa</h3>
                      <p className="text-muted-foreground text-sm">Editor-Chefe & Revisor</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Especialista em mobilidade elétrica com mais de 5 anos de experiência em análises de produtos. 
                    Marcelo é responsável por garantir a qualidade e precisão de todas as informações publicadas em nosso portal.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4">Programa de Afiliados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site participa de programas de afiliados, o que significa que podemos receber uma comissão 
                  quando você realiza uma compra através de nossos links. Isso nos ajuda a manter o site funcionando 
                  e continuar produzindo conteúdo de qualidade, sem nenhum custo adicional para você.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">Importante:</strong> Nossas análises e recomendações são sempre 
                  baseadas em critérios técnicos e na qualidade dos produtos, nunca em valores de comissão.
                </p>
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
