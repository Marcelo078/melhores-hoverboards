import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Termos = () => {
  return (
    <>
      <SEOHead
        title="Termos de Uso"
        description="Termos de Uso do Melhores Hoverboard Skates Elétricos. Leia nossos termos e condições de uso do site."
        keywords="termos de uso, termos e condições, regras do site"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container max-w-4xl">
            <article className="prose prose-invert max-w-none">
              <h1 className="font-display text-4xl font-bold mb-8">
                Termos de <span className="gradient-text">Uso</span>
              </h1>

              <p className="text-muted-foreground mb-8">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar o site <strong className="text-foreground">Melhores Hoverboard Skates Elétricos</strong>, 
                  você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com 
                  algum destes termos, por favor, não use nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">2. Uso do Site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site tem finalidade informativa e educacional. O conteúdo publicado inclui análises, 
                  reviews e comparativos de produtos. Você concorda em usar o site apenas para fins legais 
                  e de maneira que não infrinja os direitos de terceiros.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">3. Conteúdo e Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo deste site, incluindo textos, imagens, gráficos, logotipos e design, 
                  é de propriedade do Melhores Hoverboard Skates Elétricos ou de seus parceiros e está 
                  protegido por leis de direitos autorais. É proibida a reprodução sem autorização prévia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">4. Links para Terceiros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site contém links para sites de terceiros, incluindo lojas e marketplaces como 
                  Mercado Livre. Não temos controle sobre o conteúdo ou práticas de privacidade desses sites 
                  e não nos responsabilizamos por eles. A inclusão de links não implica endosso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">5. Programa de Afiliados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site participa de programas de afiliados. Isso significa que podemos ganhar 
                  comissões por compras realizadas através dos links em nosso site. Essa prática não 
                  aumenta o preço dos produtos para você e nos ajuda a manter o site funcionando.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">6. Isenção de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As informações fornecidas neste site são apenas para fins informativos gerais. 
                  Embora nos esforcemos para manter as informações atualizadas e corretas, não fazemos 
                  representações ou garantias de qualquer tipo sobre a integridade, precisão, confiabilidade 
                  ou disponibilidade das informações, produtos ou serviços relacionados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Em nenhuma circunstância seremos responsáveis por qualquer perda ou dano, incluindo, 
                  sem limitação, perda ou dano indireto ou consequente, ou qualquer perda ou dano decorrente 
                  do uso deste site ou de produtos adquiridos através de links nele contidos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">8. Modificações dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entram 
                  em vigor imediatamente após sua publicação no site. O uso continuado do site após 
                  alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">9. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos e interpretados de acordo com as leis do Brasil. 
                  Qualquer disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">10. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões sobre estes Termos de Uso, entre em contato conosco através do e-mail: 
                  <strong className="text-primary"> contato@melhoreshoverboard.com.br</strong>
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

export default Termos;
