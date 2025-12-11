import { Button } from "@/components/ui/button";
import { affiliateCategories } from "@/data/products";

export function CategoryButtons() {
  return (
    <section className="py-12 border-y border-border/40 bg-card/30">
      <div className="container">
        <h2 className="font-display text-2xl font-bold text-center mb-6">
          Explore Outras <span className="gradient-text">Categorias</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {affiliateCategories.map((category) => (
            <Button
              key={category.name}
              variant="category"
              size="sm"
              asChild
            >
              <a href={category.link} target="_blank" rel="noopener noreferrer">
                <span>{category.icon}</span>
                {category.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
