import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  ChevronLeft, 
  Heart, 
  Share2, 
  Bookmark, 
  CheckCircle, 
  ArrowRight, 
  UserCheck, 
  HelpCircle,
  Copy,
  Check,
  Send,
  Building2,
  User,
  Mail,
  Phone
} from "lucide-react";
import { BLOG_POSTS } from "../data";
import Footer from "./Footer";

// Extremely detailed rich content for the blog articles
const EXPANDED_ARTICLE_CONTENT: Record<string, {
  subtitle: string;
  author: string;
  authorRole: string;
  sections: Array<{ title: string; content: string }>;
  conclusion: string;
  recommendations: string[];
}> = {
  "blog-1": {
    subtitle: "Reconduire les flux, mobiliser l'humain et tirer profit des subventions nationales.",
    author: "Ing. Kamal El Amrani",
    authorRole: "Directeur Conseil & Transformation Digitale",
    sections: [
      {
        title: "1. Le nouveau paradigme numérique des PME au Maroc",
        content: "Au cours des dernières années, le tissu économique marocain s'est vu propulsé dans une ère de numérisation accélérée. Ce qui relevait jadis du confort opérationnel constitue désormais le pivot central de la compétitivité et de la pérennité d'une entreprise. Du port Tanger Med aux zones industrielles de Casablanca en passant par l'agro-industrie du Souss, chaque seconde d'inactivité ou d'imprécision se traduit par un coût immédiat. Adopter un progiciel de gestion intégré (ERP) n'est plus seulement une mise à niveau technique, mais une restructuration globale de la création de valeur."
      },
      {
        title: "2. Les aides étatiques à l'investissement technologique",
        content: "L'État marocain, par le biais d'organismes comme l'Agence Maroc PME et le programme national 'Maroc Digital', soutient vigoureusement cet élan de modernisation. Les entreprises éligibles peuvent prétendre à des subventions significatives (dispositifs Tatwir, Imtiaz ou d'autres lignes de cofinancement) pour soutenir l'acquisition, le paramétrage et la formation aux solutions ERP de pointe. Chez Thalès Informatique, nous aidons régulièrement nos clients à monter ces dossiers de financement afin de diviser par deux le coût initial de leur investissement tout en préservant leur trésorerie courante."
      },
      {
        title: "3. La méthode Thalès Informatique : Diviser pour mieux régner",
        content: "Un projet d'intégration d'ERP échoue rarement pour des raisons logicielles, mais presque toujours par manque de préparation humaine. Notre méthodologie en six étapes sécurise chaque jalon : 1) Audit préparatoire approfondi des processus, 2) Rédaction du blueprint technique et fonctionnel, 3) Installation et paramétrages sur-mesure (IR marocaine, devises de frais d'approche, plans comptables), 4) Phase de test unitaire et de recette utilisateurs guidée, 5) Migration sécurisée de l'historique comptable et commercial, et 6) Go-Live encadré avec présence de nos ingénieurs sur place pour lever toute friction de départ."
      },
      {
        title: "4. Gérer le changement culturel face aux équipes",
        content: "La transition vers un outil unifié bouscule les habitudes acquises depuis des années. Notre conseil est d'impliquer les utilisateurs finaux dès les tables rondes d'évaluation fonctionnelle. Un collaborateur qui exprime ses contraintes quotidiennes de saisie et voit l'outil s'adapter à lui deviendra le meilleur ambassadeur de votre projet numérique en interne."
      }
    ],
    conclusion: "La transition numérique est une aventure humaine soutenue par des technologies de précision. En adoptant les bonnes pratiques dès le premier jour, vous transformez vos contraintes bureaucratiques en leviers de rentabilité immédiats.",
    recommendations: [
      "Faites dresser un pré-audit complet de vos flux d'inventaire physiques.",
      "Vérifiez l'éligibilité de votre entreprise aux lignes de subventions d'appui de l'État.",
      "Prévoyez un plan de formation utilisateur d'au moins 3 jours par service métier."
    ]
  },
  "blog-2": {
    subtitle: "Analyse objective pour orienter vos investissements technologiques à long terme.",
    author: "Mme. Salma Benjelloun",
    authorRole: "Consultante Senior Solutions ERP Sage",
    sections: [
      {
        title: "1. Structuration de l'écosystème commercial Sage au Maroc",
        content: "L'éditeur d'ERP Sage propose des solutions robustes mondialement reconnues pour leur adaptabilité. Au Maroc, deux d'entre elles se taillent la part du lion : Sage 100, particulièrement apprécié par les petites et moyennes entreprises pour sa polyvalence, et Sage X3, un système d'envergure conçu pour piloter les flux industriels, multi-sociétés et internationaux les plus intenses."
      },
      {
        title: "2. Sage 100 : L'agilité connectée des PME de services et négoce",
        content: "Pour une structure de taille intermédiaire dont le principal défi est d'unifier la facturation, les écritures comptables, la paie des équipes et un stock central, Sage 100 s'impose comme le choix parfait. Très rapide à déployer (généralement moins de 3 mois), il s'interface nativement avec Excel pour un pilotage agile. Sa structure modulaire permet de démarrer avec la brique gestion commerciale puis d'ajouter la comptabilité et la paie au fil du développement de l'entreprise."
      },
      {
        title: "3. Sage X3 : Le moteur des géants industriels et logistiques",
        content: "Dès lors que vos activités englobent des processus industriels multiniveaux (planification globale MRP, ordonnancement d'ateliers, suivi des coûts réels de fabrication des machines), la gestion multi-devises complexe (exigeant de recalculer les frais d'approche à l'importation portuaire) et la consolidation de plusieurs entités de droit marocain ou étranger, Sage X3 devient indispensable. Sa structure de base de données puissante encaisse des millions de transactions sans faillir."
      },
      {
        title: "4. Le coût total de possession (TCO) et retour sur investissement",
        content: "Bien que l'investissement initial pour Sage X3 soit supérieur en licences et d'heures de paramétrage, le gain d'efficacité sur de gros volumes (diminution des temps de clôture financière de 15 à 5 jours, réduction des stocks dormants de 15%) amortit la solution en moins de 18 mois pour les grandes industries marocaines."
      }
    ],
    conclusion: "Le choix ne dépend pas de la puissance intrinsèque du progiciel, mais de la complexité structurelle de vos opérations courantes. Un ERP surdimensionné fatigue les équipes ; un ERP sous-dimensionné freine le développement.",
    recommendations: [
      "Sélectionnez Sage 100 si vos effectifs administratifs n'excèdent pas 30 utilisateurs simultanés.",
      "Optez pour la robustesse de Sage X3 si vous gérez des usines multi-sites ou de la logistique avec traçabilité d'ONSSA.",
      "Consultez les experts de Thalès Informatique pour un comparatif de TCO personnalisé."
    ]
  },
  "blog-3": {
    subtitle: "Comment les DAF et Directeurs Généraux reprennent le contrôle de leurs marges.",
    author: "Ing. Youssef Tagma",
    authorRole: "Expert Décisionnel & BI Reporting",
    sections: [
      {
        title: "1. Le calvaire des rapports manuels en fin de mois",
        content: "Nombreux sont les dirigeants au Maroc qui reçoivent leurs rapports d'activité commerciale ou comptable avec plusieurs semaines de décalage. Entre-temps, des écarts de trésorerie insurmontables ou des baisses de rentabilité sur une gamme d'articles ont pu se produire sans que personne ne s'en aperçoive. Extraire des fichiers textes, compiler des dizaines d'onglets Excel et nettoyer manuellement les lignes consomme un temps précieux aux analystes."
      },
      {
        title: "2. Qu'est-ce que Sage BI Reporting ?",
        content: "Sage BI Reporting est un moteur révolutionnaire qui s'intègre directement au sein de Microsoft Excel. Au lieu de copier des données, le concepteur écrit des formules BI dynamiques qui interrogent en direct, à la seconde près, vos bases SQL Sage (comptabilité, achats, stocks, ventes). Il suffit de cliquer sur le bouton 'Calculer' pour que tout votre tableau de bord, vos graphiques et vos analyses financières se mettent à jour instantanément."
      },
      {
        title: "3. La force de l'interrogation décisionnelle",
        content: "Grâce à cette technologie, le contrôleur de gestion peut éditer quotidiennement des fiches d'alerte sur stocks critiques, des ratios de marge brute par représentant commercial ou des suivis précis de délais moyen de recouvrement client (DSO). Vous pilotez l'entreprise à l'aide d'un rétroviseur parfaitement propre, plutôt que de deviner les obstacles dans le brouillard."
      }
    ],
    conclusion: "La business intelligence replace Excel dans son rôle de prédilection : l'analyse stratégique et la prise de décision éclairée, en éliminant définitivement la corvée de saisie répétitive.",
    recommendations: [
      "Identifiez vos 5 indicateurs opérationnels clés (KPIs) prioritaires pour votre activité.",
      "Installez des masques de reporting pré-paramétrés développés par Thalès Informatique pour démarrer en un jour.",
      "Automatisez la diffusion de ces rapports par e-mail chaque vendredi soir à vos associés."
    ]
  },
  "blog-4": {
    subtitle: "Comprendre les exigences de la DGI et configurer vos progiciels en toute conformité.",
    author: "Mme. Nezha El Fassi",
    authorRole: "Consultante Expert Fiscalité Marocaine & Sage",
    sections: [
      {
        title: "1. Les objectifs de la Direction Générale des Impôts (DGI)",
        content: "Afin de moderniser l'administration fiscale et de lutter efficacement contre la facturation fictive, le ministère de l'Économie et des Finances déploie progressivement des réformes d'envergure relative à la facturation électronique au Maroc. À terme, toutes les entreprises assujetties devront émettre des factures structurées sous format XML ou JSON certifié, munies de signatures cryptographiques, transmises en temps réel aux serveurs de l'État."
      },
      {
        title: "2. Les impacts sur vos logiciels de gestion commerciale",
        content: "Vos outils de facturation habituels ne pourront plus se satisfaire de simples éditions PDF ou papier. Chaque facture validée devra obtenir un identifiant unique (DGI hash) et être verrouillée pour empêcher toute altération a posteriori. Les processus d'avoirs et d'annulations seront encadrés par des protocoles cryptographiques stricts."
      },
      {
        title: "3. Comment Sage 100 & Sage X3 préparent votre conformité",
        content: "Partenaire Elite Sage au Maroc, Thalès Informatique travaille main dans la main avec l'éditeur pour intégrer les connecteurs requis. Votre progiciel actuel bénéficiera de modules de signature électronique et de contrôle automatique de validité du numéro d'identifiant fiscal commun (ICE) de vos clients avant chaque envoi, réduisant le taux d'erreur à zéro."
      }
    ],
    conclusion: "Anticiper cette réglementation est un gage exceptionnel de transparence et de sérieux commercial face à vos partenaires d'affaires grands comptes.",
    recommendations: [
      "Vérifiez que vos versions de Sage 100 ou Sage X3 disposent des dernières briques de mise à jour légales.",
      "Nettoyez rigoureusement votre fichier tiers clients en renseignant l'ICE, l'IF et l'adresse légale complète de chaque compte.",
      "Planifiez une réunion d'information fiscale avec votre cabinet comptable et un de nos ingénieurs experts."
    ]
  },
  "blog-5": {
    subtitle: "Sécuriser vos calculs de retenues à la source, primes et déclarations mensuelles au Maroc.",
    author: "Ing. Tarik Benslimane",
    authorRole: "Spécialiste Législation Sociale & Progiciels RH",
    sections: [
      {
        title: "1. La complexité inhérente de la législation marocaine",
        content: "Entre l'AMO, l'impôt sur le revenu progressif ajusté régulièrement par la Loi de Finances, le barème obligatoire du calcul des primes d'ancienneté, les plafonds de cotisations de la CNSS et de la CIMR, la paie marocaine figure parmi les plus denses d'Afrique du Nord. La moindre négligence de configuration logicielle peut engendrer des écarts comptables lourds de conséquences lors d'un contrôle social."
      },
      {
        title: "2. Les avantages d'un outil de paie dédié",
        content: "Sage Paie & RH, configuré par nos soins, élimine l'angoisse des erreurs manuelles. Le calcul de la prime d'ancienneté obligatoire (5% après 2 ans, 10% après 5 ans, 15% après 12 ans, etc.) s'effectue automatiquement en fonction de la date d'embauche. De même, les fiches individuelles de déclarations Damancom mensuelles s'exportent sous le format exact exigé par la plateforme en ligne, d'un clic."
      },
      {
        title: "3. Réforme de l'IR : Le point sur les nouvelles tranches fiscales",
        content: "La Loi de Finances du Maroc introduit des ajustements majeurs du barème de l'impôt de solidarité et de l'IR. Nous mettons en place des grilles de cotisations paramétrables à distance qui se mettent en conformité d'office dès l'entrée en vigueur de la loi, sans qu'aucun calcul externe sur papier ne soit requis."
      }
    ],
    conclusion: "Fiabiliser la paie protège avant tout le climat social de votre structure et libère vos cadres RH des tâches repetitives à faible valeur ajoutée.",
    recommendations: [
      "Intégrez un workflow d'import direct des flux de votre pointeuse horaire vers l'ERP pour éviter la ressaisie d'heures.",
      "Configurez l'archivage crypté et le portail salarié pour distribuer les bulletins de salaires de manière dématérialisée et confidentielle.",
      "Planifiez un diagnostic gratuit de conformité de votre outil de paie avec Thalès Informatique."
    ]
  },
  "blog-6": {
    subtitle: "Comment optimiser la chaîne d'approvisionnement multisites au Maroc (Casablanca, Tanger, Kénitra).",
    author: "Ing. Adil Cherkaoui",
    authorRole: "Expert GPAO & Logistique Industrielle",
    sections: [
      {
        title: "1. Le défi de la coordination multi-entrepôts au Maroc",
        content: "Pour de nombreuses entreprises marocaines, l'activité s'orchestre désormais sur plusieurs sites : un centre de distribution à Casablanca, une usine à Kénitra, et une plateforme exportatrice active à Tanger Med. Sans visibilité en temps réel sur l'encours de production et l'état des cargaisons logistiques, la supply chain souffre de goulets d'étranglement ou de surstocks improductifs."
      },
      {
        title: "2. La planification des besoins matières (MRP)",
        content: "Grâce aux fonctionnalités industrielles avancées de Sage X3 et Sage 100, vous basculez dans une logistique proactive. Le calcul MRP évalue continuellement les commandes clients enregistrées, les carnets d'expédition, les délais fournisseurs et le stock de sécurité pour émettre des recommandations automatisées d'achats ou d'ordres de fabrication."
      },
      {
        title: "3. Mobilité codes-barres intégrée",
        content: "Associer des terminaux de capture mobile (scanners codes-barres) connectés en Wi-Fi / LTE directement à votre base Sage élimine l'attente administrative. Un cariste scanne une palette à Kénitra, le stock est réservé à Tanger et le bon de transfert inter-dépôts est immédiatement édité en comptabilité générale."
      }
    ],
    conclusion: "Une logistique fluide est garante d'un taux de service client de premier plan, propulsant votre réputation sectorielle bien devant vos pairs.",
    recommendations: [
      "Établissez des stocks d'alerte saisonniers ajustés en fonction de vos pics d'expédition historiques.",
      "Formez vos gestionnaires de dépôts aux outils de scanning mobile pour éliminer la validation papier.",
      "Configurez le calcul analytique du coût d'approche portuaire complexe dans le module Sage Achats."
    ]
  }
};

