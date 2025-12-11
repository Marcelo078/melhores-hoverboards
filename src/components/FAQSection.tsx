import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a melhor marca de hoverboard?",
    answer: "As melhores marcas de hoverboard no Brasil incluem Brinovar, Smart Balance e Lurs. Essas marcas oferecem produtos com certificação de qualidade, baterias seguras e garantia. Recomendamos sempre verificar as avaliações dos compradores e optar por produtos originais para garantir segurança e durabilidade."
  },
  {
    question: "Qual a diferença entre hoverboards e skates elétricos?",
    answer: "O hoverboard possui duas rodas lado a lado e é controlado pelo equilíbrio do corpo, ideal para iniciantes. Já o skate elétrico tem formato tradicional de skate com controle remoto, oferecendo maior velocidade e autonomia. Hoverboards são mais indicados para uso recreativo e curtas distâncias, enquanto skates elétricos são melhores para deslocamentos urbanos."
  },
  {
    question: "Qual é a idade recomendada para andar de hoverboard?",
    answer: "A idade mínima recomendada para uso de hoverboard é de 8 anos, com supervisão de adultos. Para crianças, recomendamos modelos com velocidade limitada e rodas menores (6.5 polegadas). É essencial usar equipamentos de proteção como capacete, joelheiras e cotoveleiras, independente da idade."
  },
  {
    question: "Como saber se o hoverboard é bom?",
    answer: "Um bom hoverboard deve ter: certificação de segurança (especialmente da bateria), motor com potência mínima de 350W por roda, autonomia de pelo menos 10km, peso suportado adequado ao usuário, LEDs funcionais e Bluetooth de qualidade. Verifique também as avaliações de outros compradores e opte por marcas reconhecidas no mercado."
  },
  {
    question: "Qual o tamanho de roda ideal para hoverboard?",
    answer: "Rodas de 6.5 polegadas são ideais para pisos lisos e uso interno/urbano, sendo mais leves e ágeis. Rodas de 8.5 polegadas (offroad) são melhores para terrenos irregulares, grama e calçadas com imperfeições. Rodas de 10 polegadas oferecem máxima estabilidade e conforto, indicadas para adultos e terrenos variados."
  },
  {
    question: "Hoverboard é seguro?",
    answer: "Hoverboards de marcas confiáveis são seguros quando usados corretamente. Procure por modelos com certificação de bateria, proteção contra superaquecimento e estrutura resistente. Sempre use equipamentos de proteção, não exceda o peso máximo suportado e evite usar em locais com trânsito de veículos."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre hoverboards e skates elétricos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
