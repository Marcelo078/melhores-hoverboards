import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CategoryButtons } from "@/components/CategoryButtons";
import { FAQSection } from "@/components/FAQSection";
import { SEOHead } from "@/components/SEOHead";
import { WebsiteJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Qual é a melhor marca de hoverboard?",
    answer: "As melhores marcas de hoverboard no Brasil incluem Brinovar, Smart Balance e Lurs. Essas marcas oferecem produtos com certificação de qualidade, baterias seguras e garantia."
  },
  {
    question: "Qual a diferença entre hoverboards e skates elétricos?",
    answer: "O hoverboard possui duas rodas lado a lado e é controlado pelo equilíbrio do corpo. Já o skate elétrico tem formato tradicional de skate com controle remoto."
  },
  {
    question: "Qual é a idade recomendada para andar de hoverboard?",
    answer: "A idade mínima recomendada para uso de hoverboard é de 8 anos, com supervisão de adultos."
  },
  {
    question: "Como saber se o hoverboard é bom?",
    answer: "Um bom hoverboard deve ter: certificação de segurança, motor com potência mínima de 350W por roda, autonomia de pelo menos 10km."
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <SEOHead
        title="Melhores Hoverboard e Skates Elétricos 2025"
        description="Encontre os melhores hoverboards e skates elétricos do Brasil. Análises completas, comparativos e melhores ofertas do Mercado Livre. Guia completo de compra."
        keywords="hoverboard, skate elétrico, melhor hoverboard, hoverboard bluetooth, skate elétrico offroad, hoverboard infantil, melhores preços hoverboard"
      />
      <WebsiteJsonLd
        name="Melhores Hoverboard Skates Elétricos"
        url="https://melhoreshoverboard.com.br"
        description="O melhor portal de análises de hoverboards e skates elétricos do Brasil"
      />
      <FAQJsonLd faqs={faqs} />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductCarousel />
          <CategoryButtons />

          {/* All Products Grid */}
          <section className="py-16 lg:py-24">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Todos os <span className="gradient-text">Hoverboards</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore nossa seleção completa dos <strong>melhores hoverboards</strong> e <strong>skates elétricos</strong> 
                  com as <strong>melhores ofertas</strong> e <strong>melhores preços</strong> do mercado.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="neon" size="lg" asChild>
                  <Link to="/produtos">
                    Ver Todos os Produtos
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <FAQSection />

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Encontre o <span className="gradient-text">Hoverboard Perfeito</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Confira as melhores ofertas de hoverboards e skates elétricos no Mercado Livre. 
                  Produtos originais com garantia e entrega rápida.
                </p>
                <Button variant="affiliate" size="xl" asChild>
                  <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer">
                    Ver Melhores Ofertas no Mercado Livre
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