interface BlogPostPageProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function BlogPostPage({ onDemoClick }: BlogPostPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasBookmarked, setHasBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find current post
  const post = BLOG_POSTS.find((p) => p.id === id);
  const detail = id ? EXPANDED_ARTICLE_CONTENT[id] : null;

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post || !detail) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between pt-32 pb-10">
        <div className="max-w-md mx-auto text-center px-4 py-16 bg-white border border-slate-200 rounded-2xl shadow-xl">
          <HelpCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#001B3A] mb-2">Article introuvable</h2>
          <p className="text-sm text-slate-500 mb-6">Cet article de blog n'est pas encore disponible ou son adresse a expiré.</p>
          <Link
            to="/blog"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#003B7A] px-6 text-xs font-bold text-white hover:bg-[#007BFF] transition-all"
          >
            Retourner au blog
          </Link>
        </div>
        <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />
      </div>
    );
  }

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get related articles (exclude current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#001B3A] overflow-x-hidden antialiased">
      
      {/* 1. Header Banner & Floating Breadcrumbs */}
      <section className="relative pt-32 pb-12 bg-white border-b border-slate-100 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 h-48 w-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#003B7A] transition-colors shrink-0">Accueil</Link>
            <ChevronLeft className="h-3 w-3 text-slate-300 shrink-0 rotate-180" />
            <Link to="/blog" className="hover:text-[#003B7A] transition-colors shrink-0">Blog Décisionnel</Link>
            <ChevronLeft className="h-3 w-3 text-slate-300 shrink-0 rotate-180" />
            <span className="text-[#007BFF] font-extrabold truncate max-w-xs">{post.category}</span>
          </nav>

          {/* Title Area */}
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3 py-1 text-[10px] font-extrabold tracking-widest text-[#003B7A] uppercase mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-black text-[#001B3A] tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-sm md:text-base text-slate-500 italic font-semibold leading-relaxed max-w-3xl border-l-3 border-[#007BFF] pl-4">
              "{detail.subtitle}"
            </p>

            {/* Author details */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-[#003B7A] text-white font-bold flex items-center justify-center text-xs shadow-md shadow-blue-900/10 uppercase">
                  {detail.author.split(" ").pop()?.substring(0, 2)}
                </div>
                <div>
                  <span className="font-extrabold text-[#001B3A] block">{detail.author}</span>
                  <span className="text-[10px] text-slate-400 font-bold">{detail.authorRole}</span>
                </div>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <div className="flex gap-4 text-slate-400 font-bold uppercase text-[10px] items-center">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#007BFF]" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#007BFF]" /> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* ARTICLE READING AREA */}
            <article className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-sm">
              
              {/* Cover picture */}
              <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden mb-8 border border-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Engagement Controls mockup */}
              <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-8 text-xs">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 font-bold transition-all p-1.5 rounded-lg cursor-pointer ${
                      hasLiked ? "text-red-500 bg-red-50" : "text-slate-500 hover:text-red-500 hover:bg-slate-50"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${hasLiked ? "fill-red-500" : ""}`} />
                    <span>{likes} Favoris</span>
                  </button>

                  <button 
                    onClick={() => setHasBookmarked(!hasBookmarked)}
                    className={`flex items-center gap-1.5 font-bold transition-all p-1.5 rounded-lg cursor-pointer ${
                      hasBookmarked ? "text-amber-600 bg-amber-50" : "text-slate-500 hover:text-amber-600 hover:bg-slate-50"
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${hasBookmarked ? "fill-amber-600" : ""}`} />
                    <span>Enregistrer</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-[#007BFF] hover:bg-slate-50 p-1.5 rounded-lg font-bold transition-all cursor-pointer"
                    title="Copier le lien"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Lien copié !" : "Copier le lien"}</span>
                  </button>
                </div>
              </div>

              {/* Rich Body Paragraphs */}
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-semibold">
                <p className="text-base text-slate-800 font-extrabold border-l-4 border-[#003B7A] pl-4 leading-relaxed mb-8">
                  {post.summary}
                </p>

                {detail.sections.map((sect, i) => (
                  <section key={i} className="pt-4">
                    <h2 className="text-lg font-black text-[#003B7A] tracking-tight mb-3">
                      {sect.title}
                    </h2>
                    <p className="mb-4">
                      {sect.content}
                    </p>
                  </section>
                ))}

                <blockquote className="my-8 rounded-xl bg-[#003B7A]/5 border border-[#003B7A]/10 p-6 italic text-[#003B7A] text-sm font-bold relative">
                  <span className="text-4xl font-serif text-[#007BFF]/30 absolute top-2 left-3">“</span>
                  <p className="relative z-10 pl-4">{detail.conclusion}</p>
                </blockquote>
              </div>

              {/* Official Recommendations Box */}
              <div className="mt-10 rounded-xl bg-[#f8fafc] border border-slate-200/80 p-6 md:p-8">
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#007BFF] mb-4">
                  <CheckCircle className="h-5 w-5 text-[#007BFF]" />
                  Recommandation officielle de Thalès Informatique :
                </h4>
                <ul className="space-y-3">
                  {detail.recommendations.map((rec, i) => (
                    <li key={i} className="text-xs text-slate-600 flex gap-2.5 font-medium items-start">
                      <span className="text-[#007BFF] font-black shrink-0 text-base leading-none">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>

            {/* EXPERT SIDEBAR & FORM */}
            <aside className="lg:col-span-4 space-y-8" id="blog-sidebar">
              {/* Box 1: Consultant Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-center pb-4 border-b border-slate-100">
                  <div className="h-16 w-16 rounded-full bg-blue-50 text-[#007BFF] font-bold flex items-center justify-center mx-auto mb-3 shadow">
                    <UserCheck className="h-8 w-8 text-[#007BFF]" />
                  </div>
                  <h4 className="text-sm font-black text-[#003B7A]">Comité d'édition Thalès</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Consultants Agréés Sage</p>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed font-semibold mt-4">
                  Nos ingénieurs certifiés rédigent ces analyses de fond pour guider bénévolement l'écosystème commercial des PME et ETI au Royaume du Maroc vers de hauts niveaux de conformité.
                </p>

                <button 
                  onClick={() => onDemoClick(id)}
                  className="w-full mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#003B7A] text-xs font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
                >
                  <span>Échanger avec ce consultant</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Box 2: Quick Audit Capture Form */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">AUDIT PAR SUJET</span>
                <h4 className="text-sm font-black text-[#003B7A] mb-3">Une question sur cet article ?</h4>
                <p className="text-xs text-slate-500 font-semibold mb-4 leading-normal">
                  Saisissez vos coordonnées pour recevoir une note d'analyse d'adéquation gratuite conçue pour votre entreprise au Maroc.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); onDemoClick(id); }} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Votre Nom</label>
                    <div className="relative">
                      <User className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                      <input type="text" placeholder="Moffadel Alami" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Email professionnel</label>
                    <div className="relative">
                      <Mail className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                      <input type="email" placeholder="alami@entreprise.ma" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                      <input type="tel" placeholder="0661234567" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Entreprise & Effectif</label>
                    <div className="relative">
                      <Building2 className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                      <input type="text" placeholder="Casa Trading S.A." className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                    </div>
                  </div>

                  <button type="submit" className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#003B7A] text-xs font-extrabold text-white shadow hover:bg-[#007BFF] transition-all cursor-pointer">
                    <span>Envoyer ma question</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* 3. Related Articles Cards Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#007BFF] tracking-widest uppercase block mb-1">S'INSPIRER PLUS ENCORE</span>
              <h3 className="text-xl md:text-2xl font-black text-[#001B3A] tracking-tight">Lectures recommandées complémentaires :</h3>
            </div>
            <Link to="/blog" className="text-xs font-black text-[#007BFF] hover:text-[#003B7A] transition-colors flex items-center gap-1 group shrink-0">
              <span>Tous nos articles</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((rPost) => (
              <div 
                key={rPost.id}
                className="rounded-xl border border-slate-200 bg-[#f8fafc]/50 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-[#007BFF]/20 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={rPost.image} alt={rPost.title} referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 rounded bg-[#003B7A]/90 px-2 py-0.5 text-[8px] font-bold uppercase text-white tracking-widest">{rPost.category}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#001B3A] line-clamp-2 mb-2 hover:text-[#007BFF] transition-colors">
                      <Link to={`/blog/${rPost.id}`}>{rPost.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 font-semibold mb-4">{rPost.summary}</p>
                  </div>
                  <Link 
                    to={`/blog/${rPost.id}`}
                    className="inline-flex text-xs font-bold text-[#007BFF] hover:text-[#003B7A] items-center gap-1 self-start"
                  >
                    <span>Consulter l'article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavClick={() => { navigate("/"); }} onDemoClick={onDemoClick} />

    </div>
  );
}
