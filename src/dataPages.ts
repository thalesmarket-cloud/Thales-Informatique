export interface PageConfig {
  path: string;
  title: string;
  parent: string;
  parentPath?: string;
  tagline: string;
  description: string;
  highlights: string[];
  metric: { value: string; label: string };
  ctaText: string;
  category: string;
}

export const PAGES_REGISTRY: Record<string, PageConfig> = {
  // SOLUTIONSINDEX
  "/solutions": {
    path: "/solutions",
    title: "Nos Solutions Écosystème",
    parent: "Thalès Informatique",
    tagline: "Pilotez votre entreprise avec l'excellence des solutions Sage.",
    description: "De la gestion de production au pilotage financier, nous intégrons les progiciels ERP leaders du marché mondial, configurés sur-mesure pour s'adapter précisément aux réalités réglementaires, douanières et comptables du Royaume du Maroc.",
    highlights: [
      "Processus opérationnels centralisés de bout en bout",
      "Conformité comptable et fiscale locale marocaine garantie",
      "Éditeurs de tableaux de bord décisionnels en temps réel"
    ],
    metric: { value: "5", label: "Logiciels Majeurs" },
    ctaText: "Découvrir la gamme ERP",
    category: "Solutions"
  },
  "/solutions/sage-x3": {
    path: "/solutions/sage-x3",
    title: "Sage X3",
    parent: "Solutions ERP",
    parentPath: "/solutions",
    tagline: "L'ERP industriel d'envergure pour ETI et grands groupes.",
    description: "Une solution complète et modulaire de planification des ressources de l'entreprise (ERP) pour centraliser vos données de production (GPAO), d'achats, d'inventaires logistiques multi-dépôts (SMC) et de gestion multi-sociétés.",
    highlights: [
      "Suivi fin du coût de revient et de la nomenclature industrielle",
      "Planification des besoins en composants (MRP) et ordonnancement",
      "Multi-pays, multi-devises et conforme aux d'import/export"
    ],
    metric: { value: "15d", label: "Clôtures réduites de moitié" },
    ctaText: "Échanger avec un expert X3",
    category: "Solutions"
  },
  "/solutions/sage-100": {
    path: "/solutions/sage-100",
    title: "Sage 100",
    parent: "Solutions ERP",
    parentPath: "/solutions",
    tagline: "Le progiciel connecté et collaboratif idéal pour PME.",
    description: "Intégrez en toute simplicité votre chaîne commerciale (achats, stocks, ventes) avec vos reportings financiers et votre comptabilité générale globale. Parfaitement taillé pour les PME marocaines cherchant rapidité d'implémentation et efficacité opérationnelle.",
    highlights: [
      "Suivi de facturation, devis et traçabilité de stock en direct",
      "Automatisation complète des rapprochements et lettrages bancaires",
      "Paramétrage métier sur-mesure adapté aux équipes locales"
    ],
    metric: { value: "100%", label: "Devis vers de facturation" },
    ctaText: "Démonstration Sage 100",
    category: "Solutions"
  },
  "/solutions/sage-paie-rh": {
    path: "/solutions/sage-paie-rh",
    title: "Sage Paie & RH",
    parent: "Gestion RH",
    parentPath: "/solutions",
    tagline: "Production des paies 100% conforme à la législation marocaine.",
    description: "Assurez la sérénité réglementaire de votre direction des ressources humaines. Automatisez le calcul de l'IR, les cotisations CNSS (génération de fichiers Damancom), la AMO, l'IGR, et la CIMR dans un environnement hautement sécurisé.",
    highlights: [
      "Télédéclarations fiscales marocaines intégrées et conformes",
      "Portail salarié collaboratif pour la pose de congés et bulletins",
      "Gestion d'évaluation de carrières et d'entretiens annuels"
    ],
    metric: { value: "0", label: "Retard de déclaration" },
    ctaText: "Analyser ma paie légale",
    category: "Solutions"
  },
  "/solutions/sage-crm": {
    path: "/solutions/sage-crm",
    title: "Sage CRM",
    parent: "Relation Client",
    parentPath: "/solutions",
    tagline: "Optimisez votre pipeline de ventes et offrez un SAV premium.",
    description: "Fidélisez votre clientèle marocaine grâce à une vision client à 360°. Suivez l'activité de vos équipes commerciales itinérantes sur le terrain, automatisez vos campagnes marketing stratégiques, et traitez avec rigueur vos réclamations clients.",
    highlights: [
      "Tableaux de bord d'analyse du pipe commercial en temps réel",
      "Couplage complet avec votre progiciel de facturation Sage 100 / X3",
      "Application mobile de terrain disponible hors connexion"
    ],
    metric: { value: "35%", label: "Gain en prospection" },
    ctaText: "Démo relation client",
    category: "Solutions"
  },
  "/solutions/sage-bi-reporting": {
    path: "/solutions/sage-bi-reporting",
    title: "Sage BI Reporting",
    parent: "Pilotage & Reporting",
    parentPath: "/solutions",
    tagline: "L'intelligence décisionnelle sur Excel reliée à l'ERP.",
    description: "Évitez la ressaisie laborieuse de fichiers d'activité. Sage BI interroge en direct vos progiciels Sage pour éditer des rapports de rentabilité financière et commerciale esthétiques, d'un seul clic depuis votre interface Excel habituelle.",
    highlights: [
      "Interrogation directe des flux de comptabilité à la seconde près",
      "Modèles de rapports prêts à l'usage développés par Thalès",
      "Envois automatiques programmés par e-mail en fin de semaine"
    ],
    metric: { value: "3h", label: "Production de bilan hebdomadaire" },
    ctaText: "Recevoir un catalogue BI",
    category: "Solutions"
  },

  // SERVICES INDEX
  "/services": {
    path: "/services",
    title: "Nos Services d'Accompagnement",
    parent: "Thalès Informatique",
    tagline: "Garantir le succès technique, méthodologique et organisationnel.",
    description: "Le déploiement d'un ERP moderne ne relève pas de la simple installation informatique : c'est un projet de gouvernance stratégique fondamentale. Nos ingénieurs vous guident de l'avant-projet à l'assistance technique quotidienne sous SLA.",
    highlights: [
      "Experts agréés certifiés par l'éditeur Sage",
      "Méthodologie d'intégration agile éprouvée",
      "Programmes de transfert de compétences intensifs"
    ],
    metric: { value: "30+", label: "Ans d'expertise" },
    ctaText: "Planifier un audit",
    category: "Services"
  },
  "/services/integration-erp": {
    path: "/services/integration-erp",
    title: "Intégration ERP",
    parent: "Services d'Intégration",
    parentPath: "/services",
    tagline: "Paramétrages et intégrations sur-mesure de l'écosystème Sage.",
    description: "Nous façonnons votre progiciel pour qu'il s'interface parfaitement à vos flux métiers. Rédaction des connecteurs API d'applications tierces, ajustement des champs de bases SQL, paramétrage de workflows de validation et déploiement de modèles de documents.",
    highlights: [
      "Développements spécifiques et connecteurs logiciels ERP",
      "Migrations sereines de toutes vos données historiques",
      "Tests d'étanchéité et de charge avant mise en production active"
    ],
    metric: { value: "1000+", label: "Projets accomplis" },
    ctaText: "Étudier mon architecture",
    category: "Services"
  },
  "/services/audit-conseil": {
    path: "/services/audit-conseil",
    title: "Audit & Conseil",
    parent: "Services Stratégiques",
    parentPath: "/services",
    tagline: "Co-concevoir votre blueprint de gestion et optimiser votre schéma directeur.",
    description: "Avant de coder, nous comprenons vos défis. Nos consultants seniors analysent vos flux logistiques, financiers et administratifs pour préconiser la meilleure infrastructure technologique, réduisant drastiquement le coût total de possession (TCO).",
    highlights: [
      "Conception et rédaction de spécifications techniques exhaustives",
      "Optimisation de la rentabilité opérationnelle de vos flux actuels",
      "Élaboration d'un calendrier et d'un budget d'investissement transparent"
    ],
    metric: { value: "2s", label: "Pour cartographier vos processus" },
    ctaText: "Réserver un atelier",
    category: "Services"
  },
  "/services/formation": {
    path: "/services/formation",
    title: "Formation Utilisateurs",
    parent: "Services de Transfert",
    parentPath: "/services",
    tagline: "Maximisez la prise en main logicielle de vos équipes.",
    description: "Un ERP sur-mesure n'a de valeur que s'il est pleinement maîtrisé. Nous organisons des cursus intensifs pour référents et utilisateurs opérationnels finaux, documentés à l'aide de supports d'apprentissage dédiés basés sur vos cas réels.",
    highlights: [
      "Sessions pédagogiques ciblées par service fonctionnel",
      "Fiches récapitulatives et manuels fournis après formation",
      "Suivi post-intégration pour identifier d'éventuels freins d'usage"
    ],
    metric: { value: "98%", label: "Adoption utilisateur constatée" },
    ctaText: "Découvrir nos cursus",
    category: "Services"
  },
  "/services/support-maintenance": {
    path: "/services/support-maintenance",
    title: "Support & Maintenance",
    parent: "Assistance Technique",
    parentPath: "/services",
    tagline: "Assistance de haut niveau par une hotline réactive marocaine.",
    description: "Un service de maintenance corrective et évolutive (TMA) disponible en continu. Nous veillons à la haute disponibilité de vos serveurs de base de données, à l'application rigoureuse des correctifs de l'éditeur Sage et aux mises à jour de sécurité.",
    highlights: [
      "SLA rigoureux avec délais d'intervention contractuels garantis",
      "Conseils personnalisés pour l'optimisation continue de l'ERP",
      "Interventions sur site et téléassistance immédiates"
    ],
    metric: { value: "<4h", label: "Délai de résolution garanti" },
    ctaText: "Découvrir nos contrats SLA",
    category: "Services"
  },
  "/services/assistance-utilisateurs": {
    path: "/services/assistance-utilisateurs",
    title: "Assistance Utilisateurs",
    parent: "Assistance Technique",
    parentPath: "/services",
    tagline: "Accompagnement quotidien de vos collaborateurs en cas de blocage.",
    description: "Erreur de facturation ? Blocage CNSS ? Problème d'édition d'une clôture de paie urgente ? Nos ingénieurs support débloquent instantanément vos équipes à distance par prise de contrôle sécurisée, évitant toute anomalie de production.",
    highlights: [
      "Hotline métier disponible par appel et plateforme de tickets",
      "Experts dédiés pour les urgences comptables et déclarations",
      "Aide au reporting financier et aux éditions de synthèses"
    ],
    metric: { value: "98.5%", label: "Satisfaction de résolution" },
    ctaText: "Demander une assistance",
    category: "Services"
  },

  // SECTEURS'ACTIVITY PART
  "/secteurs": {
    path: "/secteurs",
    title: "Secteurs d'Activité",
    parent: "Thalès Informatique",
    tagline: "Des verticaux ERP métiers forgés sur-mesure pour votre industrie.",
    description: "Chaque secteur comporte des complexités intrinsèques. Nous developpons des configurations et des terminaux d'intégration Sage configurés spécifiquement pour répondre à vos cadres douaniers, logistiques et syndicaux au Maroc.",
    highlights: [
      "Expertise métier spécifique à chaque verticale marocaine",
      "Intégrations de terminaux codes-barres et d'outils industriels",
      "Respect des normes réglementaires ONSSA, douanes et fisc"
    ],
    metric: { value: "8", label: "Filières Maîtresses" },
    ctaText: "Sélectionner mon secteur",
    category: "Secteurs"
  },
  "/secteurs/industrie": {
    path: "/secteurs/industrie",
    title: "Secteurs de l'Industrie",
    parent: "Secteurs d'Activité",
    parentPath: "/secteurs",
    tagline: "Pilotez de bout en bout vos usines et vos chaînes de production GPAO.",
    description: "Fabrication de métaux, plasturgie, textile ou composants. Optimisez l'ordonnancement de vos lignes, calculez le coût théorique vs réel de fabrication, et gérez vos priorités logistiques d'approvisionnement en flux tendu pour préserver vos marges.",
    highlights: [
      "Nomenclatures industrielles multiniveaux et routages machines",
      "Calcul des besoins nets en matières premières (MRP I et II)",
      "Traçabilité complète par lots de fabrication, numéros de série"
    ],
    metric: { value: "25%", label: "Réduction des pertes matières" },
    ctaText: "Optimiser ma production",
    category: "Secteurs"
  },
  "/secteurs/negoce-distribution": {
    path: "/secteurs/negoce-distribution",
    title: "Négoce & Distribution",
    parent: "Secteurs d'Activité",
    parentPath: "/secteurs",
    tagline: "Suivi omnicanal de vos importations et logistique multi-entrepôts.",
    description: "Centralisez vos flux d'achats nationaux ou internationaux. Suivez vos approvisionnements douaniers, l'évaluation de vos frais d'approche sur marchandises importées, et automatisez le réapprovisionnement de vos points de vente en direct au Maroc.",
    highlights: [
      "Automatisation des prix de revient avec frais d'approche intégrés",
      "Gestion multi-stocks, transferts inter-dépôts et inventaires",
      "Génération assistée de bons de préparation d'expéditions"
    ],
    metric: { value: "99%", label: "Fiabilité de l'inventaire" },
    ctaText: "Démo logistique distribution",
    category: "Secteurs"
  },
  "/secteurs/services": {
    path: "/secteurs/services",
    title: "Secteurs des Services",
    parent: "Secteurs d'Activité",
    parentPath: "/secteurs",
    tagline: "Rentabilisez vos portefeuilles de projets d'ingénierie et d'affaires.",
    description: "Parfaitement taillé pour les cabinets d'études, intégrateurs, et agences de services. Assurez le suivi précis des heures saisies par vos consultants, la facturation à l'avancement de vos contrats et le calcul de rentabilité par jalon clé.",
    highlights: [
      "Saisie des temps ergonomique interconnectée avec l'ERP",
      "Édition analytique de rentabilité par chef de projet et client",
      "Gestion d'engagements budgétaires et contrats récurrents"
    ],
    metric: { value: "15%", label: "Hausse d'heures facturées" },
    ctaText: "Analyser mes taux de charge",
    category: "Secteurs"
  },
  "/secteurs/btp": {
    path: "/secteurs/btp",
    title: "Secteurs du BTP",
    parent: "Secteurs d'Activité",
    parentPath: "/secteurs",
    tagline: "Maîtrisez vos déboursés de chantiers et approvisionnements.",
    description: "Pour les structures marocaines de construction et ingénierie d'infrastructures. Suivez vos engagements par chantier, l'évaluation d'avancement des sous-traitants, les consommations de béton/fer et la facturation selon des situations d'avancement.",
    highlights: [
      "Suivi analytique ultra-précis par code chantier et lots d'ouvrages",
      "Contrôle budgétaire strict (Prévu vs Consommé en temps réel)",
      "Facturation de situations de travaux avec retenues de garantie"
    ],
    metric: { value: "30%", label: "Contrôle budgétaire optimisé" },
    ctaText: "Maîtriser mon déboursé de chantier",
    category: "Secteurs"
  },
  "/secteurs/agroalimentaire": {
    path: "/secteurs/agroalimentaire",
    title: "Secteur de l'Agroalimentaire",
    parent: "Secteurs d'Activité",
    parentPath: "/secteurs",
    tagline: "Sécurité sanitaire ONSSA, traçabilité froide et logistique de fraîcheur.",
    description: "Pour les producteurs et transformateurs agricoles de renom au Maroc. Assurez le strict respect des protocoles HACCP, gérez efficacement la DLC/DLUO de vos produits frais, et intégrez vos balances industrielles de pesée en bout de ligne.",
    highlights: [
      "Traçabilité amont/aval totale en moins de 5 secondes",
      "Saisie et contrôle qualité des températures par capteurs intégrés",
      "Gestion des ristournes de la grande distribution alimentaire"
    ],
    metric: { value: "0", label: "Anomalie réglementaire" },
    ctaText: "Sécuriser mes chaînes alimentaires",
    category: "Secteurs"
  },

  // REFERENCES
  "/references": {
    path: "/references",
    title: "Nos Références Clients",
    parent: "Thalès Informatique",
    tagline: "Rejoignez plus de 500 fleurons industriels et tertiaires.",
    description: "Casablanca, Tanger, Rabat, Agadir ou Oujda : nous sommes le partenaire de référence de centaines d'entreprises performantes au Maroc qui font le choix de la stabilité financière, de KPIs robustes et de la conformité sociale.",
    highlights: [
      "Fleurons de l'agro-industrie et de la logistique",
      "Des partenariats de long terme fondés sur l'efficience",
      "Partenaire Platinum certifié par Sage au Maroc"
    ],
    metric: { value: "30", label: "Années de confiance" },
    ctaText: "Découvrir toutes les études",
    category: "Références"
  },
  "/references/clients": {
    path: "/references/clients",
    title: "Nos Clients Partenaires",
    parent: "Références",
    parentPath: "/references",
    tagline: "Des entreprises leaders dans leur secteur au Royaume du Maroc.",
    description: "Explorez la mosaïque de nos clients fidèles qui s'appuient sur l'ERP Sage personnalisé par Thalès Informatique pour propulser leur comptabilité analytique, leurs usines et leurs calculs complexes de paie.",
    highlights: [
      "Plus de 500 PME et Grandes Entreprises accompagnées activement",
      "Taux de rétention technique supérieur à 98% par an",
      "Expertise reconnue par les conseils d'administration et DAF"
    ],
    metric: { value: "500+", label: "Clients Actifs au Maroc" },
    ctaText: "Devenir client partenaire",
    category: "Références"
  },
  "/references/etudes-de-cas": {
    path: "/references/etudes-de-cas",
    title: "Études de Cas Logicielles",
    parent: "Références",
    parentPath: "/references",
    tagline: "Découvrez concrètement comment nous optimisons vos rentabilités.",
    description: "Découvrez des analyses documentées d'implémentation de Sage X3 et Sage 100 chez nos clients. De la résolution de stocks complexes à l'accélération des temps d'approvisionnement logistique en environnement portuaire ou douanier.",
    highlights: [
      "Cas réels articulés autour d'objectifs, méthodologies et gains",
      "Mesures quantifiables des gains financiers observés",
      "Bonnes pratiques tirées de la réalité industrielle locale"
    ],
    metric: { value: "3.5x", label: "Retour sur investissement moyen" },
    ctaText: "Obtenir les études complètes",
    category: "Références"
  },
  "/references/temoignages": {
    path: "/references/temoignages",
    title: "Témoignages de Décideurs",
    parent: "Références",
    parentPath: "/references",
    tagline: "Ce que disent de nous les DAF, DG et Directeurs d'usines.",
    description: "Lisez les retours d'expériences objectifs des directeurs de Souss Agro, Medina Pack, Atlas Transports et Maroc Métal. Une preuve par l'exemple de notre accompagnement stratégique, méthodologique, réactif et éthique.",
    highlights: [
      "Avis authentiques signés par des dirigeants d'affaires marocains",
      "Éloges unanimes sur le professionnalisme de notre support 24/7",
      "Témoignages de réussites sur des fusions de systèmes d'informations"
    ],
    metric: { value: "4.9/5", label: "Note de satisfaction globale" },
    ctaText: "Échanger avec un client référence",
    category: "Références"
  },

  // RESSOURCES
  "/ressources": {
    path: "/ressources",
    title: "Ressources Décisionnelles",
    parent: "Thalès Informatique",
    tagline: "Guides fiscaux, actualités réglementaires et bonnes pratiques.",
    description: "Découvrez notre centre documentaire dédié à l'amélioration de la gestion d'entreprise. Vous y trouverez des analyses de la loi de finance, des comparatifs de gestion ERP Sage et des livres blancs thématiques.",
    highlights: [
      "Livres blancs et dossiers de synthèses complets",
      "Contenu entièrement actualisé par nos consultants métiers",
      "Guides d'aide à la décision pour PME et groupes"
    ],
    metric: { value: "12", label: "Guides Téléchargeables" },
    ctaText: "Accéder à la bibliothèque",
    category: "Ressources"
  },
  "/blog": {
    path: "/blog",
    title: "Blog Décisionnel",
    parent: "Ressources",
    parentPath: "/ressources",
    tagline: "Articles de fonds sur l'informatique de gestion et l'optimisation.",
    description: "Notre regard d'expert sur l'évolution technologique au Maroc. Découvrez comment optimiser vos balances de trésorerie interne, sécuriser vos fiches articles, et guider vos collaborateurs vers une saisie efficace.",
    highlights: [
      "Articles rédigés par les consultants ingénieurs Thalès",
      "Analyses juridico-financières exclusives pour le marché local",
      "Astuces pour déceler les gaspillages de matières en industrie"
    ],
    metric: { value: "3", label: "Nouveaux articles par mois" },
    ctaText: "Parcourir le blog",
    category: "Ressources"
  },
  "/guides-erp": {
    path: "/guides-erp",
    title: "Guides Pratiques ERP",
    parent: "Ressources",
    parentPath: "/ressources",
    tagline: "Manuels méthodologiques téléchargeables gratuitement pour vos projets.",
    description: "Comment structurer un cahier des charges d'ERP ? Comment simuler l'IR marocain sur Excel ? Téléchargez nos guides d'aide pas-à-pas rédigés pour assurer la sécurité et le succès budgétaire de vos chantiers numériques.",
    highlights: [
      "Spécifications types de cahier des charges prêtes à l'emploi",
      "Fiches récapitulatives sur les exigences de la facturation",
      "Méthodes pour calculer le taux de rendement global (TRG)"
    ],
    metric: { value: "2500+", label: "Téléchargements de documentation" },
    ctaText: "Télécharger un guide d'audit",
    category: "Ressources"
  },
  "/actualites": {
    path: "/actualites",
    title: "Actualités Thalès & Sage",
    parent: "Ressources",
    parentPath: "/ressources",
    tagline: "L'actualité de l'écosystème Sage et des évolutions de lois fiscales.",
    description: "Suivez en direct l'intégration des nouvelles législations CNSS et IR, le calendrier des webinaires méthodologiques de Thalès, et l'actualité des nouvelles versions logicielles publiées sur l'écosystème Elite Sage.",
    highlights: [
      "Alertes immédiates sur les évolutions légales ou douanières au Maroc",
      "Annonces exclusives de l'éditeur officiel Sage",
      "Agenda de nos prochains ateliers de démonstration dans le Royaume"
    ],
    metric: { value: "100%", label: "De conformité légale CNSS/AMO" },
    ctaText: "S'abonner aux alertes de veille",
    category: "Ressources"
  },
  "/faq": {
    path: "/faq",
    title: "Foire Aux Questions (FAQ)",
    parent: "Ressources",
    parentPath: "/ressources",
    tagline: "Réponses claires et directes de nos ingénieurs consultants certifiés.",
    description: "Toutes les interrogations techniques des directions informatiques, financières et DRH marocaines expliquées de façon accessible par notre équipe d'experts.",
    highlights: [
      "Quel est le coût d'acquisition moyen d'un progiciel Sage au Maroc ?",
      "Quelle est la durée d'implémentation moyenne observée ?",
      "Comment Thalès assure la reprise des anciennes écritures de paie ?"
    ],
    metric: { value: "24/7", label: "Aide documentaire en ligne" },
    ctaText: "Consulter la base de connaissances",
    category: "Ressources"
  },

  // CONTACT
  "/contact": {
    path: "/contact",
    title: "Nous Contacter",
    parent: "Thalès Informatique",
    tagline: "Prenons contact pour concevoir votre projet d'avenir.",
    description: "Vous songez à moderniser votre ERP actuel ? Vous souhaitez un transfert de compétence ou une assistance sous SLA sur vos outils Sage de gestion ou de paie ? Nos experts basés à Casablanca, Tanger et Agadir répondent sous 4h.",
    highlights: [
      "Analyses d'opportunité informatique gratuites et sans engagement",
      "Interlocuteurs francophones qualifiés certifiés Elite Sage",
      "Bureaux physiques d'intervention directe sous contrat SLA"
    ],
    metric: { value: "<4h", label: "Temps moyen de réponse" },
    ctaText: "Déposer mon plan de projet",
    category: "Contact"
  }
};
