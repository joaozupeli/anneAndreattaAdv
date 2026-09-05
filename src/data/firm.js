/**
 * ============================================================
 * DADOS DO ESCRITÓRIO — Anne Andreatta Advocacia
 * Demo personalizado a partir de advocproto (molde intacto)
 * ============================================================
 */

export const firm = {
  name: 'Anne Andreatta Advocacia',
  shortName: 'Anne Andreatta',
  tagline: 'Defesa da mulher e da família com empatia e firmeza',
  subtitle:
    'Advocacia humanizada em São José dos Pinhais — previdenciário, família e direitos da mulher, com atendimento próximo pelo WhatsApp.',

  whatsapp: {
    phone: '554196527181',
    defaultMessage:
      'Olá! Gostaria de falar com a Dra. Anne Andreatta.',
  },

  contact: {
    phone: '(41) 9652-7181',
    email: 'anneandreatta.adv@gmail.com',
    address: {
      street: 'R. Colombo, 1550',
      neighborhood: 'Centro',
      city: 'São José dos Pinhais',
      state: 'PR',
      zip: '83005-400',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Rua+Colombo+1550+São+José+dos+Pinhais+PR&output=embed',
    },
    hours: [
      { days: 'Segunda a Sexta', time: '09:00 – 18:00' },
      { days: 'Sábado', time: 'Sob agendamento' },
      { days: 'Domingo', time: 'Fechado' },
    ],
  },

  legal: {
    oab: 'OAB/PR',
    cnpj: '66.166.314/0001-77',
    disclaimer:
      'Este site tem caráter informativo e não constitui consultoria jurídica. Os resultados mencionados não garantem o mesmo desfecho em casos semelhantes.',
  },

  social: {
    linkedin: null,
    instagram: 'https://www.instagram.com/anneandreattaadvogada/',
  },

  stats: [
    { id: 'focus', label: 'Foco em pessoas', value: 100, suffix: '%' },
    { id: 'areas', label: 'Áreas principais', value: 3, suffix: '' },
    { id: 'channel', label: 'Canal WhatsApp', value: 1, suffix: '' },
    { id: 'city', label: 'Atuação em SJP', value: 1, suffix: '' },
  ],

  about: {
    history:
      'Anne Andreatta Advocacia nasceu para oferecer defesa próxima e humana — especialmente para mulheres e famílias em São José dos Pinhais. Atendimento claro, sem juridiquês desnecessário, e presença no WhatsApp quando você mais precisa.',
    mission:
      'Unir técnica jurídica e empatia: previdenciário e família com escuta ativa, estratégia objetiva e respeito à história de cada cliente.',
  },

  values: [
    {
      id: 'empathy',
      title: 'Empatia',
      text: 'Escuta sem julgamento — especialmente em temas sensíveis de família e violência.',
      icon: 'eye',
    },
    {
      id: 'clarity',
      title: 'Clareza',
      text: 'Explicamos riscos, prazos e caminhos em linguagem que você entende.',
      icon: 'award',
    },
    {
      id: 'ethics',
      title: 'Ética',
      text: 'Conduta responsável perante clientes, colegas e tribunais.',
      icon: 'scale',
    },
    {
      id: 'access',
      title: 'Acesso',
      text: 'Canal direto no WhatsApp e atendimento em SJP, perto de quem precisa.',
      icon: 'shield',
    },
  ],

  practiceAreas: [
    {
      id: 'familia',
      title: 'Direito de Família',
      short: 'Divórcio, guarda, pensão e proteção da mulher.',
      full: 'Atendimento humanizado em divórcio, união estável, guarda, alimentos e medidas de proteção — com discrição e firmeza.',
      icon: 'family',
    },
    {
      id: 'previdenciario',
      title: 'Direito Previdenciário',
      short: 'Aposentadorias, benefícios e revisões junto ao INSS.',
      full: 'Orientação e acompanhamento em pedidos de aposentadoria, BPC/LOAS, auxílios e revisões administrativas e judiciais.',
      icon: 'civil',
    },
    {
      id: 'mulher',
      title: 'Defesa da Mulher',
      short: 'Acolhimento jurídico em situações de vulnerabilidade.',
      full: 'Orientação sobre direitos, medidas protetivas e caminhos jurídicos com escuta empática e estratégia clara.',
      icon: 'shield',
    },
    {
      id: 'civil',
      title: 'Direito Civil',
      short: 'Questões cotidianas com orientação objetiva.',
      full: 'Suporte em demandas cíveis relacionadas ao patrimônio e à vida civil, com foco em prevenção e solução eficiente.',
      icon: 'business',
    },
  ],

  team: [
    {
      id: '1',
      name: 'Dra. Anne Andreatta',
      role: 'Advogada',
      category: 'socio',
      oab: 'OAB/PR',
      photo: null,
      photoAlt: 'Retrato da Dra. Anne Andreatta',
      bio: 'Advogada em São José dos Pinhais com atuação em previdenciário e família, com ênfase na defesa da mulher. Atendimento próximo pelo WhatsApp e linguagem clara.',
      formation: 'Direito · Advocacia previdenciária e de família',
      expertise: ['Previdenciário', 'Família', 'Defesa da mulher'],
      achievements: [
        'Atendimento humanizado em SJP e região',
        'Canal direto no WhatsApp para primeiras orientações',
      ],
      showWhatsApp: true,
    },
  ],

  testimonials: [
    {
      id: 't1',
      quote:
        'Fui ouvida com respeito e saí da conversa entendendo exatamente o que fazer. Atendimento humano de verdade.',
      author: 'Cliente — Direito de Família',
      result: 'Orientação clara no primeiro contato',
    },
    {
      id: 't2',
      quote:
        'Me ajudou com a documentação do INSS sem enrolação. WhatsApp rápido e explicação simples.',
      author: 'Cliente — Previdenciário',
      result: 'Pedido organizado com checklist',
    },
    {
      id: 't3',
      quote:
        'Em um momento difícil, encontrei firmeza e acolhimento. Recomendo para outras mulheres.',
      author: 'Cliente — Defesa da mulher',
      result: 'Acolhimento + caminho jurídico',
    },
  ],
}

export const teamFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'socio', label: 'Sócios' },
  { id: 'juridica', label: 'Equipe Jurídica' },
  { id: 'administrativa', label: 'Equipe Administrativa' },
]

export const interestAreas = [
  'Direito de Família',
  'Direito Previdenciário',
  'Defesa da Mulher',
  'Direito Civil',
  'Outro / Não sei informar',
]
