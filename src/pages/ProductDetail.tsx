import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ProductJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ArrowLeft, ExternalLink, CheckCircle, Star, Shield, Zap } from "lucide-react";
import { CategoryButtons } from "@/components/CategoryButtons";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-12">
          <div className="container text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Produto não encontrado</h1>
            <p className="text-muted-foreground mb-8">O produto que você procura não existe.</p>
            <Button asChild>
              <Link to="/produtos">Ver todos os produtos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.size === product.size)
    .slice(0, 4);

  return (
    <>
      <SEOHead
        title={`${product.name} - Análise Completa e Melhores Preços`}
        description={`${product.description} Confira nossa análise completa, características, prós e contras. Encontre os melhores preços no Mercado Livre.`}
        keywords={product.keywords.join(", ")}
        ogType="article"
        article={{
          author: "Marcelo Barbosa",
          publishedTime: "2025-01-01T00:00:00Z",
          modifiedTime: new Date().toISOString(),
        }}
      />
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        url={`https://melhoreshoverboard.com.br/produto/${product.slug}`}
      />
      <ArticleJsonLd
        headline={`${product.name} - Análise Completa`}
        description={product.description}
        image={product.image}
        author="Marcelo Barbosa"
        datePublished="2025-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
        url={`https://melhoreshoverboard.com.br/produto/${product.slug}`}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Button variant="ghost" size="sm" asChild className="gap-2">
                <Link to="/produtos">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para Produtos
                </Link>
              </Button>
            </nav>

            <article>
              {/* Product Header */}
              <div className="grid gap-8 lg:grid-cols-2 mb-12">
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border/50">
                  <img
                    src={product.image}
                    alt={`${product.name} - Melhor Hoverboard Skate Elétrico Brasil`}
                    className="h-full w-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {product.size}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <Badge variant="outline" className="w-fit mb-4">
                    Análise por Marcelo Barbosa
                  </Badge>
                  
                  <h1 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                    {product.name}
                  </h1>

                  <p className="text-lg text-muted-foreground mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h2 className="font-display text-lg font-semibold mb-3">Características Principais</h2>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="gap-1">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-secondary" />
                      <span>Produto Verificado</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Compra Segura</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-accent" />
                      <span>Entrega Rápida</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button variant="affiliate" size="xl" className="w-full" asChild>
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        Comprar no Mercado Livre
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      *Você será redirecionado para o Mercado Livre
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    Análise Completa: {product.shortName}
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      O <strong className="text-foreground">{product.name}</strong> é uma excelente opção para quem busca 
                      um <strong className="text-foreground">hoverboard de qualidade</strong> com ótimo custo-benefício. 
                      Com rodas de <strong className="text-foreground">{product.size}</strong>, este modelo oferece 
                      estabilidade e conforto para usuários de diferentes perfis.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      A cor <strong className="text-foreground">{product.color}</strong> traz um visual moderno e 
                      atrativo, perfeito para quem quer se destacar. O sistema de <strong className="text-foreground">LED</strong> e 
                      <strong className="text-foreground"> Bluetooth</strong> integrados permitem uma experiência 
                      completa, conectando suas músicas favoritas enquanto você se diverte.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    Por que Escolher Este <span className="gradient-text">Hoverboard</span>?
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h3 className="font-semibold mb-2 text-primary">✓ Design Exclusivo</h3>
                      <p className="text-sm text-muted-foreground">
                        Visual {product.color} que chama atenção em qualquer lugar.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h3 className="font-semibold mb-2 text-primary">✓ Tecnologia Avançada</h3>
                      <p className="text-sm text-muted-foreground">
                        Bluetooth integrado e sistema de LEDs coloridos.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h3 className="font-semibold mb-2 text-primary">✓ Rodas {product.size}</h3>
                      <p className="text-sm text-muted-foreground">
                        Tamanho ideal para máxima estabilidade e conforto.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/50">
                      <h3 className="font-semibold mb-2 text-primary">✓ Custo-Benefício</h3>
                      <p className="text-sm text-muted-foreground">
                        Qualidade premium com preço acessível no Mercado Livre.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Keywords Section */}
                <section className="mb-12 p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="font-display text-xl font-bold mb-4">Palavras-chave Relacionadas</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">melhores preços</Badge>
                    <Badge variant="outline" className="text-xs">melhores ofertas</Badge>
                    <Badge variant="outline" className="text-xs">melhores marcas</Badge>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-border/50">
                  <h2 className="font-display text-2xl font-bold mb-4">
                    Garanta o Seu <span className="gradient-text">{product.shortName}</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Aproveite as melhores ofertas no Mercado Livre. Produto original com garantia.
                  </p>
                  <Button variant="affiliate" size="xl" asChild>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      Ver Oferta no Mercado Livre
                    </a>
                  </Button>
                </section>
              </div>
            </article>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display text-2xl font-bold mb-8 text-center">
                  Produtos <span className="gradient-text">Relacionados</span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}
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

export default ProductDetail;
