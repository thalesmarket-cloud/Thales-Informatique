export interface SolutionDetails {
  id: string;
  name: string;
  category: "ERP & Gestion" | "Maintenance & Industrie" | "Gestion Financière" | "Ressources Humaines";
  tagline: string;
  badge?: string;
  path: string;
  
  // 1. Hero Section
  heroTitle: string;
  heroSubtitle: string;
  
  // 2. Product Overview
  overviewText: string;
  targetMarket: string;
  stats: Array<{ label: string; value: string }>;
  
  // 3. Key Features
  features: Array<{ title: string; desc: string }>;
  
  // 4. Business Benefits
  benefits: Array<{ title: string; desc: string }>;
  
  // 5. Industries Served
  industries: string[];
  
  // 6. Integration Capabilities
  integrations: string[];
  
  // 7. FAQ
  faqs: Array<{ question: string; answer: string }>;
}

export const SOLUTIONS_DATA: Record<string, SolutionDetails> = {
  "sage-x3": {
    id: "sage-x3",
    name: "Sage X3",
    category: "ERP & Gestion",
    tagline: "L'ERP de référence pour rationaliser vos opérations industrielles et logistiques complexes.",
    badge: "Leader Marché",
    path: "/solutions/sage-x3",
    
    heroTitle: "Pilotez l'ensemble de votre groupe industriel et logistique avec Sage X3",
    heroSubtitle: "Un progiciel de gestion intégré de nouvelle génération, ultra-agile, conçu pour briser les silos d'informations et optimiser vos flux multisites au Maroc.",
    
    overviewText: "Sage X3 (Enterprise Management) est bien plus qu'un simple ERP. C'est une plateforme d'intégration totale qui unifie la finance, les ventes, les achats, les stocks et la production industrielle au sein d'une base de données unique à haute performance. Spécialement adapté pour les moyennes et grandes entreprises marocaines, il apporte une visibilité complète en temps réel pour prendre des décisions stratégiques rapides.",
    targetMarket: "Grandes entreprises, filiales de groupes, ETI de production ou de distribution multisites.",
    stats: [
      { label: "D'efficience opérationnelle globale", value: "+22%" },
      { label: "Réduction des écarts d'inventaire", value: "-95%" },
      { label: "Accélération des clôtures financières", value: "x4" }
    ],
    
    features: [
      { title: "Production & GPAO de pointe", desc: "Planifiez finement vos ordres de fabrication, gérez vos gammes, nomenclatures de composants multiniveaux et estimez les coûts de revient réels." },
      { title: "Gestion Financière Multidimensionnelle", desc: "Pilotez une comptabilité générale, analytique poussée et budgétaire en totale conformité avec les règles fiscales marocaines." },
      { title: "Chaîne Logistique & Gestion de Stocks", desc: "Optimisez la rotation de vos approvisionnements d'entrepôts, gérez la traçabilité complète par lots et gérez l'interfaçage code-barres mobile." },
      { title: "Achats & Ventes Intégrés", desc: "Automatisez workflows de validation de devis, d'achats, factures et gérez vos structures de tarifs et remises collectives complexes." }
    ],
    
    benefits: [
      { title: "Zéro double saisie", desc: "Chaque action saisie sur le terrain met immédiatement à jour vos tableaux financiers et de stocks." },
      { title: "Souveraineté décisionnelle complète", desc: "Accédez à de parfaits rapports consolidés de rentabilité par filiale ou activité." },
      { title: "Conformité fiscale totale", desc: "Prise en compte native des directives Domancom CNSS et des télédéclarations EDI Simpl-IS." }
    ],
    
    industries: [
      "Agroalimentaire et Conserve",
      "Chimie, Plasturgie et Pharmacie",
      "Métallurgie et Charpente",
      "Distribution et Négoce de Gros",
      "Logistique et Transport National/S&D"
    ],
    
    integrations: [
      "Liaison directe avec Sage BI Reporting pour des maquettes Excel dynamiques",
      "API REST native pour s'interconnecter avec vos logiciels CRM ou pointeuses de personnel",
      "Entrées automatiques de vos flux bancaires sécurisés"
    ],
    
    faqs: [
      { question: "Combien de temps prend l'implémentation de Sage X3 ?", answer: "La durée moyenne de déploiement de Sage X3 oscille entre 6 et 9 mois. Ce jalon comprend les phases cruciales d'audit de processus, de modélisation, de migration de données, de formations intensives de vos équipes et de démarrage rapproché." },
      { question: "Sage X3 est-il disponible en mode hébergé ou Cloud ?", answer: "Absolument. Nous proposons un hébergement hautement sécurisé sur des infrastructures cloud à haute disponibilité (SaaS) ou un déploiement traditionnel sur vos propres serveurs (On-Premises), selon votre charte informatique." },
      { question: "La solution gère-t-elle l'import-export et les devises ?", answer: "Oui, Sage X3 a été construit nativement pour les transactions multilingues, multi-devises et multi-sociétés, réévaluant vos provisions d'écarts de change automatiquement selon les cours du jour." }
    ]
  },
  "sage-100": {
    id: "sage-100",
    name: "Sage 100",
    category: "ERP & Gestion",
    tagline: "Pilotez votre PME en croissance de manière connectée, agile et structurée.",
    badge: "Populaire PME",
    path: "/solutions/sage-100",
    
    heroTitle: "Simplifiez la gestion quotidienne complète de votre PME avec Sage 100",
    heroSubtitle: "La suite de gestion intégrée incontournable unifiant comptabilité, gestion commerciale, ventes, achats et stocks pour plus d'agilité au Maroc.",
    
    overviewText: "Sage 100 est la solution de référence pour les petites et moyennes entreprises marocaines en quête de structuration opérationnelle. Évoluant à vos côtés, elle regroupe au sein d'une interface robuste l'ensemble de vos transactions quotidiennes. Finis les innombrables tableurs Excel déconnectés et incohérents : Sage 100 unifie vos flux métiers en toute simplicité.",
    targetMarket: "PME de 15 à 250 collaborateurs, distributeurs, prestataires de services ou unités de conditionnement.",
    stats: [
      { label: "De temps gagné sur la saisie comptable", value: "-75%" },
      { label: "Précision d'inventaire améliorée", value: "99.8%" },
      { label: "Visibilité sur vos flux de trésorerie", value: "100%" }
    ],
    
    features: [
      { title: "Comptabilité Générale & Analytique", desc: "Gérez vos écritures d'achats et de ventes, réalisez vos déclarations de TVA automatiques et pilotez vos budgets de manière fluide." },
      { title: "Gestion Commerciale & Facturation", desc: "Émettez des devis, bons de commande, bordereaux de livraison et factures en un clic tout en contrôlant l'encours financier autorisé de vos clients." },
      { title: "Trésorerie & Moyens de Paiement", desc: "Suivez vos relevés bancaires marocains de façon automatisée, anticipez vos liquidités à 30 ou 60 jours et relancez vos factures impayées." },
      { title: "Gestion de Stocks & Réapprovisionnement", desc: "Suivez vos articles avec gestion des tailles, couleurs, codes-barres et déclenchez d'intelligentes alertes de réapprovisionnement automatique." }
    ],
    
    benefits: [
      { title: "Productivité démultipliée", desc: "L'information circule sans rupture du commercial à l'entrepôt jusqu'au DAF." },
      { title: "Simplicité de prise en main", desc: "Des workflows ergonomiques et intuitifs pour une adoption quasi immédiate par vos équipes." },
      { title: "Éclairage décisionnel direct", desc: "Modifiez ou mettez à jour l'ensemble de vos rapports directement dans Microsoft Excel." }
    ],
    
    industries: [
      "Distribution Grossiste & Négoce",
      "Sociétés de Services & Conseil",
      "Petites industries de Packaging et Conditionnement",
      "Matériaux de Construction",
      "Équipements et Fournitures Industrielles"
    ],
    
    integrations: [
      "Connexion Excel native via l'outil Sage BI Reporting",
      "Intégration transparente avec Sage Paie & RH",
      "Import de balances comptables tierces au format universel"
    ],
    
    faqs: [
      { question: "Est-ce difficile de migrer nos données actuelles vers Sage 100 ?", answer: "Pas du tout. Thalès Informatique a développé des protocoles stricts de migration de données. Nous extrayons, nettoyons et restructurons vos historiques de comptes, de fiches clients et d'articles pour les insérer proprement dans votre nouvelle base Sage 100." },
      { question: "Peut-on ajouter des modules spécifiques en cours de route ?", answer: "C'est l'un des grands forces de Sage 100. Sa structure est modulaire : vous pouvez démarrer uniquement avec la gestion commerciale, puis ajouter la comptabilité, la trésorerie ou la gestion de production lorsque votre entreprise grandit." },
      { question: "Quelle assistance proposez-vous pour l'utilisation ?", answer: "Nous offrons un contrat d'assistance annuel qui comprend un support téléphonique gratuit, une télémaintenance immédiate d'urgence et l'installation de toutes les mises à jour réglementaires et techniques." }
    ]
  },
  "sage-frp-1000": {
    id: "sage-frp-1000",
    name: "Sage FRP 1000",
    category: "ERP & Gestion",
    tagline: "La plateforme d'excellence financière dédiée aux directions de groupes et grandes filiales.",
    badge: "Haute Finance",
    path: "/solutions/sage-frp-1000",
    
    heroTitle: "Optimisez la conformité et la performance financière d'envergure avec Sage FRP 1000",
    heroSubtitle: "Une suite financière complète, modulaire et hautement sécurisée, conçue pour consolider les flux et piloter la trésorerie des holdings multisites au Maroc.",
    
    overviewText: "Sage FRP 1000 est une solution d'excellence spécifiquement dédiée aux directeurs administratifs et financiers (DAF) de grands groupes nationaux, holdings financiers et organisations multisites. Alliant rigueur comptable absolue et conformité légale totale au Maroc, elle répond avec souplesse aux besoins exigeants de consolidation financière, de gestion de trésorerie de groupe et d'auditabilité.",
    targetMarket: "Holdings de services, groupes d'investissement, filiales d'entreprises à structure de gestion financière complexe.",
    stats: [
      { label: "De temps gagné sur la consolidation", value: "-60%" },
      { label: "Traçabilité des écritures auditées", value: "100%" },
      { label: "Sécurisation des paiements de groupe", value: "Zéro Faille" }
    ],
    
    features: [
      { title: "Comptabilité de Groupe & Consolidation", desc: "Consolidez plusieurs plans de comptes, accélérez vos balances de consolidation inter-compagnies et harmonisez les rapports." },
      { title: "Gestion de Trésorerie Avancée", desc: "Suivez vos échelles d'intérêts croisées, gérez des pools bancaires, optimisez l'équilibrage de trésorerie de groupe (pooling)." },
      { title: "Achats & Engagements Budgétaires", desc: "Suivez vos budgets opérationnels par département avec workflows complets de validation des demandes d'investissements." },
      { title: "Protocole de Communication Sécurisée", desc: "Télétransmettez vos ordres de paiement de manière hautement cryptée aux différentes banques marocaines." }
    ],
    
    benefits: [
      { title: "Rigueur comptable maximale", desc: "Un progiciel audit-ready conforme aux exigences majeures des commissaires aux comptes." },
      { title: "Vision globale centralisée", desc: "Affichez l'état des liquidités et des performances de 10 holdings d'un seul coup d'œil synthétique." },
      { title: "Sélection fonctionnelle à la carte", desc: "Une architecture modulaire vous permettant de choisir vos propres modules de spécialités." }
    ],
    
    industries: [
      "Holdings Financières et d'Investissement",
      "Sociétés Immobilières et de Promotion d'Envergure",
      "Compagnies d'Assurances & de Courtage de haut de bilan",
      "Établissements de Crédit et Services d'Épargne",
      "Grandes Entreprises de Télécoms et de Transport de Fonds"
    ],
    
    integrations: [
      "Connexion étroite avec l'ensemble des protocoles bancaire EDI",
      "Liaison vers des outils d'audit d'experts",
      "Connectivité fluide avec Sage BI Reporting"
    ],
    
    faqs: [
      { question: "Qu'est-ce qui différencie Sage FRP 1000 d'un simple logiciel comptable ?", answer: "Sage FRP 1000 intègre des concepts complexes de pilotage financier : gestion inter-compagnies (flux internes réciproques), consolidation directe multi-sociétés, workflows stricts de validation budgétaire et protocoles de signatures électroniques hautement sécurisés exigés pour les transactions de millions de dirhams." },
      { question: "La solution intègre-t-elle les normes IFRS ?", answer: "Parfaitement. Sage FRP 1000 prend en charge la double comptabilisation (locale selon le plan comptable marocain et internationale selon la charte IFRS), vous permettant de sortir vos rapports réglementaires simultanément." },
      { question: "Le déploiement requiert-il un audit lourd ?", answer: "Oui, un cadrage financier rigoureux impliquant le DAF et la Direction Générale est indispensable au départ pour définir avec précision les modèles budgétaires de l'organisation." }
    ]
  },
  "dimomaint-gmao": {
    id: "dimomaint-gmao",
    name: "DimoMaint GMAO",
    category: "Maintenance & Industrie",
    tagline: "Optimisez la durée de vie de vos machines et planifiez vos interventions.",
    badge: "Industrie 4.0",
    path: "/solutions/dimomaint-gmao",
    
    heroTitle: "Fiabilisez l'activité de vos équipements de production avec DimoMaint GMAO",
    heroSubtitle: "La solution de référence de Gestion de la Maintenance Assistée par Ordinateur (GMAO) pour réduire les pannes subites d'installations de fabrication au Maroc.",
    
    overviewText: "DimoMaint GMAO est l'outil indispensable des directions de maintenance d'usine et de services techniques. Permettant de passer d'une maintenance purement curative et coûteuse à un modèle de maintenance préventive structuré et prédictible, il vous dote d'une pleine visibilité sur vos installations d'ateliers, l'historique de pannes et l'activité de vos techniciens.",
    targetMarket: "Directeurs de maintenance, responsables de parcs de véhicules, ingénieurs sécurité et directeurs d'usine.",
    stats: [
      { label: "De réduction des pannes d'usine", value: "-30%" },
      { label: "Productivité des équipes techniques", value: "+25%" },
      { label: "Économie de stocks de pièces détachées", value: "-20%" }
    ],
    
    features: [
      { title: "Gestion de Maintenance Préventive", desc: "Planifiez graphiquement vos plans réguliers de contrôles de machines d'après le calendrier ou d'après des relevés de compteurs." },
      { title: "Génération automatique d'Ordres de Travail", desc: "Déclenchez et distribuez instantanément des OT (Ordres de Travail) précis pour vos équipes techniques avec listes de consignes." },
      { title: "Suivi des Stocks de Pièces Détachées", desc: "Suivez avec minutie les sorties de magasins de maintenance d'après OT pour supprimer les ruptures préjudiciables de petites pièces critiques." },
      { title: "Application Mobile pour Techniciens", desc: "Permettez à vos techniciens d'ateliers de saisir leurs rapports de déblocage directement sur smartphone ou tablette, même hors connexion." }
    ],
    
    benefits: [
      { title: "Arrêts d'usine limités", desc: "Vos équipements de fabrication sont surveillés de près, augmentant leur durée de vie opérationnelle en service." },
      { title: "Rapports d'activité de maintenance clairs", desc: "Analysez vos indicateurs clés MTTR (temps moyen de réparation) et MTBF (temps moyen entre pannes) par machine." },
      { title: "Gestion de parcs et bâtiments", desc: "Intégrez la maintenance constructive de vos bâtiments ou les révisions réglementaires de vos véhicules d'entreprise." }
    ],
    
    industries: [
      "Industries Manufacturières complexes, Automobile & Minier",
      "Secteur Aéronautique, Sidérurgique et Cimenteries",
      "Établissements Hospitaliers, Hôteliers et Cliniques privées",
      "Entreprises de Transport Public et de Logistique routière",
      "Organismes Publics et Gestionnaires d'Infrastructures sportives"
    ],
    
    integrations: [
      "Connectivité fluide avec l'ERP Sage X3 et Sage 100",
      "Passerelles sécurisées avec des logiciels ERP de stocks",
      "Synchronisation avec des automate capteurs de température"
    ],
    
    faqs: [
      { question: "DimoMaint GMAO peut-il s'installer indépendamment de mon ERP ?", answer: "Absolument. DimoMaint GMAO est une brique logicielle spécialisée et totalement autonome. Néanmoins, pour des besoins de gouvernance d'achats poussés, nos équipes peuvent le synchroniser avec vos progiciels Sage 100 ou Sage X3 existants." },
      { question: "Mes techniciens de maintenance ne sont pas très informatisés, vont-ils l'adopter ?", answer: "C'est la grande force de DimoMaint. Son application mobile a été conçue sur-mesure pour un usage simple de terrain : de gros boutons tactiles, une navigation épurée, un scan code-barres directe pour identifier la machine et la possibilité de dicter les rapports par commande vocale." },
      { question: "Proposez-vous la configuration des gammes de maintenance constructeurs ?", answer: "Oui, nous concevons dans la phase de déploiement l'intégration structurée de vos parcs d'équipements ainsi que l'harmonisation de l'ensemble de vos plans de maintenance préventive." }
    ]
  },
  "eloficash": {
    id: "eloficash",
    name: "Eloficash",
    category: "Gestion Financière",
    tagline: "Sécurisez vos rentrées financières et accélérez le recouvrement de vos créances.",
    badge: "Cash Power",
    path: "/solutions/eloficash",
    
    heroTitle: "Optimisez radicalement vos encaissements et réduisez vos délais de paiement avec Eloficash",
    heroSubtitle: "La plateforme collaborative de recouvrement et de gestion du risque client dédiée aux DAF pour récupérer le cash de factures impayées au Maroc.",
    
    overviewText: "Eloficash est une solution innovante entièrement pensée pour maximiser le recouvrement amiable et structurer la gestion du crédit de vos clients. En centralisant toutes vos fiches clients de gestion, elle permet d'agir de façon proactive avant de subir d'importants retards d'encaissements. Eloficash transforme le recouvrement traditionnel en une action collaborative et gratifiante.",
    targetMarket: "Responsables crédit (Credit Managers), contrôleurs de gestion, directeurs financiers, responsables de comptabilité tiers.",
    stats: [
      { label: "De réduction sur le délai moyen (DSO)", value: "-25%" },
      { label: "Gains sur créances impayées d'affaires", value: "+35%" },
      { label: "Productivité pour vos agents chargés", value: "x3" }
    ],
    
    features: [
      { title: "Workflows de Relance Automatisés", desc: "Programmez des plans de relance progressifs (e-mail, pré-relance amiable, lettre recommandée) d'après le statut de la facture client." },
      { title: "Analyse prédictive du Risque Client", desc: "Suivez le comportement réel de règlement de chacun de vos partenaires financiers pour anticiper et bloquer les risques de litiges." },
      { title: "Portail Collaboratif de Litiges", desc: "Consignez et partagez en temps réel les litiges commerciaux (erreurs de prix, livraisons cassées) avec les vendeurs pour un déblocage rapide." },
      { title: "Tableaux de Pilotage du Cash", desc: "Affichez l'ensemble de vos encours financiers en cours, vos balances âgées paramétrables et vos prévisions d'encaissements futures." }
    ],
    
    benefits: [
      { title: "Trésorerie boostée", desc: "Votre DSO recule de façon concrète, libérant ainsi des excédents financiers nets de liquidités." },
      { title: "Activités de relance amicales", desc: "Préservez d'excellents rapports commerciaux grâce à des relances écrites sur un ton convivial et adapté." },
      { title: "Responsabilités collectives", desc: "Vos commerciaux de terrain sont directement sensibilisés au parfait encaissement de leurs propres ventes." }
    ],
    
    industries: [
      "Distribution Alimentaire, Boissons et Grande Consommation",
      "Fournisseurs d'Équipements et de Matériaux de Construction",
      "Éditeurs de Logiciels et Sociétés de Services Informatiques B2B",
      "Cabinets d'Expertise, d'Audit et de Conseil sur-mesure",
      "Sociétés de Négoce et Transitaires Import/Export"
    ],
    
    integrations: [
      "Liaison complète et bidirectionnelle avec Sage Comptabilité 100 et X3",
      "Connexion Excel simplifiée pour vos analyses",
      "Envoi automatisé par protocoles e-mail et passerelles SMS"
    ],
    
    faqs: [
      { question: "Quels types d'entreprises ont besoin d'Eloficash ?", answer: "Eloficash s'avère particulièrement pertinent pour toutes les structures B2B qui facturent avec des délais de paiement de 30, 60 voire 90 jours et font face à un important encours financier clients à de multiples adresses géographiques." },
      { question: "Peut-on personnaliser les e-mails de relance selon le profil client ?", answer: "Oui, vous pouvez créer des profils types (grands comptes publics, distributeurs de confiance, retardataires réguliers) et configurer des scénarios écrits entièrement distincts pour préserver au mieux la relation d'affaires." },
      { question: "La plateforme est-elle autonome ou dépendante de Sage ?", answer: "Bien qu'elle fonctionne de pair avec votre comptabilité Sage d'office pour ingérer vos balances clients quotidiennement, Eloficash peut parfaitement communiquer avec n'importe quel autre ERP tiers de votre marché." }
    ]
  },
  "factorial": {
    id: "factorial",
    name: "Factorial",
    category: "Ressources Humaines",
    tagline: "Modernisez l'expérience collaborateur et dématérialisez vos processus RH.",
    badge: "Cloud Intuitif",
    path: "/solutions/factorial",
    
    heroTitle: "Unifiez l'ensemble de vos ressources humaines au sein d'un SIRH Cloud de pointe avec Factorial",
    heroSubtitle: "Évaluez vos compétences, automatisez la gestion de temps, dématérialisez les processus de recrutement et libérez vos cadres administratifs au Maroc.",
    
    overviewText: "Factorial est le portail d'Espace Collaborateur (SIRH) par excellence pour les entreprises dynamiques désireuses d'améliorer l'expérience RH de leurs équipes de terrain ou de bureaux. Alliant une ergonomie moderne à l'utilisation d'outils digitaux fluides, elle gère de manière transparente les demandes de congés, les relevés d'horaires, les plans d'apprentissages, les entretiens de carrières et la distribution sécurisée de bulletins de salaires.",
    targetMarket: "Responsables des Ressources Humaines (RH), DSI, dirigeants d'entreprises, collaborateurs de bureaux ou itinérants.",
    stats: [
      { label: "De temps administratif économisé", value: "x5" },
      { label: "D'adoption des processus de carrières", value: "94%" },
      { label: "Archivage et documents sans papier", value: "100%" }
    ],
    
    features: [
      { title: "Portail Collaboratif intuitif", desc: "Donnez à chaque employé un espace personnel crypté pour formuler des congés, consulter ses soldes d'absences ou télécharger ses fiches de paie." },
      { title: "Pointeuse Horaire & Modulation de Temps", desc: "Suivez le temps de présence exact de vos collaborateurs géographiquement distants via un terminal virtuel ou un badge mobile." },
      { title: "Gestion de Carrières & d'Évaluations", desc: "Planifiez des questionnaires d'évaluations individuelles, suivez vos parcours d'objectifs internes et cartographiez vos talents d'avenir." },
      { title: "Système de Recrutement & Onboarding", desc: "Structurez vos comités d'embauches d'affaires, diffusez vos offres d'emploi d'office et animez les journées de bienvenue des nouveaux." }
    ],
    
    benefits: [
      { title: "Expérience moderne soignée", desc: "Valorisez votre image de marque employeur avec des interfaces au design épuré, modernes et simples." },
      { title: "Zéro papier au quotidien", desc: "Bâtissez des archives RH 100% numérisées sécurisant vos contrats, avenants et règlements de l'ONSSA." },
      { title: "Données analytiques claires", desc: "Pilotez des indicateurs de taux de rotation de personnel (turnover) ou d'absentéisme d'un clic." }
    ],
    
    industries: [
      "Agences de communication, Design et Cabinets de Conseil",
      "Éditeurs de Logiciels et Startups technologiques digitales",
      "Réseaux de boutiques commerciales et franchises de distribution",
      "Groupements de Cliniques Médicales et Hôtellerie",
      "Bureaux de recrutement et agences d'externalisation"
    ],
    
    integrations: [
      "Liaison automatique avec votre outil de Paie Marocaine",
      "Synchronisation sécurisée avec l'annuaire de votre entreprise",
      "Rapprofondissement sur application IOS et Android"
    ],
    
    faqs: [
      { question: "La plateforme Factorial s'adapte-t-elle à la législation marocaine ?", answer: "Oui, la structure de congés de fêtes marocaines d'office, l'évaluation du temps de modulation réglementaire hebdomadaire de 44 heures au Maroc et le suivi de dossiers sont configurés sur-mesure pour respecter vos obligations." },
      { question: "Est-ce sécurisé pour mes fichiers de salaires confidentiels ?", answer: "Tout à fait. La sécurité est au centre de Factorial. L'ensemble des documents cryptés personnels (fiches de salaires, informations médicales) n'est visible que de l'administrateur RH référent et de l'employé concerné." },
      { question: "Quels sont les conditions ou tarifs de déploiement ?", answer: "Les modèles de facturation sont basés d'un tarif mensuel très accessible au nombre d'employés réels gérés, s'adaptant fidèlement à votre croissance." }
    ]
  }
};
