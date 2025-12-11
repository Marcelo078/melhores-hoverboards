import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ProductCard } from "@/components/ProductCard";
import { CategoryButtons } from "@/components/CategoryButtons";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const Produtos = () => {
  const sizes = ["6.5 polegadas", "8.5 polegadas", "10 polegadas"];

  return (
    <>
      <SEOHead
        title="Todos os Hoverboards e Skates Elétricos - Melhores Preços"
        description="Catálogo completo de hoverboards e skates elétricos. Compare modelos, preços e características. Encontre o melhor hoverboard para você."
        keywords="catálogo hoverboard, todos hoverboards, skates elétricos, comparar hoverboard, melhores ofertas hoverboard"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="font-display text-4xl font-bold mb-4">
                Todos os <span className="gradient-text">Hoverboards e Skates Elétricos</span>
              </h1>
              <p className="text-muted-foreground max-w-3xl">
                Explore nossa seleção completa com os <strong>melhores hoverboards</strong>, 
                <strong> melhores marcas</strong> e <strong>melhores preços</strong> do mercado. 
                Análises detalhadas por <strong>Marcelo Barbosa</strong>.
              </p>
            </div>

            {/* Filter by Size */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold mb-4">Filtrar por Tamanho</h2>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Badge key={size} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Keywords Section */}
            <section className="mt-16 p-8 rounded-2xl bg-card/50 border border-border/50">
              <h2 className="font-display text-2xl font-bold mb-4">
                Encontre os <span className="gradient-text">Melhores Hoverboards</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Procurando o <strong>melhor hoverboard</strong> para você? Temos opções para todos os gostos e necessidades:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Melhores Hoverboards 2025",
                  "Hoverboard Offroad 8.5",
                  "Skate Elétrico Bluetooth",
                  "Hoverboard Infantil",
                  "Hoverboard com LED",
                  "Melhores Preços Hoverboard",
                  "Hoverboard Original",
                  "Skate Elétrico Potente",
                  "Hoverboard Rosa",
                  "Hoverboard Azul",
                  "Hoverboard Galáxia",
                  "Melhores Ofertas Hoverboard",
                ].map((keyword) => (
                  <Badge key={keyword} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12">
            <CategoryButtons />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Produtos;
