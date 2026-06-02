import { Solution, Stat, TimelineStep, WhyReason, ErpBenefitComparison, Testimonial, BlogPost } from "./types";

export const SOLUTIONS: Solution[] = [
  {
    id: "sage-x3",
    name: "Sage X3",
    category: "ERP Grande Entreprise",
    subtitle: "La solution ultime pour piloter vos opérations mondiales et locales.",
    description: "Un ERP complet, flexible et évolutif conçu pour les moyennes et grandes entreprises marocaines des secteurs de l'industrie, de la distribution et des services.",
    features: [
      "Gestion financière multidimensionnelle & comptabilité",
      "Optimisation avancée de la chaîne logistique (SMC)",
      "Pilotage et planification de la production (GPAO)",
      "Ventes, CRM & Service client intégrés",
      "Analyses d'activité et rapports décisionnels intégrés"
    ],
    icon: "ShieldCheck",
    badge: "Populaire",
    targetMarket: "Moyennes et Grandes Entreprises (PME/ETI et Groupes)"
  },
  {
    id: "sage-100",
    name: "Sage 100",
    category: "Gestion PME",
    subtitle: "Gestion de bout en bout pour PME connectées et agiles.",
    description: "Une suite de gestion intégrée (Comptabilité, Facturation, Stocks, Achats) parfaitement adaptée pour simplifier le quotidien des PME marocaines en pleine croissance.",
    features: [
      "Comptabilité générale, analytique et budgétaire",
      "Gestion commerciale et facturation électronique",
      "Suivi précis des stocks et gestion des approvisionnements",
      "Automatisation des flux de trésorerie et rapprochements bancaires",
      "Intégration native avec Excel pour des tableaux de bord agiles"
    ],
    icon: "TrendingUp",
    badge: "Essentiel",
    targetMarket: "Petites et Moyennes Entreprises de 10 à 250 collaborateurs"
  },
  {
    id: "sage-paie-rh",
    name: "Sage Paie & RH",
    category: "Ressources Humaines",
    subtitle: "Conformité légale et gestion optimale du capital humain.",
    description: "Produisez une paie 100% conforme à la législation marocaine (IR, CNSS, CIMR, AMO) et optimisez la gestion des carrières, congés et compétences.",
    features: [
      "Calcul de paie d'une fiabilité absolue (législation marocaine)",
      "Portail RH collaboratif pour poser congés et notes de frais",
      "Déclarations sociales automatisées (télédéclaration Damancom)",
      "Gestion des talents, recrutements, formations et entretiens",
      "Édition ergonomique des fiches de paie et états récapitulatifs"
    ],
    icon: "Users",
    badge: "Conforme Maroc",
    targetMarket: "DRH et Responsables Paie de tout secteur"
  },
  {
    id: "sage-crm",
    name: "Sage CRM",
    category: "Relation Client",
    subtitle: "Fidélisez vos clients et maximisez vos ventes.",
    description: "Suivez vos opportunités commerciales, pilotez vos campagnes marketing et offrez un service après-vente d'exception grâce à une vision client à 360°.",
    features: [
      "Gestion de pipe commercial et prévisions de ventes de l'équipe",
      "Historique complet des interactions clients pour le SAV",
      "Automatisation et ciblage des campagnes de marketing multicanal",
      "Accès mobile pour les commerciaux sur le terrain au Maroc",
      "Connectivité fluide avec Sage 100 et Sage X3"
    ],
    icon: "HeartHandshake",
    targetMarket: "Équipes Commerciales, Marketing et Service Client"
  },
  {
    id: "sage-bi",
    name: "Sage BI Reporting",
    category: "Business Intelligence",
    subtitle: "Décidez en temps réel avec des indicateurs sur-mesure.",
    description: "Connectez vos bases de données de gestion directement à Excel® et construisez des tableaux de bord dynamiques pour piloter votre trésorerie, vos ventes et votre marge.",
    features: [
      "Génération automatique d'états de synthèse fiables",
      "Interrogation en direct des logiciels de gestion à l'instant T",
      "Mise en place de KPIs stratégiques sur-mesure",
      "Partage automatique des rapports aux directeurs et managers",
      "Prise en main immédiate dans l'environnement Excel familier"
    ],
    icon: "BarChart3",
    badge: "Nouveau",
    targetMarket: "Directeurs Financiers, DG et Contrôleurs de gestion"
  },
  {
    id: "conseil-accompagnement",
    name: "Conseil & Intégration",
    category: "Services Thalès",
    subtitle: "L'excellence méthodologique pour votre réussite.",
    description: "Bénéficiez de 30 ans d'expertise accumulée par nos ingénieurs consultants certifiés, pour un déploiement sécurisé, performant et sur-mesure.",
    features: [
      "Audit technique et fonctionnel approfondi de vos processus actuels",
      "Pilotage de projet selon des standards internationaux d'intégration",
      "Développements spécifiques et connecteurs d'applications métiers",
      "Formation intensive de vos équipes pour une adoption immédiate",
      "Contrat de support Premium avec SLA garanti et interlocuteur dédié"
    ],
    icon: "Lightbulb",
    badge: "Sur-mesure",
    targetMarket: "Toutes entreprises souhaitant réussir leur transition numérique"
  }
];

