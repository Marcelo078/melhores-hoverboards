import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Privacidade = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidade"
        description="Política de Privacidade do Melhores Hoverboard Skates Elétricos. Saiba como coletamos, usamos e protegemos suas informações."
        keywords="política de privacidade, privacidade, dados pessoais, LGPD"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container max-w-4xl">
            <article className="prose prose-invert max-w-none">
              <h1 className="font-display text-4xl font-bold mb-8">
                Política de <span className="gradient-text">Privacidade</span>
              </h1>

              <p className="text-muted-foreground mb-8">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O site <strong className="text-foreground">Melhores Hoverboard Skates Elétricos</strong> pode coletar 
                  informações não pessoais de identificação sobre os usuários sempre que eles interagem com nosso site. 
                  Estas informações podem incluir:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2">
                  <li>Tipo de navegador e versão</li>
                  <li>Sistema operacional</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Fonte de referência (como chegou ao site)</li>
                  <li>Endereço IP (anonimizado)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">2. Cookies e Tecnologias de Rastreamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, 
                  analisar o tráfego do site e entender de onde vêm nossos visitantes. Você pode configurar 
                  seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">3. Links de Afiliados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site contém links de afiliados para produtos no Mercado Livre e outros parceiros. 
                  Quando você clica nesses links e realiza uma compra, podemos receber uma comissão. 
                  Esses parceiros podem usar cookies para rastrear suas visitas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">4. Proteção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adotamos práticas adequadas de coleta, armazenamento e processamento de dados e medidas 
                  de segurança para proteger contra acesso não autorizado, alteração, divulgação ou 
                  destruição de suas informações pessoais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">5. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos, trocamos ou alugamos informações pessoais de identificação dos usuários 
                  para terceiros. Podemos compartilhar informações demográficas agregadas genéricas não 
                  vinculadas a informações pessoais de identificação.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">6. Conformidade com a LGPD</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site está em conformidade com a Lei Geral de Proteção de Dados (LGPD). 
                  Você tem direito a acessar, corrigir, excluir ou limitar o uso de seus dados pessoais. 
                  Para exercer esses direitos, entre em contato conosco através do e-mail informado na página de contato.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">7. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de atualizar esta política de privacidade a qualquer momento. 
                  Quando o fizermos, revisaremos a data de atualização no início desta página. 
                  Encorajamos os usuários a verificar frequentemente esta página para se manterem informados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-4">8. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através 
                  do e-mail: <strong className="text-primary">contato@melhoreshoverboard.com.br</strong>
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

export default Privacidade;
