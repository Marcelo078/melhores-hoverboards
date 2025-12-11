import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Info } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={`${product.name} - Melhor Hoverboard Skate Elétrico`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
          {product.size}
        </Badge>
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.shortName}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/produto/${product.slug}`}>
              <Info className="h-4 w-4" />
              Saiba Mais
            </Link>
          </Button>
          <Button variant="affiliate" size="sm" className="flex-1" asChild>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Comprar
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
