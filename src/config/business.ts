import { BusinessConfig, InstagramPost } from '../types';

/**
 * CONFIGURAÇÃO GERAL DA LAVA10 LAVANDERIA AUTOMÁTICA
 * 
 * Este arquivo centraliza todas as informações comerciais da empresa.
 * O proprietário pode atualizar telefones, endereços, horários, preços e FAQs
 * diretamente aqui sem alterar a estrutura do código.
 */

export const business: BusinessConfig = {
  name: "Lava10 Lavanderia",
  slogan: "Lavanderia Automática",
  shortDescription: "Lave e seque suas roupas de forma rápida, prática e automática em Cachoeira do Sul.",
  city: "Cachoeira do Sul",
  state: "RS",
  country: "Brasil",

  // Redes Sociais oficiais
  instagram: "https://www.instagram.com/lava10lavanderia/",
  instagramHandle: "@lava10lavanderia",

  /**
   * WHATSAPP OFICIAL:
   * Insira apenas os números com DDD (ex: "51999999999").
   * Quando preenchido, os botões e o flutuante gerarão o link https://wa.me/55NUMERO.
   * Se deixado em branco (""), o botão flutuante e botões de chat direcionam para contato amigável / Instagram.
   */
  whatsapp: "",

  // Mensagem pré-definida ao abrir o WhatsApp
  whatsappDefaultMessage: "Olá! Vim pelo site da Lava10 e gostaria de saber mais informações.",

  // UNIDADES DA LAVA10
  units: [
    {
      id: "matriz-centro",
      name: "Lava10 Matriz (Centro)",
      type: "matriz",
      tag: "Unidade Principal",
      address: "Rua Andrade Neves, 1620",
      neighborhood: "Centro",
      city: "Cachoeira do Sul - RS",
      hours: "06h às 02h",
      highlightHours: "Aberto diariamente das 06h às 02h",
      is24Hours: false,
      mapsUrl: "https://maps.app.goo.gl/zYY95CyMMG4jYcji9",
      embedQuery: "Rua Andrade Neves, 1620, Cachoeira do Sul - RS",
      image: "/images/fachada-andrade-neves.jpg",
      alt: "Fachada da unidade principal Lava10 na Rua Andrade Neves, 1620, Centro",
      features: [
        "Lavadoras e secadoras profissionais",
        "Dosagem automática de sabão OMO e amaciante Comfort",
        "Mesa para dobrar roupas e ambiente climatizado",
        "Autoatendimento simples e intuitivo das 06h às 02h"
      ]
    },
    {
      id: "filial-zona-norte",
      name: "Lava10 Filial (Zona Norte)",
      type: "filial",
      tag: "Atendimento 24 Horas",
      // Endereço a ser preenchido pelo proprietário:
      address: "", // Configurar quando disponível (ex: "Av. Exemplo, 123")
      neighborhood: "Zona Norte",
      city: "Cachoeira do Sul - RS",
      hours: "24 horas",
      highlightHours: "Funcionamento 24 horas ininterruptas",
      is24Hours: true,
      mapsUrl: "", // Preencher link do Maps quando disponível
      embedQuery: "",
      image: "/images/fachada-zona-norte.jpg",
      alt: "Fachada da Lava10 Filial Zona Norte com atendimento 24 horas",
      features: [
        "Funcionamento 24 Horas ininterruptas",
        "Lave ou seque em 30 minutos por ciclo",
        "Capacidade média de 20 peças (1 cesto médio)",
        "Produtos de alta qualidade: OMO e Comfort inclusos"
      ]
    }
  ],

  // SERVIÇOS DISPONÍVEIS
  // Conforme valores exibidos na fachada oficial da Lava10:
  services: [
    {
      id: "lavagem",
      name: "Lavagem",
      icon: "washing-machine",
      description: "Lavagem automatizada com sabão OMO e amaciante Comfort dosados automaticamente.",
      badge: "Ciclo 30 Minutos",
      details: [
        "Lavadoras industriais com alta tecnologia",
        "Sabão OMO e amaciante Comfort inclusos",
        "Ciclo rápido de 30 minutos que preserva as fibras",
        "Capacidade média de 20 peças (1 cesto médio)"
      ],
      price: "R$ 15,90",
      priceNotice: "Por ciclo de 30 minutos (sabão e amaciante inclusos)"
    },
    {
      id: "secagem",
      name: "Secagem",
      icon: "flame",
      description: "Secagem rápida, eficiente e prática em alta temperatura controlada.",
      badge: "Ciclo 30 Minutos",
      details: [
        "Secadoras de grande capacidade industrial",
        "Temperatura ajustada para maciez das peças",
        "Roupas secas e prontas para dobrar na hora",
        "Elimina a necessidade de varal em casa"
      ],
      price: "R$ 15,90",
      priceNotice: "Por ciclo de 30 minutos"
    },
    {
      id: "combo",
      name: "Lavagem + Secagem",
      icon: "shirt",
      description: "Opção completa para sair da lavanderia com suas roupas limpas, macias e prontas para usar ou guardar.",
      badge: "Mais Procurado",
      details: [
        "Ciclo sequencial completo em cerca de 60 min",
        "Economia de tempo máxima para a sua rotina",
        "Roupas limpas com OMO & Comfort e secas",
        "Processo 100% autônomo e sem complicação"
      ],
      price: "R$ 31,80",
      priceNotice: "Ciclo completo (lavar + secar)"
    },
    {
      id: "autoatendimento",
      name: "Lavanderia Autoatendimento",
      icon: "store",
      description: "Tenha total autonomia e liberdade para realizar o processo no seu ritmo com instruções na tela.",
      badge: "Autoatendimento",
      details: [
        "Painel intuitivo passo a passo",
        "Sem necessidade de agendamento prévio",
        "Formas de pagamento rápidas e modernas",
        "Ambiente limpo, seguro e monitorado"
      ],
      price: "",
      priceNotice: "Acesso livre durante o horário de funcionamento"
    }
  ],

  // DICAS PARA UMA LAVAGEM MELHOR
  tips: [
    {
      id: "cores",
      title: "Separe roupas por cores",
      description: "Agrupe roupas claras, escuras e coloridas para evitar manchas acidentais e preservar os tons originais.",
      icon: "palette"
    },
    {
      id: "capacidade",
      title: "Não sobrecarregue a máquina",
      description: "Respeite o limite do cesto. Deixar espaço livre permite que a água e os produtos circulem com máxima eficiência.",
      icon: "gauge"
    },
    {
      id: "bolsos",
      title: "Confira os bolsos",
      description: "Retire moedas, chaves, papéis, canetas ou pequenos objetos que possam danificar as roupas ou as máquinas.",
      icon: "check-circle"
    },
    {
      id: "etiquetas",
      title: "Siga as instruções das etiquetas",
      description: "Verifique as orientações de temperatura e cuidados do fabricante antes de iniciar a lavagem ou secagem.",
      icon: "tag"
    },
    {
      id: "delicadas",
      title: "Separe peças delicadas",
      description: "Peças íntimas, rendas ou tecidos muito finos devem ser lavados com cuidado redobrado ou saquinhos protetores.",
      icon: "sparkles"
    }
  ],

  // PERGUNTAS FREQUENTES (FAQ)
  faqs: [
    {
      id: "faq-1",
      category: "funcionamento",
      question: "Como funciona a Lava10?",
      answer: "A Lava10 é uma lavanderia de autoatendimento moderna. Você chega com suas roupas, escolhe uma máquina livre, realiza o pagamento no totem/terminal da loja e inicia o ciclo. Tudo é rápido, intuitivo e com orientações claras nos equipamentos."
    },
    {
      id: "faq-2",
      category: "produtos",
      question: "Preciso levar sabão e amaciante?",
      answer: "Não! A Lava10 injeta automaticamente sabão e amaciante profissionais na dosagem exata para cada ciclo. Você não precisa carregar frascos pesados nem se preocupar com a quantidade certa."
    },
    {
      id: "faq-3",
      category: "funcionamento",
      question: "Quanto tempo demora?",
      answer: "O processo é muito ágil: a lavagem profissional e a secagem duram apenas alguns minutos, permitindo que você tenha suas roupas limpas e prontas em uma fração do tempo de uma máquina doméstica convencional."
    },
    {
      id: "faq-4",
      category: "funcionamento",
      question: "Posso lavar e secar no mesmo local?",
      answer: "Sim! Nossas unidades contam com lavadoras e secadoras de alto padrão lado a lado. Após o término da lavagem, basta transferir as peças para a secadora correspondente e finalizar o processo."
    },
    {
      id: "faq-5",
      category: "unidades",
      question: "A Lava10 funciona 24 horas?",
      answer: "Sim! Nossa Filial Zona Norte conta com atendimento 24 horas ininterruptas. Já a Matriz no Centro atende em horário estendido das 06h às 02h da madrugada todos os dias."
    },
    {
      id: "faq-6",
      category: "pagamento",
      question: "Quais formas de pagamento são aceitas?",
      answer: "O terminal de autoatendimento aceita métodos práticos e modernos como cartões de débito, crédito e PIX diretamente no totem da unidade."
    },
    {
      id: "faq-7",
      category: "produtos",
      question: "Posso lavar edredons?",
      answer: "Sim, nossas máquinas profissionais possuem capacidade adequada para itens volumosos como edredons, cobertores, cortinas e toalhas, sempre respeitando a capacidade indicada no cesto."
    },
    {
      id: "faq-8",
      category: "produtos",
      question: "Posso levar qualquer tipo de roupa?",
      answer: "A maioria das roupas do dia a dia (algodão, jeans, toalhas, lençóis, sintéticos) pode ser lavada com segurança. Apenas peças que exigem lavagem a seco profissional especializada ou materiais incompatíveis com água quente/rotação devem ser evitados conforme as etiquetas."
    },
    {
      id: "faq-9",
      category: "unidades",
      question: "Como encontro a unidade mais próxima?",
      answer: "Você pode conferir nossa seção de Unidades aqui no site! Temos a Matriz na Rua Andrade Neves, 1620 (Centro) e a Filial na Zona Norte. Clique no botão 'Como chegar' para abrir a rota direta no Google Maps."
    }
  ]
};

