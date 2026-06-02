export interface MetierData {
  id: string;
  path: string;
  title: string;
  category: "Finance" | "Ressources Humaines" | "Opérations & ERP";
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  challenges: Array<{ title: string; desc: string }>;
  recommendedSolutions: Array<{
    title: string;
    desc: string;
    path: string;
    badge: string;
  }>;
  benefits: Array<{ title: string; desc: string }>;
  customerSuccess: {
    clientName: string;
    sector: string;
    quote: string;
    result: string;
  };
  faqs: Array<{ question: string; answer: string }>;
}

export const METIERS_DATA: Record<string, MetierData> = {
  "comptabilite-finance": {
    id: "comptabilite-finance",
    path: "/metiers/comptabilite-finance",
    title: "Comptabilité & Finance",
    category: "Finance",
    tagline: "Automatisez vos écritures et optimisez vos audits financiers.",
    metaTitle: "Comptabilité & Finance - Intégrateur Sage Maroc - Thalès Informatique",
    metaDescription: "Gérez votre comptabilité générale, analytique et budgétaire en parfaite conformité avec la réglementation fiscale marocaine grâce aux solutions Sage.",
    shortDescription: "Gérez votre comptabilité générale, analytique et budgétaire en totale conformité avec la charte fiscale marocaine.",
    challenges: [
      { title: "Saisie et double-saisie manuelles chronophages", desc: "La perte de temps liée à la saisie manuelle de milliers de factures et l'absence d'automatisation des écritures d'achats et ventes." },
      { title: "Délais longs de clôture financière", desc: "La consolidation manuelle sous Excel retarde la production de balances de fin de mois cruciales pour les décisions de la direction générale." },
      { title: "Rapprochement bancaire laborieux", desc: "Le pointage manuel de multiples comptes bancaires en devises et en dirhams augmente le risque d'erreurs d'écritures pour le DAF." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 Comptabilité", desc: "Idéal pour piloter l'activité financière des PME marocaines de façon agile et connectée.", path: "/solutions/sage-100", badge: "Recommandé PME" },
      { title: "Sage X3 Finance", desc: "Une couverture fonctionnelle absolue pour les ETI et groupes multisites industriels.", path: "/solutions/sage-x3", badge: "Recommandé Grande Entreprise" }
    ],
    benefits: [
      { title: "Saisie intelligente guidée", desc: "Vos écritures de ventes et d'achats se génèrent automatiquement à partir des flux de facturation commerciale." },
      { title: "Rapprochement bancaire automatisé", desc: "Intégrez vos extraits bancaires électroniques marocains et laissez le progiciel lettrer plus de 90% des flux d'office." },
      { title: "Analyses de gestion multidimensionnelles", desc: "Définissez des sections analytiques (par service, projet ou famille d'article) pour analyser précisément la rentabilité de vos marges." }
    ],
    customerSuccess: {
      clientName: "Souss Agro S.A.",
      sector: "Agroalimentaire - Agadir",
      quote: "L'automatisation comptable via Sage 100 a réduit nos temps de lettrage de 70% et nous permet de sortir des bilans fiables chaque vendredi.",
      result: "-70% de temps de saisie"
    },
    faqs: [
      { question: "La solution intègre-t-elle la législation fiscale marocaine ?", answer: "Oui, toutes nos configurations intègrent nativement le plan comptable marocain, la gestion de la TVA sur les encaissements ou les débits, et le calcul de l'IR progressif." },
      { question: "Est-il possible de migrer notre ancien historique comptable ?", answer: "Parfaitement. Thalès Informatique réalise une extraction et une restructuration complète de vos balances et écritures historiques de vos anciens outils vers Sage." },
      { question: "Combien d'utilisateurs simultanés peuvent se connecter ?", answer: "Cela varie d'un utilisateur unique sur Sage 100 à des centaines d'utilisateurs concurrents avec restrictions de droits avancées sur Sage X3." }
    ]
  },
  "etats-comptables-fiscaux": {
    id: "etats-comptables-fiscaux",
    path: "/metiers/etats-comptables-fiscaux",
    title: "États Comptables & Fiscaux",
    category: "Finance",
    tagline: "Générez votre liasse fiscale marocaine de manière automatisée.",
    metaTitle: "États Comptables & Fiscaux - Télédéclaration EDI Maroc - Thalès Informatique",
    metaDescription: "Automatisez la production de votre liasse fiscale marocaine et simplifiez vos télédéclarations EDI sur le portail Simpl-IS de la DGI.",
    shortDescription: "Générez et télétransmettez votre liasse fiscale certifiée conforme aux exigences EDI du portail Simpl-IS de la DGI.",
    challenges: [
      { title: "Génération complexe de la liasse fiscale marocaine", desc: "Produire manuellement le format XML structuré exigé par la DGI comporte d'immenses risques de rejets ou d'erreurs matérielles." },
      { title: "Changements constants de la Loi de Finances", desc: "Se conformer chaque année aux nouveautés fiscales marocaines (nouvelles tranches d'impôts, taxation à la source) sans perturber l'activité." },
      { title: "Validation et concordance des chiffres", desc: "Vérifier la cohérence absolue entre la balance des comptes, le tableau de passage et les annexes légales exigées." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 États Comptables et Fiscaux (ECF)", desc: "Générez, contrôlez et transmettez votre liasse fiscale en format XML EDI en quelques clics.", path: "/solutions/sage-100", badge: "Conformité DGI" }
    ],
    benefits: [
      { title: "Télédéclaration EDI immédiate", desc: "Exportez les fichiers XML certifiés conformes pour les injecter d'un geste sur la plateforme fiscale marocaine." },
      { title: "Mises à jour fiscales automatiques", desc: "Les formulaires de liasses se conforment d'office aux versions requises dans la Loi de Finances la plus récente." },
      { title: "Détection des anomalies avant envoi", desc: "Le progiciel intègre des clés de hachage de cohérence qui bloquent toute anomalie avant la transmission légale." }
    ],
    customerSuccess: {
      clientName: "Atlas Transports",
      sector: "Logistique - Casablanca",
      quote: "Depuis l'implémentation de la brique Sage ECF par Thalès, nos déclarations de liasses fiscales se font en moins de 2 heures sans aucun incident de rejet.",
      result: "100% de conformité EDI"
    },
    faqs: [
      { question: "La liasse fiscale intègre-t-elle tous les tableaux réglementaires ?", answer: "Oui, l'ensemble des 18 tableaux obligatoires en comptabilité marocaine (actif, passif, CPC, passagers, etc.) est géré et validé automatiquement." },
      { question: "Puis-je l'utiliser avec une comptabilité externe ?", answer: "Oui. Bien qu'elle soit plus efficace reliée directement à la Comptabilité Sage, la brique ECF peut importer des balances issues d'autres progiciels." },
      { question: "Quelle assistance proposez-vous en période de clôture ?", answer: "Nous offrons un support prioritaire aux DAF durant les périodes de dépôts de liasses pour assurer un envoi fluide et sans stress." }
    ]
  },
  "expertise-comptable": {
    id: "expertise-comptable",
    path: "/metiers/expertise-comptable",
    title: "Expertise Comptable",
    category: "Finance",
    tagline: "Des outils collaboratifs haut de gamme pour les cabinets de conseil complexes.",
    metaTitle: "Solutions pour Cabinets d'Expertise Comptable au Maroc - Thalès Informatique",
    metaDescription: "Augmentez la productivité de vos collaborateurs, collaborez avec vos clients et gérez votre portefeuille de dossiers sous Sage.",
    shortDescription: "Gérez efficacement de multiples dossiers clients, optimisez vos saisies de balances et fournissez des rapports analytiques de haut vol.",
    challenges: [
      { title: "Gestion hétérogène des portefeuilles clients", desc: "Agréger des dossiers provenant d'entreprises aux flux très diversifiés ralentit la cadence opérationnelle des collaborateurs du cabinet." },
      { title: "Faible collaboration avec les clients", desc: "La récupération tardive ou désorganisée des pièces comptables papier provoque des goulets d'étranglement de fin d'année." },
      { title: "Rétention et évolution des collaborateurs", desc: "Les collaborateurs de cabinets s'épuisent sur de la saisie basique répétitive au détriment de l'analyse et du conseil stratégique." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 Multi-Dossiers", desc: "Une configuration pensée spécifiquement pour les experts-comptables et cabinets d'audit au Maroc.", path: "/solutions/sage-100", badge: "Cabinet & Conseil" }
    ],
    benefits: [
      { title: "Environnement multi-sociétés fluide", desc: "Basculez d'un dossier client à un autre en une seconde au sein d'une interface robuste préservant la confidentialité." },
      { title: "Saisie au kilomètre ultra-rapide", desc: "Des masques de saisie optimisés au clavier conçus pour enregistrer d'importants volumes d'écritures en un temps record." },
      { title: "Rapports d'analyse prêts à imprimer", desc: "Éditez des bilans, CPC et tableaux décisionnels esthétiques pour valoriser vos restitutions devant vos clients." }
    ],
    customerSuccess: {
      clientName: "Audit & Conseil Maghreb",
      sector: "Cabinet d'Expertise - Rabat",
      quote: "Thalès Informatique a équipé nos 30 collaborateurs avec Sage 100. Nous avons gagné un temps précieux sur la saisie courante pour nous concentrer sur la fiscalité.",
      result: "+40% de productivité interne"
    },
    faqs: [
      { question: "La solution supporte-t-elle de nombreux dossiers ?", answer: "Absolument. Il n'y a pas de limite technique quant au nombre de bases de données de dossiers clients gérées sous l'environnement multi-sociétés." },
      { question: "Puis-je donner un accès distant partagé à mes clients ?", answer: "Oui, un portail cloud sécurisé ou une liaison serveurs permet un travail collaboratif en temps réel entre le cabinet et l'entreprise cliente." },
      { question: "Gérez-vous la paie multi-clients des cabinets ?", answer: "Tout à fait, nous intégrons un module de gestion collective des paies pour les cabinets gérant l'externalisation RH de leurs clients." }
    ]
  },
  "immobilisations": {
    id: "immobilisations",
    path: "/metiers/immobilisations",
    title: "Immobilisations",
    category: "Finance",
    tagline: "Pilotez le cycle de vie de vos actifs et vos plans d'amortissement.",
    metaTitle: "Gestion des Immobilisations Sage Maroc - Thalès Informatique",
    metaDescription: "Prenez le contrôle de vos investissements, calculez vos amortissements linéaires ou dégressifs et gérez vos inventaires d'actifs physiques.",
    shortDescription: "Suivez avec précision vos actifs matériels et immatériels, calculez les tableaux d'amortissement légaux et automatisez vos dotations.",
    challenges: [
      { title: "Tableaux d'amortissement erronés sous Excel", desc: "Saisir manuellement des centaines de lignes d'actifs physiques expose le DAF à d'importants écarts de dotations comptables." },
      { title: "Incohérence entre inventaire physique et comptable", desc: "L'impossibilité d'identifier l'état d'usure, la localisation géographique ou la mise au rebut d'une machine ou d'un véhicule de l'entreprise." },
      { title: "Calculs légaux complexes hors normes", desc: "Gérer différentes règles d'amortissement (fiscale, économique ou IFRS) sur les mêmes actifs d'une filiale." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 Immobilisations", desc: "Gérez sereinement vos investissements et automatisez le passage de vos écritures de dotations annuelles.", path: "/solutions/sage-100", badge: "Comptabilité des Actifs" }
    ],
    benefits: [
      { title: "Génération automatique des dotations", desc: "Le plan d'amortissement se calcule instantanément lors de l'intégration de la facture d'achat de l'actif." },
      { title: "Inventaire physique par code-barres", desc: "Interconnectez vos immobilisations avec nos solutions de scan mobile pour réaliser des inventaires physiques fiables." },
      { title: "Traçabilité des cessions et rebuts", desc: "Enregistrez précisément les plus-values ou moins-values de cessions d'actifs immobiliers d'un seul clic." }
    ],
    customerSuccess: {
      clientName: "Medina Pack S.A.",
      sector: "Emballages Industriels - Kénitra",
      quote: "L'automatisation de nos 2500 lignes d'équipements industriels sous Sage Référentiel a éliminé les écarts de dotation de fin d'année.",
      result: "Écarts de dotation réduits à 0"
    },
    faqs: [
      { question: "Tous les modes d'amortissement sont-ils disponibles ?", answer: "Absolument. La solution gère l'amortissement linéaire, dégressif, exceptionnel et même les spécificités d'amortissement dérogatoire." },
      { question: "La solution s'intègre-t-elle avec la comptabilité générale ?", answer: "Oui, la génération de vos écritures de dotations aux amortissements se déverse automatiquement en comptabilité générale d'un simple clic." },
      { question: "Peut-on localiser géographiquement les actifs ?", answer: "Oui, vous pouvez affecter des biens ou actifs à des bureaux, succursales régionales, véhicules ou collaborateurs précis." }
    ]
  },
  "tresorerie": {
    id: "tresorerie",
    path: "/metiers/tresorerie",
    title: "Trésorerie",
    category: "Finance",
    tagline: "Pilotez vos flux financiers à court et moyen terme en temps réel.",
    metaTitle: "Gestion de Trésorerie Proactive au Maroc - Thalès Informatique",
    metaDescription: "Anticipez et prévenez les risques de liquidités, simulez vos budgets financiers et contrôlez vos frais bancaires de manière autonome.",
    shortDescription: "Anticipez vos besoins de liquidités, simulez vos scénarios de financement et réduisez vos frais bancaires.",
    challenges: [
      { title: "Manque de visibilité sur le solde futur", desc: "Ne pas pouvoir anticiper l'état des liquidités à 30 ou 60 jours force l'entreprise à réagir dans l'urgence face aux échéances." },
      { title: "Frais financiers et agios non contrôlés", desc: "L'absence d'outils de vérification ou de négociation des dates de valeur et conditions appliquées par les agences bancaires." },
      { title: "Saisie fragmentée des prévisions", desc: "Compiler manuellement des flux de prévisions d'achats, fiches de paies et rentrées de ventes dans de multiples onglets Excel." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 Trésorerie", desc: "Le complément idéal de votre comptabilité pour anticiper vos besoins financiers et négocier vos lignes de crédit.", path: "/solutions/sage-100", badge: "Anticipation des Liquidités" }
    ],
    benefits: [
      { title: "Visualisation des flux prévisionnels", desc: "Affichez sous forme de graphique dynamique l'évolution future estimée de vos liquidités banque par banque." },
      { title: "Contrôle automatique des échelles d'intérêts", desc: "Détectez d'éventuels écarts de taux, de commissions ou de dates de valeur appliqués de façon anormale par vos partenaires bancaires." },
      { title: "Simulation de scénarios de financement", desc: "Simulez l'impact d'un investissement ou d'un retard de règlement client sur votre trésorerie globale avant d'agir." }
    ],
    customerSuccess: {
      clientName: "Maroc Métal S.A.",
      sector: "Métallurgie - Casablanca",
      quote: "L'intégration de Sage Trésorerie nous a permis d'optimiser le placement de nos excédents et de réduire nos frais d'agios de près de 18% par an.",
      result: "-18% de frais financiers"
    },
    faqs: [
      { question: "Puis-je importer mes flux bancaires de façon automatisée ?", answer: "Oui, le système se connecte avec les principaux protocoles de télétransmission sécurisés pour rapatrier vos relevés de comptes quotidiens." },
      { question: "Quels sont les horizons de prévisions gérés ?", answer: "Vous pouvez paramétrer des vues à la journée, à la semaine, au mois ou un plan financier à long terme selon vos besoins d'investissements." },
      { question: "La gestion multi-devises est-elle prise en charge ?", answer: "Oui, la trésorerie recalcule et consolide vos comptes ouverts en Dirhams, Euros, Dollars ou autres devises en fonction des cours du jour." }
    ]
  },
  "tva": {
    id: "tva",
    path: "/metiers/tva",
    title: "TVA",
    category: "Finance",
    tagline: "Sécurisez vos déclarations de TVA sur les encaissements ou les débits.",
    metaTitle: "Déclaration TVA Conforme au Maroc - Thalès Informatique",
    metaDescription: "Fiabilisez le calcul de votre taxe sur la valeur ajoutée (TVA) et générez vos fichiers de déclaration conformément à l'IR et au code général des impôts.",
    shortDescription: "Automatisez vos calculs complexes de TVA collectée et déductible sur encaissements ou sur débits sans risque d'erreur.",
    challenges: [
      { title: "Calcul fastidieux de la TVA sur encaissements", desc: "Le régime d'encaissement exige d'identifier la date réelle de règlement de chaque facture, une tâche d'un immense calvaire manuel." },
      { title: "Risques de pénalités de redressement fiscal", desc: "Toute erreur ou décalage de déclaration de TVA entre les débits comptables et les encaissements réels est lourdement sanctionné." },
      { title: "Génération manuelle des déclarations", desc: "Saisir manuellement la liasse de TVA mensuelle ou trimestrielle sur les serveurs de la DGI s'avère long et source d'erreurs." }
    ],
    recommendedSolutions: [
      { title: "Sage 100 Comptabilité & TVA", desc: "Un module de gestion de TVA extrêmement puissant s'adaptant à l'ensemble des règles comptables marocaines.", path: "/solutions/sage-100", badge: "Conformité Légale" }
    ],
    benefits: [
      { title: "Suivi automatisé du solde de TVA", desc: "Le logiciel calcule au jour le jour votre solde net de taxe collectée déductible selon vos règles de déversement." },
      { title: "Assistant TVA sur encaissements", desc: "Lettrer une facture lie d'office la TVA correspondante à la date d'encaissement de l'écriture de banque." },
      { title: "Génération de fichier fiscal XML", desc: "Exportez d'un clic le fichier de déclaration de taxe conforme pour un téléversement immédiat sur le portail de la DGI marocaine." }
    ],
    customerSuccess: {
      clientName: "Groupement Holding Services S.A.",
      sector: "Finances & Services - Casablanca",
      quote: "Grâce au paramétrage sur-mesure de la TVA sur encaissements réalisé par Thalès, nos déclarations sont bouclées en 15 minutes chaque mois.",
      result: "Déclaration mensuelle en 15 min"
    },
    faqs: [
      { question: "Le régime des proratas de TVA est-il géré ?", answer: "Oui, le progiciel permet de configurer des pourcentages de déduction de TVA spécifiques pour les entreprises assujetties de façon partielle." },
      { question: "Est-ce sécurisé par rapport au Code Général des Impôts ?", answer: "Tout à fait, nos experts mettent continuellement à jour les taux applicables (20%, 14%, 10%, 7%) et règles associées conformément à la Loi de Finances." },
      { question: "Le progiciel gère-t-il la TVA à l'importation ?", answer: "Oui, il assure le calcul des régimes d'import-export avec gestion des droits de douanes et autoliquidation le cas échéant." }
    ]
  },
  "erp": {
    id: "erp",
    path: "/metiers/erp",
    title: "ERP",
    category: "Opérations & ERP",
    tagline: "Unifiez l'ensemble de vos flux métiers sur une base de données unique.",
    metaTitle: "Progiciel de Gestion Intégré ERP Maroc - Thalès Informatique",
    metaDescription: "Centralisez votre chaîne d'approvisionnement, d'achats, de ventes, de production logistique et vos états financiers de bout en bout.",
    shortDescription: "Unifiez la facturation, la comptabilité générale, la paye et les stocks au sein d'une seule et unique plateforme interconnectée.",
    challenges: [
      { title: "Flux fragmentés et silos d'informations", desc: "Le manque de communication entre la gestion commerciale, les équipes de production et la comptabilité débouche sur de nombreuses incohérences." },
      { title: "Pertes d'inventaires et vols de stocks", desc: "L'absence de traçabilité en temps réel des transactions de transfert d'entrepôt favorise les détournements et les ruptures d'approvisionnement." },
      { title: "Manque d'indicateurs de pilotage", desc: "Le dirigeant est incapable d'obtenir une synthèse fiable de l'activité économique de ses agences à un instant T." }
    ],
    recommendedSolutions: [
      { title: "Sage 100", desc: "Excellent pour unifier la gestion de A à Z des PME et structures en forte croissance commerciale.", path: "/solutions/sage-100", badge: "ERP Modulaire PME" },
      { title: "Sage X3", desc: "La quintessence de l'ERP pour les industries de grande envergure et logistiques multisites.", path: "/solutions/sage-x3", badge: "ERP Envergure Groupe" }
    ],
    benefits: [
      { title: "Base de données unique haut de gamme", desc: "Toute action saisie (par exemple, un bon d'expédition d'un dépôt) met immédiatement à jour la finance et les alertes d'inventaires." },
      { title: "Traçabilité et sécurité d'audit", desc: "Chaque action d'utilisateur est horodatée et consignée pour assurer la pleine traçabilité de vos cycles de vie de documents." },
      { title: "Amélioration globale de la productivité", desc: "Éliminez définitivement les workflows Excel lents, les doubles saisies et les validations manuelles papier." }
    ],
    customerSuccess: {
      clientName: "Maroc Pack S.A.",
      sector: "Transformation Carton - Tanger Med",
      quote: "L'implémentation complète de Sage X3 par l'équipe Thalès a unifié nos silos d'informations. Notre productivité commerciale a bondi de 22% la première année.",
      result: "+22% d'efficience commerciale"
    },
    faqs: [
      { question: "Combien de temps faut-il pour déployer un ERP ?", answer: "Pour Sage 100, comptez de 2 à 4 mois. Pour Sage X3, un jalon de 6 à 9 mois d'analyse et de paramétrages minutieux est généralement requis." },
      { question: "La formation est-elle comprise dans l'intégration ?", answer: "Absolument. Thalès dispense des modules d'adoption dédiés par service pour garantir que chaque collaborateur maîtrise l'outil avant le Go-Live." },
      { question: "L'ERP est-il disponible à distance ou en mobilité ?", answer: "Oui, les architectures actuelles supportent des accès web à distance hautement cryptés et des applications d'inventaire sur tablettes." }
    ]
  },
  "gestion-production": {
    id: "gestion-production",
    path: "/metiers/gestion-production",
    title: "Gestion de Production (GPAO)",
    category: "Opérations & ERP",
    tagline: "Pilotez vos ateliers de fabrication et maîtrisez vos coûts de revient.",
    metaTitle: "GPAO & Gestion de Production Sage Maroc - Thalès Informatique",
    metaDescription: "Optimisez votre ordonnancement, gérez vos ordres de fabrication, suivez vos temps d'ateliers et vos nomenclatures industrielles complexes.",
    shortDescription: "Maîtrisez vos nomenclatures multiniveaux, ordonnancez vos machines d'ateliers et ajustez vos coûts réels de revient.",
    challenges: [
      { title: "Calcul incertain du coût réel de revient", desc: "L'absence de suivi des consommations réelles de matières et de main d'œuvre conduit à vendre des produits finis à faible marge." },
      { title: "Planification d'ateliers défaillante", desc: "Le manque d'outils de coordination engendre des goulots d'étranglement ou des périodes de sous-activité des machines." },
      { title: "Suivi complexe de la traçabilité par lots", desc: "Impossible de tracer rapidement l'origine d'un composant ou d'un lot défectueux en cas de réclamation qualité ONSSA." }
    ],
    recommendedSolutions: [
      { title: "Sage X3 Industrie GPAO", desc: "Le progiciel le plus complet du marché pour la gestion de production discrète ou par processus.", path: "/solutions/sage-x3", badge: "GPAO Haute Précision" },
      { title: "Sage 100 Production", desc: "Idéal pour piloter de façon simple le plan de charge de petits ateliers et PME de conditionnement.", path: "/solutions/sage-100", badge: "Ateliers PME" }
    ],
    benefits: [
      { title: "Calcul des Besoins Nets (MRP)", desc: "Anticipez et automatisez vos propositions d'achats de composants en fonction d'un carnet d'ordres ou de prévisions de demandes." },
      { title: "Ordonnancement et planification graphique", desc: "Planifiez vos priorités d'ateliers à capacité finie ou infinie pour charger vos machines de façon optimale." },
      { title: "Saisie des temps réels en atelier", desc: "Déployez nos terminaux tactiles simples d'ateliers pour saisir en fin d'équipe les quantités produites et le temps d'exécution réel." }
    ],
    customerSuccess: {
      clientName: "Soudure Maghreb S.A.",
      sector: "Métaux & Équipements - Kénitra",
      quote: "Grâce à Sage X3 Industrie, nous connaissons le coût de revient au dirham près de chaque lot. Notre marge brute opérationnelle a augmenté de 11%.",
      result: "+11% de marge opérationnelle"
    },
    faqs: [
      { question: "La solution gère-t-elle la maintenance des machines (GMAO) ?", answer: "Oui, Sage X3 propose des interfaçages robustes ou des briques d'ordonnancement de maintenance préventive pour vos machines." },
      { question: "Peut-on intégrer des balances de pesée ?", answer: "Tout à fait, nous réalisons régulièrement des intégrations d'automates de pesée ou de capteurs d'ateliers reliés aux ordres de fabrication." },
      { question: "Quels secteurs industriels équipez-vous ?", answer: "Nous équipons l'agroalimentaire, la plasturgie, la chimie, le textile, l'automobile et la charpente métallique au Maroc." }
    ]
  },
  "paie-rh": {
    id: "paie-rh",
    path: "/metiers/paie-rh",
    title: "Paie & RH",
    category: "Ressources Humaines",
    tagline: "Optimisez la gestion de vos ressources humaines et fiabilisez vos déclarations.",
    metaTitle: "Gestion de la Paie et des RH au Maroc - Thalès Informatique",
    metaDescription: "Sécurisez vos opérations de paie mensuelles, gérez les fiches de carrières, l'AMO, la CNSS, les congés et la modulation horaire de vos salariés.",
    shortDescription: "Combinez la production de fiches de paies 100% à jour légalement avec la gestion globale des carrières de vos forces vives.",
    challenges: [
      { title: "Erreurs régulières sur les retenues marocaine", desc: "Appliquer manuellement le barème de l'IR, les cotisations patronales Damancom et l'AMO est un calvaire réglementaire propice aux audits sociaux." },
      { title: "Ressaisie manuelle des heures travaillées", desc: "Recopier péniblement les cahiers de pointages ou les relevés de badgeuses en fin de mois amène d'importantes erreurs de salaires." },
      { title: "Gestion déconnectée des congés payés", desc: "L'incapacité de suivre le droit et le solde restant de congés de façon collaborative avec les départements opérationnels." }
    ],
    recommendedSolutions: [
      { title: "Sage Paie & RH", desc: "La solution de référence historique choisie par les Directeurs RH au Maroc pour sa stabilité légale absolue.", path: "/solutions/sage-paie-rh", badge: "Standard de Paie Maroc" }
    ],
    benefits: [
      { title: "Fiches de paies prêtes en quelques clics", desc: "Générez d'importants volumes de bulletins de salaire de façon collective en appliquant d'office les tranches fiscales marocaine." },
      { title: "Portail collaboratif d'absence", desc: "Un espace moderne pour vos équipes afin de poser des congés, valider des RTT et de télécharger leurs bulletins." },
      { title: "Export Damancom immédiat", desc: "Le progiciel automatise d'un seul clic la génération du fichier pour la déclaration mensuelle des cotisations de la CNSS." }
    ],
    customerSuccess: {
      clientName: "Groupement Hôtelier Atlas",
      sector: "Hôtellerie-Tourisme - Marrakech",
      quote: "Avec plus de 800 fiches de paies à distribuer sur 4 sites hôteliers, Sage Paie & RH configuré par Thalès nous a libéré d'une charge administrative colossale.",
      result: "800+ fiches gérées en 2 jours"
    },
    faqs: [
      { question: "La nouvelle réforme de l'IR marocain est-elle gérée ?", answer: "Absolument. Nos contrats de maintenance incluent d'office les mises à jour réglementaires dès la validation de la Loi de Finances." },
      { question: "Peut-on connecter nos pointeuses horaires du personnel ?", answer: "Oui, Thalès conçoit des passerelles intelligentes pour rapatrier vos heures de badgeuses vers les briques de saisie d'éléments de paie." },
      { question: "Puis-je gérer les prêts et avances sur salaires ?", answer: "Tout à fait, la solution intègre un suivi des tableaux d'échéances d'avances sur salaire avec prélèvement automatique sur le bulletin mensuel." }
    ]
  },
  "demat-rh": {
    id: "demat-rh",
    path: "/metiers/demat-rh",
    title: "Démat RH",
    category: "Ressources Humaines",
    tagline: "Amorcez la dématérialisation de vos documents réglementaires et coffre-fort.",
    metaTitle: "Dématérialisation RH & Coffre-Fort Collaborateur Maroc - Thalès Informatique",
    metaDescription: "Distribuez vos bulletins de salaires de manière hautement sécurisée, gérez vos contrats dématérialisés et facilitez les signatures.",
    shortDescription: "Distribuez vos bulletins de salaires numériques de façon cryptée, gérez vos porteurs de congés et vos archives RH de façon écologique.",
    challenges: [
      { title: "Délais de transfert de bulletins papier", desc: "Imprimer, glisser sous enveloppe et expédier des fiches de paies par coursier à des centaines d'employés géographiquement éloignés." },
      { title: "Risques de fuites de données confidentielles", desc: "L'archivage physique des répertoires de paies sans droits d'accès administratifs stricts augmente l'insécurité des dossiers individuels." },
      { title: "Perte de documents et contrats d'embauche", desc: "S'épuiser à retrouver un avenant papier ou un document légal au milieu d'armoires d'archivages encombrées." }
    ],
    recommendedSolutions: [
      { title: "Portail Salarié & Démat Sage", desc: "Amenez votre équipe vers le zéro papier avec la brique coffre-fort numérique collaborative Sage.", path: "/solutions/sage-paie-rh", badge: "Archivage Zéro Papier" }
    ],
    benefits: [
      { title: "Distribution sécurisée de bulletins", desc: "Envoie instantanément chaque bulletin de paie dans l'espace personnel crypté inaccessible aux autres collaborateurs." },
      { title: "Filtres d'accès et droits administrateurs", desc: "Définissez quels profils de cadres RH peuvent consulter les fichiers sensibles des employés (salaires, sanctions)." },
      { title: "Parcours d'intégration de nouveaux venus", desc: "Diffusez les règlements intérieurs et livrets d'accueil de façon dématérialisée avec validation d'ouverture obligatoire." }
    ],
    customerSuccess: {
      clientName: "Holding Financière Marocaine S.A.",
      sector: "Banque & Conseil - Casablanca",
      quote: "Distribuer 450 bulletins nous prenait 5 jours d'enveloppes et de coursiers. Aujourd'hui tout s'expédie en un clic sécurisé et écologique.",
      result: "Émissions de bulletins en 3 secondes"
    },
    faqs: [
      { question: "La signature électronique de contrats est-elle intégrée ?", answer: "Oui, la solution s'interface avec les principaux tiers de confiance locaux et internationaux certifiés au Maroc pour signer légalement." },
      { question: "Combien de temps sont conservés les documents cryptés ?", answer: "Vous fixez les durées légales d'archivage (généralement 10 ou 15 ans pour les dossiers de paies et carrière) sans limite physique." },
      { question: "Est-ce conforme à la CNDP concernant la vie privée ?", answer: "Oui, les infrastructures cloud s'alignent avec les directives de la CNDP marocaine garantissant la sécurité des données privées." }
    ]
  },
  "paie": {
    id: "paie",
    path: "/metiers/paie",
    title: "Paie",
    category: "Ressources Humaines",
    tagline: "Fiabilisez la production mensuelle de vos bulletins de salaires marocains.",
    metaTitle: "Logiciel de Paie Marocaine Professionnel - Thalès Informatique",
    metaDescription: "Automatisez vos calculs d'IGR, primes d'ancienneté réglementaire, fiches d'attestation de salaire CNSS et départs d'employés.",
    shortDescription: "Automatisez vos calculs complexes d'IR, de primes d'ancienneté marocaine obligatoire et d'écritures bancaires associées.",
    challenges: [
      { title: "Lenteurs des calculs de paies en fin de mois", desc: "L'absence de moteur de calcul de paie unifié engorge l'activité comptable du cabinet lors des virements d'équipes." },
      { title: "Calcul manuel de la prime d'ancienneté", desc: "La structure obligatoire marocaine d'ancienneté (de 5% à 25% de primes graduelles) nécessite un suivi laborieux." },
      { title: "Erreurs sur les fiches de solde de tout compte", desc: "Le calcul erroné des reliquats de congés, d'indemnités de licenciement ou de préavis propice aux contentieux de travail." }
    ],
    recommendedSolutions: [
      { title: "Sage Paie", desc: "La brique de calcul par excellence pour fiabiliser la facturation humaine et vos charges patronales au Maroc.", path: "/solutions/sage-paie-rh", badge: "Fiabilité de Paie" }
    ],
    benefits: [
      { title: "Calcul de prime d'ancienneté automatique", desc: "Le logiciel analyse la date d'embauche de chaque fiche d'élément pour appliquer le taux légal en vigueur d'office." },
      { title: "Lien automatique Comptabilité", desc: "Déversez l'ensemble des écritures de salaires et d'organismes CNSS/mutuelles en comptabilité analytique d'un seul clic." },
      { title: "Modèles d'attestations de salaires", desc: "Éditez instantanément les fiches administratives de salaires, bordereaux CNSS individuels ou fiches d'impôt annuel (État 9421)." }
    ],
    customerSuccess: {
      clientName: "Grand Garage du Maghreb",
      sector: "Concessionnaire - Casablanca",
      quote: "Bâtir la paie marocaine sur Excel de nos 150 mécaniciens et conseillers était une roulette russe fiscale. Sage Paie a sécurisé notre climat de confiance.",
      result: "0 litige de paie constaté"
    },
    faqs: [
      { question: "Gérez-vous la déclaration annuelle des traitements et salaires ?", answer: "Oui, la génération automatique de l'État 9421 au format XML EDI exigé par la DGI marocaine est intégrée à nos correctifs." },
      { question: "Peut-on paramétrer des grilles de salaires par conventions ?", answer: "Absolument. Nous paramétrons vos accords d'entreprises, grilles de primes techniques ou bonus variables par commerciaux." },
      { question: "Quel accompagnement proposez-vous en cas de bug de déclaration ?", answer: "Nos ingénieurs certifiés effectuent un diagnostic à distance en urgence pour lever tout blocage CNSS avant vos dates limites." }
    ]
  },
  "sirh": {
    id: "sirh",
    path: "/metiers/sirh",
    title: "SIRH",
    category: "Ressources Humaines",
    tagline: "Unifiez votre gestion des carrières, évaluations et compétences d'équipes.",
    metaTitle: "Système d'Information des Ressources Humaines SIRH Maroc - Thalès Informatique",
    metaDescription: "Centralisez le recrutement, les formations de compétences, les entretiens de carrières et le pilotage du capital humain marocaine.",
    shortDescription: "Unifiez la formation de vos effectifs, la gestion de carrières, les recrutements stratégique et vos plans de relève RH.",
    challenges: [
      { title: "Suivi confus du capital et des compétences", desc: "Des compétences techniques rares de l'entreprise qui restent ignorées ou sous-exploitées par manque de dossiers d'évaluation." },
      { title: "Gestion opaque des dotations de formations", desc: "Planifier des formations d'adaptation sans visibilité sur le budget alloué par l'Ofppt ou l'évaluation du retour d'adoption." },
      { title: "Goulet d'étranglement des recrutements d'affaires", desc: "S'enliser sous une montagne de fichiers PDF ou de CV d'ingénieurs sans workflow d'évaluation d'entretiens par les chefs de projets." }
    ],
    recommendedSolutions: [
      { title: "Sage Espace Collaborateurs SIRH", desc: "Unifiez vos processus d'évaluation humaine, de carrières et vos formations de compétences internes.", path: "/solutions/sage-paie-rh", badge: "Optimisation RH" }
    ],
    benefits: [
      { title: "Cartographie de compétences (GPEC)", desc: "Évaluez graphiquement vos écarts de compétences métier par rapport au niveau requis et planifiez vos modules de perfectionnement." },
      { title: "Suivi du budget de formation Ofppt", desc: "Assurez la traçabilité des dossiers de cofinancement d'Ofppt pour optimiser la prise en charge de vos apprentissages d'effectifs." },
      { title: "Workflow participatif d'évaluation", desc: "Planifiez des sessions d'entretiens, partagez des questionnaires de satisfaction et consolidez vos indicateurs de climat social." }
    ],
    customerSuccess: {
      clientName: "Ciment Maghreb S.A.",
      sector: "Matériaux - Casablanca et Safi",
      quote: "Grâce à l'environnement interactif Sage SIRH configuré par Thalès, nos comités d'évaluations de carrières se font dans un cadre de confiance partagée.",
      result: "92% d'adoption des plans de carrières"
    },
    faqs: [
      { question: "La brique est-elle utilisable de façon nomade par les employés ?", answer: "Oui, un portail fluide optimisé pour mobile permet de consulter les fiches de notation, les plans et les suggestions de formations à distance." },
      { question: "Est-ce interconnecté avec le module de paie générale ?", answer: "Tout à fait, une promotion ou un changement d'échelon validé en SIRH met à jour la fiche individuelle de paie pour le mois prochain." },
      { question: "Comment intégrez-vous nos fiches de postes actuelles ?", answer: "Nous faisons une extraction soignée pour modéliser vos postes clés au sein de la cartographie GPEC de façon rationnelle." }
    ]
  },
  "reporting": {
    id: "reporting",
    path: "/metiers/reporting",
    title: "Reporting",
    category: "Opérations & ERP",
    tagline: "Prenez des décisions éclairées grâce à vos tableaux de bord inter-modules.",
    metaTitle: "Tableaux de Bord Décisionnels Sage BI Reporting - Thalès Informatique",
    metaDescription: "Fini la double-saisie et les exports fastidieux de données. Interrogez en direct vos ventes, finances et stocks sous Excel.",
    shortDescription: "Évitez la double-saisie lente de documents et générez des ratios de rentabilité commerciale et financière en un clic depuis Excel.",
    challenges: [
      { title: "Décider sur des balances obsolètes", desc: "Prendre d'importantes décisions opérationnelles basées sur des rapports édités plusieurs semaines après la fin d'activité." },
      { title: "Saisie fragmentée et fastidieuse de rapports", desc: "Vos contrôleurs de gestion s'épuisent à consolider manuellement de multiples bases SQL Sage dans d'immenses fichiers de calculs lents." },
      { title: "Indicateurs peu attractifs pour les associés", desc: "De longs tableaux de chiffres bruts sans mise en valeur des alertes de surstocks ou des écarts d'engagements budgétaires." }
    ],
    recommendedSolutions: [
      { title: "Sage BI Reporting", desc: "La Rolls Decision-Intelligence directement au cœur d'Excel, connectée à l'ensemble de vos transactions au Maroc.", path: "/solutions/sage-bi-reporting", badge: "BI Excel Intégrée" }
    ],
    benefits: [
      { title: "Connexion directe avec la base SQL", desc: "Rédigez des requêtes dynamiques qui mettent à jour l'ensemble de votre tableau d'amortissement ou de rentabilité commerciale en une seconde." },
      { title: "Modèles de rapports prêts par Thalès", desc: "Profitez d'un catalogue de tableaux de bord financiers de premier choix pré-paramétrés par nos experts pour votre secteur d'activité." },
      { title: "Diffusion d'analyses planifiée par e-mail", desc: "Planifiez des rapports d'alerte de marges à expédier de façon automatique aux associés de l'entreprise chaque vendredi soir." }
    ],
    customerSuccess: {
      clientName: "Groupement Export Nord",
      sector: "Distribution Négoce - Tanger",
      quote: "Utiliser Sage BI Reporting a totalement changé notre pilotage face au conseil de direction. Nos marges par produits industriels se calculent d'un clic journalier.",
      result: "Marges nettes calculées en 1 clic"
    },
    faqs: [
      { question: "Dois-je posséder des licences de bases complexes SQL ?", answer: "Non, l'assistant gère la connectivité de façon transparente sans exiger de connaissances techniques de codage de base de données." },
      { question: "Est-ce sécurisé pour empêcher les fuites financières ?", answer: "Oui, un modèle de mot de passe utilisateur réglementé définit qui a le droit d'extraire des rapports financiers de haut de bilan." },
      { question: "Puis-je l'intégrer avec d'autres modules (ex: Paie) ?", answer: "Oui, la BI Sage interroge indifféremment la comptabilité, les ventes, les stocks et la paie pour consolider vos données croisées." }
    ]
  },
  "crm": {
    id: "crm",
    path: "/metiers/crm",
    title: "CRM",
    category: "Opérations & ERP",
    tagline: "Suivez votre pipeline commercial et offrez un service client exceptionnel.",
    metaTitle: "Sage CRM Maroc - Gestion Relation Client - Thalès Informatique",
    metaDescription: "Suivez vos prospects, optimisez vos opportunités commerciales de terrain, planifiez vos relances et analysez vos taux de concrétisation.",
    shortDescription: "Gérez vos prospects à 360°, tracez les activités de votre force de vente commerciale de terrain et structurez votre SAV.",
    challenges: [
      { title: "Prospects éparpillés et devis sans relances", desc: "Oublier de relancer des devis de valeurs majeures par manque d'outils collaboratifs d'alertes régulières de relances commerciales." },
      { title: "Force de vente isolée sur le terrain", desc: "Une équipe commerciale itinérante incapable de renseigner les rapports d'entretiens auprès du siège social en temps réel." },
      { title: "SAV désorganisé en traitement de réclamations", desc: "Le manque de traçabilité des réclamations clients ou de tickets d'assistance conduit au mécontentement de comptes stratégiques." }
    ],
    recommendedSolutions: [
      { title: "Sage CRM", desc: "Entièrement synchronisable avec Sage 100 et Sage X3 pour une vision client d'affaires à 360 degrés.", path: "/solutions/sage-crm", badge: "SAV & Pipeline Commercial" }
    ],
    benefits: [
      { title: "Suivi de portefeuille d'affaires visuel", desc: "Affichez l'ensemble de votre pipe de ventes sous forme de tunnel d'étapes (en négociation, devis, signature)." },
      { title: "Historique d'appels et e-mails unifié", desc: "Chaque interaction, appel téléphonique ou devis émis se consigne sur la fiche tiers pour une vision globale." },
      { title: "Traitement de réclamations SAV rigoureux", desc: "Mettez en place des tickets d'assistance avec workflows prioritaires de résolutions de bugs sous engagements contractuels." }
    ],
    customerSuccess: {
      clientName: "Groupement Télécom Maghreb",
      sector: "Services & Logistique - Rabat",
      quote: "L'usage de Sage CRM par nos 20 commerciaux de terrain a structuré notre prospection d'affaires. Nos ventes d'abonnements ont enregistré un bond de 17%.",
      result: "+17% d'opportunités signées"
    },
    faqs: [
      { question: "La solution est-elle utilisable sur smartphone mobile ?", answer: "Oui, Sage CRM intègre une application native ou Web optimisée pour que vos équipes sur le terrain consultent et saisissent hors connexion." },
      { question: "Se connecte-t-elle avec ma facturation actuelle ?", answer: "Oui. Connectée à Sage 100 ou X3, la fiche client expose d'un coup d'œil son historique de factures, d'encours de crédits et de livraisons." },
      { question: "Le progiciel gère-t-il les campagnes e-mailing ?", answer: "Oui, vous pouvez concevoir des listes de diffusion et expédier des e-mails marketing de masse tout en traçant les retours d'adoption." }
    ]
  }
};
