import { Solution, Stat, TimelineStep, WhyReason, ErpBenefitComparison, Testimonial, BlogPost } from "./types";

export const SOLUTIONS: Solution[] = [
  {
    id: "sage-x3",
    name: "ERP Industriel & Logistique",
    category: "Système de Gestion Intégrée",
    subtitle: "La gouvernance globale de vos flux de production et de distribution.",
    description: "Une plateforme de pilotage d'envergure conçue pour unifier la finance, les achats, les stocks et la production industrielle des ETI et grands groupes marocains.",
    features: [
      "Gestion financière multidimensionnelle & consolidation",
      "Optimisation avancée de la chaîne logistique (SCM) et traçabilité",
      "Pilotage, planification de charges et ordonnancement (GPAO)",
      "Automatisation des workflows d'achats et de facturations",
      "Rapports décisionnels et analyses consolidés temps réel"
    ],
    icon: "ShieldCheck",
    badge: "Haute Performance",
    targetMarket: "Moyennes et Grandes Entreprises (ETI, Groupes multisites)"
  },
  {
    id: "sage-100",
    name: "Comptabilité & Gestion Commerciale",
    category: "Progiciel Intégré PME",
    subtitle: "L'unification connectée de votre gestion commerciale et comptable.",
    description: "Une suite pragmatique unifiant ventes, achats, facturation et stocks dans une base de données unique pour fluidifier l'activité quotidienne des PME.",
    features: [
      "Comptabilité générale, analytique poussée et budgétaire",
      "Gestion commerciale complète et facturation d'affaires",
      "Suivi rigoureux des stocks et alerte de réapprovisionnement",
      "Automatisation des flux de trésorerie et rapprochements bancaires",
      "Interrogation à chaud pour vos tableaux Excel opérationnels"
    ],
    icon: "TrendingUp",
    badge: "Indispensable PME",
    targetMarket: "Petites et Moyennes Entreprises de 10 à 250 collaborateurs"
  },
  {
    id: "sage-paie-rh",
    name: "Paie & Gestion des Collaborateurs",
    category: "Administration & RH",
    subtitle: "Une paie fiable conforme et la dématérialisation des flux RH.",
    description: "Pilotez sereinement l'ensemble de vos ressources humaines, du calcul fiable des rémunérations à la gestion connectée des absences et compétences.",
    features: [
      "Calcul de paie d'une totale conformité réglementaire locale",
      "Portail salarié de demande de congés et notes de frais",
      "Déclarations sociales automatisées et transmission EDI",
      "Suivi des plans de carrières, d'entretiens et d'onboarding",
      "Suivi automatique du temps de présence et modulation horaire"
    ],
    icon: "Users",
    badge: "Conformité Légale",
    targetMarket: "DRH, Directeurs Administratifs et Services Rémunérations"
  },
  {
    id: "sage-crm",
    name: "CRM & Gestion de la Relation Client",
    category: "Relation Client & SAV",
    subtitle: "Fidélisation de vos partenaires et maximisation du tunnel de vente.",
    description: "Pilotez vos opportunités commerciales pas-à-pas, qualifiez vos actions marketing et structurez une activité d'assistance SAV d'exception.",
    features: [
      "Visualisation graphique du pipe et prévisions fiables des ventes",
      "Historique complet de la relation et des appels pour le SAV",
      "Ciblage qualitatif de vos campagnes marketing multicanales",
      "Accès mobile d'affaires en mobilité pour les commerciaux itinérants",
      "Liaison étanche avec vos applications de facturation courantes"
    ],
    icon: "HeartHandshake",
    targetMarket: "Équipes Commerciales, Marketing et Service Client"
  },
  {
    id: "sage-bi",
    name: "Business Intelligence & Décisionnel",
    category: "Analyses de Données",
    subtitle: "Pilotez vos résultats à chaud grâce à des tableaux dynamiques.",
    description: "Connectez vos outils de gestion de manière directe pour formuler des indicateurs visuels d'aide à la décision sans aucune perte de temps.",
    features: [
      "Génération automatique d'états de synthèse fiables et croisés",
      "Interrogation en direct sans ressaisie de vos bases de données",
      "Conception de KPIs personnalisés selon vos objectifs financiers",
      "Partage automatique et sécurisé de rapports aux directeurs",
      "Environnement d'analyse souple et familier pour les DAF"
    ],
    icon: "BarChart3",
    badge: "Efficience Décisionnelle",
    targetMarket: "Directeurs Financiers, Contrôleurs de gestion et DG de groupe"
  },
  {
    id: "conseil-accompagnement",
    name: "Conseil & Intégration de Systèmes",
    category: "Services Thalès",
    subtitle: "L'excellence d'une méthodologie d'audit éprouvée.",
    description: "Profitez de l'expertise de nos consultants pour un plan d'intégration sécurisé, d'une modélisation logicielle affinée et d'une prise en main soignée.",
    features: [
      "Audit fonctionnel complet de vos flux et processus terrain",
      "Méthodologie de déploiement structurée de bout en bout",
      "Développement de connecteurs sur-mesure et d'APIs applicatives",
      "Formation ciblée par rôle utilisateur pour une adoption rapide",
      "Support d'experts de proximité pour sécuriser votre production"
    ],
    icon: "Lightbulb",
    badge: "Accompagnement 360",
    targetMarket: "Toutes organisations en cours de modernisation de leur SI"
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
      "Remise de guides d'utilisation personnalisés de Thalès Informatique",
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
    description: "Créé à l'aube de la transition technologique au Maroc, Thalès Informatique possède une connaissance intime des défis juridiques, comptables et logistiques du marché marocain.",
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
    text: "Déployer Sage 100 avec Thalès Informatique a été un excellent levier de croissance pour notre industrie de packaging. Les équipes de Thalès Informatique comprennent parfaitement les réalités industrielles marocaines. Le service après-vente est ultra réactif et toujours disponible.",
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
  },
  {
    id: "blog-4",
    title: "La réforme de la facturation électronique au Maroc : Comment vous y préparer ?",
    summary: "Analyse des obligations fiscales de facturation digitale et étapes de conformité recommandées pour vos modules d'achats et de ventes Sage 100 ou Sage X3.",
    date: "18 Avril 2026",
    readTime: "7 min de lecture",
    category: "Réglementation Maroc",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: "blog-5",
    title: "Optimisation de la paie marocaine : Comment automatiser IGR & CNSS ?",
    summary: "Un passage en revue des spécificités du calcul des primes d'ancienneté obligatoires et de l'encadrement des déclarations Damancom automatisées sous Sage Paie & RH.",
    date: "26 Mars 2026",
    readTime: "6 min de lecture",
    category: "Ressources Humaines",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: "blog-6",
    title: "Logistique multisites & GPAO : Les secrets d'un stock fluide",
    summary: "Comment paramétrer des alertes intelligentes sur stocks critiques, automatiser des bons de transferts inter-dépôts (Casablanca-Tanger) et optimiser la planification MRP.",
    date: "10 Mars 2026",
    readTime: "9 min de lecture",
    category: "Industrie & Logistique",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=400"
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