export const STATS: Stat[] = [
  {
    id: "stat-1",
    value: 30,
    suffix: "+",
    label: "Ans d'expérience",
    description: "Au service de l'écosystème entrepreneurial marocain."
  },
  {
    id: "stat-2",
    value: 1000,
    suffix: "+",
    label: "Projets réalisés",
    description: "Intégrations réussies d'ERP de gestion et d'outils décisionnels."
  },
  {
    id: "stat-3",
    value: 500,
    suffix: "+",
    label: "Clients accompagnés",
    description: "PME et grandes entreprises de Casablanca à Tanger et Agadir."
  },
  {
    id: "stat-4",
    value: 98,
    suffix: "%",
    label: "Satisfaction client",
    description: "Taux de rétention élevé grâce à notre support réactif exclusif."
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: "1. Audit & Cadrage",
    duration: "Semaine 1 - 2",
    description: "Analyse approfondie de vos processus métiers actuels (flux, stocks, comptabilité) pour identifier vos goulots d'étranglement et points d'amélioration.",
    details: [
      "Ateliers d'expression des besoins",
      "Évaluation technique de l'infrastructure existante",
      "Rédaction du cahier des charges et feuille de route budgétée"
    ]
  },
  {
    number: 2,
    title: "2. Conception & Maquettage",
    duration: "Semaine 3 - 5",
    description: "Architecture de votre futur ERP Sage et ajustement précis des modèles de données et droits d'accès selon votre organigramme.",
    details: [
      "Modélisation des workflows (achats, ventes, production)",
      "Conception des maquettes de tableaux de bord financiers",
      "Validation partenariale de la solution cible"
    ]
  },
  {
    number: 3,
    title: "3. Paramétrage & Déploiement",
    duration: "Semaine 6 - 9",
    description: "Installation, programmation des briques fonctionnelles, et migration sécurisée de vos anciennes données comptables et fiches articles.",
    details: [
      "Importation sécurisée de vos données historiques",
      "Configuration des spécificités locales (déclarations fiscales Maroc)",
      "Tests d'intégration unitaires et d'étanchéité"
    ]
  },
  {
    number: 4,
    title: "4. Formation & Recette",
    duration: "Semaine 10 - 11",
    description: "Formation de vos managers et collaborateurs terrain pour assurer une adoption rapide, intuitive et durable du nouvel outil.",
    details: [
      "Sessions de formation par services métiers",
      "Remise de guides d'utilisation personnalisés Thalès",
      "Recette globale de l'ERP avec vos référents"
    ]
  },
  {
    number: 5,
    title: "5. Mise en Production & Support",
    duration: "Semaine 12+",
    description: "Lancement officiel en production de l'ERP et bascule vers notre support client réactif et nos sessions de maintenance continue.",
    details: [
      "Assistance rapprochée le jour du démarrage",
      "Accès prioritaire à notre hotline d'experts Sage basés au Maroc",
      "Mises à jour réglementaires et fonctionnelles constantes"
    ]
  }
];

export const WHY_REASONS: WhyReason[] = [
  {
    id: "why-1",
    title: "30 Ans de Savoir-faire",
    description: "Créé à l'aube de la transition technologique au Maroc, Thalès possède une connaissance intime des défis juridiques, comptables et logistiques du marché marocain.",
    iconName: "Award"
  },
  {
    id: "why-2",
    title: "Consultants Certifiés Sage",
    description: "Une équipe hautement qualifiée d'ingénieurs d'affaires et de consultants certifiés au plus haut niveau de compétences techniques et fonctionnelles Sage.",
    iconName: "GraduationCap"
  },
  {
    id: "why-3",
    title: "Support Réactif Basé au Maroc",
    description: "Un service d'assistance disponible, réactif, qui maîtrise les problématiques d'administration locales et garantit un SLA exigeant en cas d'incident.",
    iconName: "Headphones"
  },
  {
    id: "why-4",
    title: "Solutions Personnalisées",
    description: "Aucune entreprise ne se ressemble. Nous personnalisons nos maquettes d'ERP et nos indicateurs BI pour qu'ils épousent fidèlement vos spécificités de terrain.",
    iconName: "Settings"
  },
  {
    id: "why-5",
    title: "Accompagnement 360°",
    description: "De l'analyse stratégique initiale jusqu'aux évolutions fonctionnelles futures en passant par l'hébergement cloud de vos solutions ERP.",
    iconName: "Compass"
  },
  {
    id: "why-6",
    title: "Expertise Sage Unique",
    description: "Nous sommes intégrateur de référence des produits de l'écosystème Sage, nous permettant de débloquer le meilleur rapport qualité/prix du marché.",
    iconName: "Box"
  }
];

