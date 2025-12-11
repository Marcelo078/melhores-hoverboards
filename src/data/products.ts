import hoverboardFireIce from "@/assets/hoverboard-fire-ice.jpg";
import hoverboardPurpleGalaxy from "@/assets/hoverboard-purple-galaxy.jpg";
import hoverboardBlackOffroad from "@/assets/hoverboard-black-offroad.jpg";
import hoverboardBlueKids from "@/assets/hoverboard-blue-kids.jpg";
import hoverboardPinkGalaxy from "@/assets/hoverboard-pink-galaxy.jpg";
import hoverboardBlueCamo from "@/assets/hoverboard-blue-camo.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  description: string;
  features: string[];
  size: string;
  color: string;
  keywords: string[];
  affiliateLink: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hoverboard 8.5 Offroad Skate Elétrico Bluetooth Fogo E Gelo",
    slug: "hoverboard-8-5-offroad-fogo-gelo",
    shortName: "Hoverboard 8.5 Offroad Fogo e Gelo",
    description: "Hoverboard potente com rodas 8.5 polegadas offroad, design exclusivo Fogo e Gelo, Bluetooth integrado para músicas e LEDs vibrantes.",
    features: ["Rodas 8.5 Offroad", "Bluetooth", "LED RGB", "Design Fogo e Gelo", "Motor Potente"],
    size: "8.5 polegadas",
    color: "Fogo e Gelo",
    keywords: ["hoverboard offroad", "skate elétrico 8.5", "hoverboard bluetooth", "hoverboard fogo e gelo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardFireIce
  },
  {
    id: "2",
    name: "Hoverboard Original Skate Elétrico 6.5 Roxo Purple Space Led",
    slug: "hoverboard-6-5-roxo-purple-space",
    shortName: "Hoverboard 6.5 Purple Space",
    description: "Hoverboard original com visual espacial roxo deslumbrante, rodas 6.5 polegadas, LEDs coloridos e design moderno.",
    features: ["Rodas 6.5", "LED Colorido", "Design Purple Space", "Original", "Leve e Compacto"],
    size: "6.5 polegadas",
    color: "Roxo Purple Space",
    keywords: ["hoverboard roxo", "skate elétrico 6.5", "hoverboard led", "hoverboard purple space"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "3",
    name: "Hoverboard Skate Elétrico 8.5'' Offroad Led Bluetooth Preto",
    slug: "hoverboard-8-5-offroad-preto",
    shortName: "Hoverboard 8.5 Offroad Preto",
    description: "Modelo offroad premium com rodas 8.5 polegadas, acabamento preto elegante, Bluetooth e sistema de LEDs.",
    features: ["Rodas 8.5 Offroad", "Bluetooth", "LED", "Cor Preta", "Alta Performance"],
    size: "8.5 polegadas",
    color: "Preto",
    keywords: ["hoverboard offroad preto", "skate elétrico 8.5", "hoverboard bluetooth preto"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "4",
    name: "Hoverboard Masculino Azul Menino Criança Skate Eletrico Bluetooth",
    slug: "hoverboard-azul-infantil-bluetooth",
    shortName: "Hoverboard Azul Infantil 500W",
    description: "Hoverboard ideal para crianças e jovens, cor azul vibrante, 500W de potência, suporta até 120kg, autonomia de 15km.",
    features: ["500W Potência", "Até 120kg", "14 km/h", "15km Autonomia", "LED RGB 360°", "Bluetooth"],
    size: "6.5 polegadas",
    color: "Azul",
    keywords: ["hoverboard infantil", "hoverboard criança", "skate elétrico azul", "hoverboard 500w"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlueKids
  },
  {
    id: "5",
    name: "Hoverboard Original Skate Elétrico 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-8-5-offroad-original",
    shortName: "Hoverboard 8.5 Offroad Original",
    description: "Hoverboard original com certificação de qualidade, rodas offroad 8.5, LEDs e conexão Bluetooth.",
    features: ["Original Certificado", "Rodas 8.5 Offroad", "LED", "Bluetooth", "Garantia"],
    size: "8.5 polegadas",
    color: "Variadas",
    keywords: ["hoverboard original", "skate elétrico offroad", "hoverboard certificado"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "6",
    name: "Hoverboard 8.5 Offroad Skate Elétrico Bluetooth Led Preto",
    slug: "hoverboard-8-5-bluetooth-led-preto",
    shortName: "Hoverboard 8.5 LED Preto",
    description: "Modelo offroad completo com acabamento preto sofisticado, sistema de som Bluetooth e iluminação LED.",
    features: ["8.5 Offroad", "Bluetooth Premium", "LED Integrado", "Preto Sofisticado"],
    size: "8.5 polegadas",
    color: "Preto",
    keywords: ["hoverboard 8.5 preto", "skate elétrico bluetooth", "hoverboard led preto"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "7",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Azul Camuflado",
    slug: "hoverboard-6-5-azul-camuflado",
    shortName: "Hoverboard 6.5 Azul Camuflado",
    description: "Design exclusivo camuflado em tons de azul, rodas 6.5, Bluetooth e LEDs coloridos.",
    features: ["Design Camuflado", "Rodas 6.5", "LED", "Bluetooth", "Estilo Único"],
    size: "6.5 polegadas",
    color: "Azul Camuflado",
    keywords: ["hoverboard camuflado", "skate elétrico azul", "hoverboard design exclusivo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlueCamo
  },
  {
    id: "8",
    name: "Hoverboard Elétrico Skate Overboard 6.5 Led Bluetooth Fogo Gelo",
    slug: "hoverboard-6-5-fogo-gelo-overboard",
    shortName: "Overboard 6.5 Fogo e Gelo",
    description: "Overboard com visual impressionante Fogo e Gelo, bivolt 110v-220v, LEDs e Bluetooth.",
    features: ["Bivolt 110v-220v", "Design Fogo e Gelo", "LED", "Bluetooth", "6.5 Polegadas"],
    size: "6.5 polegadas",
    color: "Fogo e Gelo",
    keywords: ["overboard fogo gelo", "hoverboard bivolt", "skate elétrico fogo gelo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardFireIce
  },
  {
    id: "9",
    name: "Skate Elétrico Hoverboard 6.5 Vermelho Fogo Brinovar",
    slug: "hoverboard-6-5-vermelho-fogo-brinovar",
    shortName: "Hoverboard 6.5 Vermelho Fogo",
    description: "Marca Brinovar com design Vermelho Fogo intenso, qualidade garantida e visual impactante.",
    features: ["Marca Brinovar", "Vermelho Fogo", "Qualidade Premium", "6.5 Polegadas"],
    size: "6.5 polegadas",
    color: "Vermelho Fogo",
    keywords: ["hoverboard brinovar", "skate elétrico vermelho", "hoverboard fogo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardFireIce
  },
  {
    id: "10",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Roxo Galáxia",
    slug: "hoverboard-6-5-roxo-galaxia",
    shortName: "Hoverboard 6.5 Roxo Galáxia",
    description: "Visual espacial único com padrão Galáxia em roxo, LEDs hipnotizantes e Bluetooth.",
    features: ["Design Galáxia", "Roxo Espacial", "LED", "Bluetooth", "Visual Único"],
    size: "6.5 polegadas",
    color: "Roxo Galáxia",
    keywords: ["hoverboard roxo galáxia", "skate elétrico galáxia", "hoverboard espacial"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "11",
    name: "Hoverboard Skate Elétrico 6.5 Bluetooth Led Diversas Cores",
    slug: "hoverboard-6-5-diversas-cores",
    shortName: "Hoverboard 6.5 Diversas Cores",
    description: "Modelo versátil disponível em diversas cores, Bluetooth integrado e LEDs vibrantes.",
    features: ["Diversas Cores", "Bluetooth", "LED", "6.5 Polegadas", "Escolha sua Cor"],
    size: "6.5 polegadas",
    color: "Diversas",
    keywords: ["hoverboard cores", "skate elétrico colorido", "hoverboard personalizado"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlueKids
  },
  {
    id: "12",
    name: "Hoverboard Skate Elétrico 8.5'' Com Led E Bluetooth Brinovar",
    slug: "hoverboard-8-5-brinovar-led-bluetooth",
    shortName: "Hoverboard 8.5 Brinovar Premium",
    description: "Marca Brinovar premium com rodas 8.5, sistema completo de LED e Bluetooth de alta qualidade.",
    features: ["Marca Brinovar", "8.5 Polegadas", "LED Premium", "Bluetooth HD", "Alta Qualidade"],
    size: "8.5 polegadas",
    color: "Variadas",
    keywords: ["hoverboard brinovar 8.5", "skate elétrico premium", "hoverboard qualidade"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "13",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Preto Brinovar",
    slug: "hoverboard-6-5-preto-brinovar",
    shortName: "Hoverboard 6.5 Preto Brinovar",
    description: "Elegância em preto da marca Brinovar, compacto e potente com LED e Bluetooth.",
    features: ["Marca Brinovar", "Preto Elegante", "LED", "Bluetooth", "6.5 Compacto"],
    size: "6.5 polegadas",
    color: "Preto",
    keywords: ["hoverboard preto brinovar", "skate elétrico preto", "hoverboard elegante"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "14",
    name: "Skate Elétrico Hoverboard 6.5 Rosa Liso Brinovar",
    slug: "hoverboard-6-5-rosa-brinovar",
    shortName: "Hoverboard 6.5 Rosa Brinovar",
    description: "Visual delicado em rosa liso, perfeito para quem busca estilo e qualidade Brinovar.",
    features: ["Rosa Delicado", "Marca Brinovar", "6.5 Polegadas", "Estilo Feminino"],
    size: "6.5 polegadas",
    color: "Rosa Liso",
    keywords: ["hoverboard rosa", "skate elétrico feminino", "hoverboard brinovar rosa"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPinkGalaxy
  },
  {
    id: "15",
    name: "Hoverboard Led Bluetooth Skate Elétrico 6.5 Fogo E Gelo",
    slug: "hoverboard-6-5-led-fogo-gelo",
    shortName: "Hoverboard 6.5 Fogo e Gelo LED",
    description: "Combinação perfeita de fogo e gelo com LEDs impressionantes e Bluetooth de qualidade.",
    features: ["Fogo e Gelo", "LED Brilhante", "Bluetooth", "6.5 Polegadas", "Design Único"],
    size: "6.5 polegadas",
    color: "Fogo e Gelo",
    keywords: ["hoverboard fogo gelo led", "skate elétrico led", "hoverboard design fogo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardFireIce
  },
  {
    id: "16",
    name: "Hoverboard 6.5 Elétrico Para Crianças Skate Fogo E Água Purple Star",
    slug: "hoverboard-6-5-infantil-purple-star",
    shortName: "Hoverboard 6.5 Purple Star Infantil",
    description: "Modelo especial para crianças com design Purple Star, seguro e divertido.",
    features: ["Para Crianças", "Purple Star", "Seguro", "6.5 Polegadas", "Design Infantil"],
    size: "6.5 polegadas",
    color: "Purple Star",
    keywords: ["hoverboard infantil", "skate elétrico criança", "hoverboard purple star"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "17",
    name: "Hoverboard Roxo Galáxia Skate Elétrico 10'' Bluetooth E Led",
    slug: "hoverboard-10-roxo-galaxia",
    shortName: "Hoverboard 10'' Roxo Galáxia",
    description: "Modelo premium com rodas de 10 polegadas, visual Galáxia em roxo, máxima estabilidade.",
    features: ["10 Polegadas", "Roxo Galáxia", "Bluetooth", "LED", "Máxima Estabilidade"],
    size: "10 polegadas",
    color: "Roxo Galáxia",
    keywords: ["hoverboard 10 polegadas", "skate elétrico grande", "hoverboard galáxia premium"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "18",
    name: "Hoverboard Skate Elétrico Original 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-8-5-original-offroad-completo",
    shortName: "Hoverboard 8.5 Original Completo",
    description: "Modelo original certificado, offroad 8.5, equipamento completo com LED e Bluetooth.",
    features: ["Original Certificado", "8.5 Offroad", "LED Completo", "Bluetooth", "Garantia Total"],
    size: "8.5 polegadas",
    color: "Variadas",
    keywords: ["hoverboard original 8.5", "skate elétrico certificado", "hoverboard completo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlackOffroad
  },
  {
    id: "19",
    name: "Skate Elétrico Hoverboard 6.5 Azul Camuflado Brinovar",
    slug: "hoverboard-6-5-azul-camuflado-brinovar",
    shortName: "Hoverboard 6.5 Azul Camu Brinovar",
    description: "Estampa camuflada em azul da marca Brinovar, estilo militar moderno.",
    features: ["Azul Camuflado", "Marca Brinovar", "6.5 Polegadas", "Estilo Militar"],
    size: "6.5 polegadas",
    color: "Azul Camuflado",
    keywords: ["hoverboard camuflado brinovar", "skate elétrico militar", "hoverboard azul camu"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardBlueCamo
  },
  {
    id: "20",
    name: "Hoverboard Smart Balance 6.5 Bluetooth Rosa Galáxia",
    slug: "hoverboard-smart-balance-rosa-galaxia",
    shortName: "Smart Balance Rosa Galáxia",
    description: "Linha Smart Balance com equilíbrio inteligente, visual Rosa Galáxia encantador.",
    features: ["Smart Balance", "Rosa Galáxia", "Bluetooth", "6.5 Polegadas", "Equilíbrio Inteligente"],
    size: "6.5 polegadas",
    color: "Rosa Galáxia",
    keywords: ["hoverboard smart balance", "skate elétrico rosa", "hoverboard galáxia feminino"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPinkGalaxy
  },
  {
    id: "21",
    name: "Hoverboard Skate Elétrico Música Bluetooth Luzes Rosa Galáxia",
    slug: "hoverboard-musica-bluetooth-rosa-galaxia",
    shortName: "Hoverboard Música Rosa Galáxia",
    description: "Sistema de som premium com luzes sincronizadas, visual Rosa Galáxia deslumbrante.",
    features: ["Som Premium", "Luzes Sincronizadas", "Rosa Galáxia", "Bluetooth HD", "Visual Único"],
    size: "6.5 polegadas",
    color: "Rosa Galáxia",
    keywords: ["hoverboard música", "skate elétrico som", "hoverboard luzes rosa"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPinkGalaxy
  },
  {
    id: "22",
    name: "Hoverboard Smart Balance 6.5 Bluetooth Roxo Galáxia",
    slug: "hoverboard-smart-balance-roxo-galaxia",
    shortName: "Smart Balance Roxo Galáxia",
    description: "Tecnologia Smart Balance com design Roxo Galáxia, máximo controle e estilo.",
    features: ["Smart Balance", "Roxo Galáxia", "Bluetooth", "Máximo Controle", "Design Premium"],
    size: "6.5 polegadas",
    color: "Roxo Galáxia",
    keywords: ["smart balance roxo", "hoverboard inteligente", "skate elétrico galáxia"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "23",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Rosa Camuflado",
    slug: "hoverboard-6-5-rosa-camuflado",
    shortName: "Hoverboard 6.5 Rosa Camuflado",
    description: "Estampa camuflada única em rosa, combinação de força e delicadeza.",
    features: ["Rosa Camuflado", "LED", "Bluetooth", "6.5 Polegadas", "Estilo Único"],
    size: "6.5 polegadas",
    color: "Rosa Camuflado",
    keywords: ["hoverboard rosa camuflado", "skate elétrico feminino camu", "hoverboard estampado rosa"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPinkGalaxy
  },
  {
    id: "24",
    name: "Hoverboard Skate Elétrico 6.5 Roxo Galáxia Brinovar",
    slug: "hoverboard-6-5-roxo-galaxia-brinovar",
    shortName: "Hoverboard Roxo Galáxia Brinovar",
    description: "Qualidade Brinovar com visual Roxo Galáxia, perfeita combinação de marca e estilo.",
    features: ["Marca Brinovar", "Roxo Galáxia", "LED", "Bluetooth", "Qualidade Certificada"],
    size: "6.5 polegadas",
    color: "Roxo Galáxia",
    keywords: ["hoverboard brinovar roxo", "skate elétrico galáxia", "hoverboard qualidade roxo"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  },
  {
    id: "25",
    name: "Hoverboard Elétrico Para Crianças Lurs HB65 Galáxia",
    slug: "hoverboard-lurs-hb65-galaxia-infantil",
    shortName: "Hoverboard Lurs HB65 Galáxia",
    description: "Modelo Lurs HB65 especialmente projetado para crianças, seguro e com visual Galáxia.",
    features: ["Marca Lurs", "Modelo HB65", "Para Crianças", "Galáxia", "Segurança Certificada"],
    size: "6.5 polegadas",
    color: "Galáxia",
    keywords: ["hoverboard lurs", "skate elétrico infantil seguro", "hoverboard hb65"],
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8",
    image: hoverboardPurpleGalaxy
  }
];

export const affiliateCategories = [
  { name: "Melhores Suplementos", link: "https://mercadolivre.com/sec/1WqdDGr", icon: "💪" },
  { name: "Ofertas Limitadas", link: "https://mercadolivre.com/sec/14GQgfK", icon: "🔥" },
  { name: "Pet Shop", link: "https://mercadolivre.com/sec/2w3WCFN", icon: "🐾" },
  { name: "Peças de Trator", link: "https://mercadolivre.com/sec/2d6sMcw", icon: "🚜" },
  { name: "Melhores Notebooks", link: "https://mercadolivre.com/sec/2cQ33FV", icon: "💻" },
  { name: "Melhores TVs", link: "https://mercadolivre.com/sec/2DLVWrw", icon: "📺" },
  { name: "Construção e Ferramentas", link: "https://mercadolivre.com/sec/23DZvGp", icon: "🔧" },
  { name: "Melhores Creatina", link: "https://mercadolivre.com/sec/1e23ygz", icon: "🏋️" },
  { name: "Smart Home", link: "https://mercadolivre.com/sec/32Q9odi", icon: "🏠" },
  { name: "Carrinhos de Bebês", link: "https://mercadolivre.com/sec/1RdnycU", icon: "👶" },
  { name: "Bebedouros de Água", link: "https://mercadolivre.com/sec/2CjPSqn", icon: "💧" },
  { name: "Motos Infantil Elétrica", link: "https://mercadolivre.com/sec/18DzYmU", icon: "🏍️" },
  { name: "Triciclos Recarregáveis", link: "https://mercadolivre.com/sec/2bb6TRL", icon: "🛴" },
  { name: "Espelhos Orgânicos", link: "https://mercadolivre.com/sec/1MEENov", icon: "🪞" },
  { name: "Placas de Vídeo", link: "https://mercadolivre.com/sec/1HnRJHj", icon: "🎮" },
  { name: "Bicicletas Ergométricas", link: "https://mercadolivre.com/sec/2nKZmda", icon: "🚴" },
  { name: "Hoverboard Skate Elétrico", link: "https://mercadolivre.com/sec/28Ru8g8", icon: "🛹" },
];