// Posts em destaque para simulação fiel do feed do Instagram
export const INSTAGRAM_HIGHLIGHTS: InstagramPost[] = [
  {
    id: "post-1",
    type: "post",
    title: "O resultado da lavagem começa aqui",
    caption: "Cesto cheio, roupas perfumadas e máxima eficiência em poucos minutos na Lava10!",
    tag: "#CachoeiraDoSul",
    link: "https://www.instagram.com/lava10lavanderia/",
    colorScheme: "blue"
  },
  {
    id: "post-2",
    type: "notice",
    title: "Atenção: Sabão e Amaciante inclusos!",
    caption: "Você não precisa levar produtos! As máquinas injetam a medida exata automaticamente.",
    tag: "#DicaLava10",
    link: "https://www.instagram.com/lava10lavanderia/",
    colorScheme: "accent"
  },
  {
    id: "post-3",
    type: "post",
    title: "Lavagem moderna x Antigamente",
    caption: "Menos tempo no tanque e na máquina caseira, mais tempo livre para o que você ama.",
    tag: "#Praticidade",
    link: "https://www.instagram.com/lava10lavanderia/",
    colorScheme: "dark"
  },
  {
    id: "post-4",
    type: "reels",
    title: "Conheça a Unidade Matriz Centro",
    caption: "Rua Andrade Neves, 1620. Aberta das 06h às 02h para você lavar quando quiser!",
    tag: "#Lava10Centro",
    link: "https://www.instagram.com/lava10lavanderia/",
    colorScheme: "blue"
  }
];