export const ERP_BENEFITS: ErpBenefitComparison[] = [
  {
    id: "benefit-1",
    aspect: "Gestion des données d'entreprise",
    before: {
      status: "Données dispersées",
      description: "Fichiers Excel multiples, stocks décalés, erreurs d'import/export de ventes, perte d'historique."
    },
    after: {
      status: "Gestion centralisée",
      description: "Une base de données unique partagée en temps réel entre la comptabilité, le dépôt, les ventes et l'usine."
    }
  },
  {
    id: "benefit-2",
    aspect: "Tâches administratives et opérationnelles",
    before: {
      status: "Tâches manuelles",
      description: "Saisie double des règlements, erreurs de transcription humaine, fiches de paie fastidieuses, ressaisie de factures."
    },
    after: {
      status: "Processus automatisés",
      description: "Génération de devis en facture en un clic, lettrage bancaire par IA, automatisation légale de la paie marocaine."
    }
  },
  {
    id: "benefit-3",
    aspect: "Visibilité stratégique & Pilotage",
    before: {
      status: "Manque de visibilité",
      description: "Constater les baisses de marge ou de stocks à la fin du mois, prise de décision basée sur des approximations."
    },
    after: {
      status: "Tableaux de bord temps réel",
      description: "Rapports interactifs instantanés, suivi du chiffre d'affaires et contrôle des coûts actualisé chaque minute."
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Abdelilah Bensaid",
    role: "Directeur Administratif et Financier",
    company: "Souss Agro",
    city: "Agadir",
    text: "Grâce à l'intégration de Sage X3 par Thalès Informatique, nous avons centralisé notre logistique de distribution et optimisé notre trésorerie. Nos cycles de clôture mensuels sont passés de 14 jours à seulement 3 jours. Leur méthodologie d'audit a fait toute la différence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 5
  },
  {
    id: "test-2",
    name: "Meriem Alami",
    role: "Directrice Générale",
    company: "Medina Pack",
    city: "Casablanca",
    text: "Déployer Sage 100 avec Thalès Informatique a été un excellent levier de croissance pour notre industrie de packaging. Les équipes de Thalès comprennent parfaitement les réalités industrielles marocaines. Le service après-vente est ultra réactif et toujours disponible.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 5
  },
  {
    id: "test-3",
    name: "Khalid El Mansouri",
    role: "Directeur des Ressources Humaines",
    company: "Atlas Logistique & Transports",
    city: "Tanger",
    text: "La paie est stratégique et complexe face aux normes marocaines. Avec Sage Paie & RH adapté par Thalès, nos paies de 600 chauffeurs se calculent en un clic avec une conformité immédiate à l'IR et la CNSS. Un soulagement total pour mes gestionnaires.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 5
  },
  {
    id: "test-4",
    name: "Yassine Tagma",
    role: "Directeur du Système d'Information",
    company: "Maroc Métal Group",
    city: "Fès",
    text: "Thalès Informatique n'est pas qu'un simple fournisseur, c'est notre partenaire technologique majeur depuis plus de 8 ans. Leurs experts ont développé des passerelles personnalisées entre nos machines CNC et notre ERP, éliminant les pertes de stock.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Guide complet de la transition numérique pour les PME marocaines",
    summary: "Découvrez les étapes indispensables, les aides à l'investissement numérique au Maroc et comment structurer votre projet d'ERP sans rompre votre chaîne d'activité courante.",
    date: "28 Mai 2026",
    readTime: "6 min de lecture",
    category: "Transformation Digitale",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: "blog-2",
    title: "Sage X3 vs Sage 100 : Quel ERP choisir pour votre croissance ?",
    summary: "Analyse comparative rigoureuse des fonctionnalités, de la flexibilité industrielle, des coûts globaux d'intégration et du retour sur investissement selon la taille de votre structure.",
    date: "15 Mai 2026",
    readTime: "8 min de lecture",
    category: "ERP & Sage",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: "blog-3",
    title: "Les bénéfices incontournables d'un outil de Business Intelligence (BI)",
    summary: "Comment l'interconnexion en direct de vos données comptables avec Excel via Sage BI Reporting permet d'automatiser vos tableaux de bord consolidés et de sécuriser vos marges.",
    date: "04 Mai 2026",
    readTime: "5 min de lecture",
    category: "Gestion & BI",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400"
  }
];

export const TRUSTED_LOGOS = [
  { name: "Souss Agro", industry: "Agroalimentaire" },
  { name: "Medina Pack", industry: "Packaging" },
  { name: "Atlas Logistique", industry: "Logistique & Transport" },
  { name: "Maroc Métal Group", industry: "Métallurgie" },
  { name: "Sahara Trading", industry: "Distribution" },
  { name: "Technopark Casa", industry: "Innovation" },
  { name: "Atlantic Fish", industry: "Pêche & Export" },
  { name: "Riad & Hôtels Group", industry: "Hôtellerie" }
];
