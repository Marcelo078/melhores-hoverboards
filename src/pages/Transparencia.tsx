import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

const Transparencia = () => {
  return (
    <>
      <SEOHead
        title="Transparência e Isenção de Responsabilidade"
        description="Saiba como trabalhamos, nossos critérios de avaliação e isenção de responsabilidade. Compromisso com transparência e honestidade."
        keywords="transparência, isenção de responsabilidade, disclaimer, afiliados, como avaliamos"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container max-w-4xl">
            <article className="prose prose-invert max-w-none">
              <h1 className="font-display text-4xl font-bold mb-8">
                Transparência e <span className="gradient-text">Isenção de Responsabilidade</span>
              </h1>

              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 mb-8">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground m-0">
                    Acreditamos que a <strong className="text-foreground">transparência</strong> é fundamental 
                    para construir confiança com nossos leitores. Esta página explica como trabalhamos, 
                    como ganhamos dinheiro e quais são nossas responsabilidades.
                  </p>
                </div>
              </div>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  Como Ganhamos Dinheiro
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  O <strong className="text-foreground">Melhores Hoverboard Skates Elétricos</strong> é um site 
                  de afiliados. Isso significa que:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Recebemos uma pequena comissão quando você compra um produto através dos nossos links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Essa comissão <strong className="text-foreground">não aumenta o preço</strong> do produto para você</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Os links de afiliados são claramente identificados com botões de "Comprar" direcionando ao Mercado Livre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Participamos do programa de afiliados do Mercado Livre</span>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  Como Selecionamos os Produtos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nossa seleção de produtos é baseada em critérios objetivos:
                </p>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Qualidade:</strong> Priorizamos produtos de marcas reconhecidas com boa reputação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Avaliações:</strong> Consideramos as avaliações de compradores reais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Custo-benefício:</strong> Buscamos produtos que ofereçam bom valor pelo preço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Segurança:</strong> Verificamos certificações e padrões de segurança</span>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  Isenção de Responsabilidade
                </h2>
                
                <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30 mb-6">
                  <h3 className="font-display text-lg font-semibold mb-3 text-destructive">Importante</h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span><strong className="text-foreground">Não somos vendedores:</strong> Não vendemos produtos diretamente. Todos os produtos são vendidos pelo Mercado Livre e seus vendedores parceiros.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span><strong className="text-foreground">Preços podem variar:</strong> Os preços são definidos pelos vendedores e podem mudar sem aviso prévio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span><strong className="text-foreground">Disponibilidade:</strong> Não garantimos a disponibilidade dos produtos listados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">⚠</span>
                      <span><strong className="text-foreground">Garantia e suporte:</strong> Questões de garantia devem ser tratadas diretamente com o vendedor ou fabricante.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  As informações neste site são fornecidas "como estão", sem garantias de qualquer tipo. 
                  Não nos responsabilizamos por decisões de compra baseadas em nosso conteúdo. 
                  Sempre faça sua própria pesquisa antes de adquirir qualquer produto.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4">Nosso Compromisso</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos comprometemos a:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Fornecer informações precisas e atualizadas sempre que possível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Ser transparentes sobre nossa relação comercial com parceiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Nunca recomendar produtos que não consideramos seguros ou de qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Manter nossas análises independentes das comissões de afiliados</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4">Dúvidas?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver qualquer dúvida sobre nossa política de transparência ou isenção de responsabilidade, 
                  entre em contato conosco pelo e-mail: <strong className="text-primary">contato@melhoreshoverboard.com.br</strong>
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

export default Transparencia;
