import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UiContext from "../contexts/UiContext";
import { Icon } from "../components/Layout";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { formatDate } from "../utils/formatDate";

interface PostContent {
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  image: string;
  readTime: string;
  author: string;
  paragraphs: string[];
  keyTakeaways: string[];
}

const detailedPosts: Record<string, { fr: PostContent; en: PostContent }> = {
  "scaling-infrastructure": {
    fr: {
      title: "Mise à l'échelle de l'infrastructure pour une architecture SaaS de nouvelle génération",
      category: "DevOps",
      categoryClass: "text-primary",
      date: "2024-10-24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OxB-G2Jo_EPMqOku7DWtwQvZOjdV0Eiomo4qISF_ekQkpv5GXvrGJzf7ikX-oQqGm-9AlGQ9UM6FnoXSY4sSaeC0SzcjTsAmsLbGpr_lBYw17F2VWtH0a3RU1VGVWH3V1ZBn23J8kx1rLfqS5Wo7Joha6apPNi58N7WpElkRgR1IkrInpiuBrqAtgkmIpq0COBsBCC-FsgKEdyhrkJbA9y9Y0nCZ6Wu6Bi0EGLNxxVI_lqtKlHfu7A_eUXODWP6_xFIs8PTkpeU",
      readTime: "8 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Dans l'écosystème SaaS moderne, la scalabilité ne consiste pas seulement à gérer davantage d'utilisateurs ; il s'agit de le faire de manière efficace, économique et transparente. Cet article présente l'approche technique que nous avons adoptée pour concevoir une infrastructure cloud capable de s'adapter automatiquement aux pics de charge sans intervention humaine.",
        "Nous avons basé notre architecture sur Kubernetes pour l'orchestration des conteneurs, couplé à Terraform pour une gestion déclarative des ressources cloud (Infrastructure as Code). L'un des plus grands défis consistait à configurer des règles d'autoscaling réactives (Horizontal Pod Autoscaler) capables d'anticiper la charge en fonction de métriques personnalisées, telles que le nombre de requêtes HTTP par seconde, plutôt que de simples métriques de processeur (CPU) ou de mémoire.",
        "Grâce à l'intégration d'un contrôleur de trafic performant et d'une répartition géographique sur plusieurs zones de disponibilité, nous avons réduit la latence moyenne à 120ms à l'échelle mondiale, tout en garantissant un taux de disponibilité de 99.99% lors des campagnes promotionnelles majeures de nos clients.",
        "Enfin, nous avons mis en place une surveillance en temps réel avec Prometheus et Grafana, ce qui nous permet d'identifier les goulets d'étranglement de base de données avant qu'ils ne se transforment en incidents."
      ],
      keyTakeaways: [
        "L'utilisation d'infrastructures immutables gérées par GitOps élimine les dérives de configuration.",
        "L'autoscaling doit être piloté par des métriques métier et de trafic plutôt que par la simple consommation de ressources physiques.",
        "La résilience passe par une distribution géographique active-active et des mécanismes de disjoncteur (Circuit Breaker)."
      ]
    },
    en: {
      title: "Scaling Infrastructure for Next-Gen SaaS Architecture",
      category: "DevOps",
      categoryClass: "text-primary",
      date: "2024-10-24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OxB-G2Jo_EPMqOku7DWtwQvZOjdV0Eiomo4qISF_ekQkpv5GXvrGJzf7ikX-oQqGm-9AlGQ9UM6FnoXSY4sSaeC0SzcjTsAmsLbGpr_lBYw17F2VWtH0a3RU1VGVWH3V1ZBn23J8kx1rLfqS5Wo7Joha6apPNi58N7WpElkRgR1IkrInpiuBrqAtgkmIpq0COBsBCC-FsgKEdyhrkJbA9y9Y0nCZ6Wu6Bi0EGLNxxVI_lqtKlHfu7A_eUXODWP6_xFIs8PTkpeU",
      readTime: "8 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "In the modern SaaS ecosystem, scalability is not just about handling more users; it is about doing so efficiently, cost-effectively, and seamlessly. This article presents the technical approach we took to design a cloud infrastructure capable of autoscaling to handle traffic spikes without human intervention.",
        "We based our architecture on Kubernetes for container orchestration, coupled with Terraform for declarative management of cloud resources (Infrastructure as Code). One of the greatest challenges was configuring responsive autoscaling rules (Horizontal Pod Autoscaler) that could anticipate load based on custom metrics, such as HTTP requests per second, rather than just simple CPU or memory utilization.",
        "By integrating a high-performance traffic controller and geographic distribution across multiple availability zones, we reduced average latency to 120ms globally, while guaranteeing a 99.99% availability rate during major promotional campaigns run by our clients.",
        "Finally, we set up real-time monitoring with Prometheus and Grafana, allowing us to identify database bottlenecks before they turn into major service outages."
      ],
      keyTakeaways: [
        "Immutable infrastructure managed via GitOps eliminates configuration drift entirely.",
        "Autoscaling should be driven by business and traffic metrics rather than just hardware resource utilization.",
        "Resilience requires active-active geographical distribution and implementation of circuit-breaker patterns."
      ]
    }
  },
  "gitops-speed-up-releases": {
    fr: {
      title: "Le cerveau humain vs l'Intelligence Artificielle : un modèle d'efficacité",
      category: "IA & Cerveau",
      categoryClass: "text-primary",
      date: "2024-07-13",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a54ca5d644e0c0f67046ac1/0214ef8cfd452dd80073c667940f7303.original.jpg",
      readTime: "4 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Le cerveau humain est une véritable merveille. Avec seulement environ 20 watts d'énergie, soit l'équivalent d'une simple lampe LED, il est capable d'apprendre, de communiquer, de créer, de résoudre des problèmes et de ressentir des émotions.",
        "Quand on sait que certains centres de calcul dédiés à l'IA consomment des mégawatts d'électricité pour effectuer des tâches similaires, on réalise à quel point notre cerveau reste un modèle d'efficacité énergétique et technologique incomparable.",
        "La technologie progresse à une vitesse impressionnante, mais notre cerveau demeure l'une des machines les plus fascinantes jamais connues. Qu'est-ce qui vous impressionne le plus : la puissance du cerveau humain ou celle de l'intelligence artificielle ?"
      ],
      keyTakeaways: [
        "Le cerveau consomme seulement 20W, contre des mégawatts pour les datacenters IA.",
        "Une efficacité énergétique biologique inégalable par le silicium moderne.",
        "La puissance de calcul de l'IA progresse mais nécessite une optimisation drastique."
      ]
    },
    en: {
      title: "Human Brain vs Artificial Intelligence: The Efficiency Model",
      category: "AI & Brain",
      categoryClass: "text-primary",
      date: "2024-07-13",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a54ca5d644e0c0f67046ac1/0214ef8cfd452dd80073c667940f7303.original.jpg",
      readTime: "4 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "The human brain is a true marvel. Running on just about 20 watts of energy—the equivalent of a simple LED light bulb—it is capable of learning, communicating, creating, solving complex problems, and feeling emotions.",
        "When you realize that some AI data centers consume megawatts of electricity to perform similar tasks, you understand how much of an energy-efficiency model our biological brain remains.",
        "Technology is advancing at a breakneck pace, but our brain remains one of the most fascinating machines ever known. What impresses you more: the power of the human brain or that of artificial intelligence?"
      ],
      keyTakeaways: [
        "The human brain runs on only 20W compared to megawatt-scale AI computing centers.",
        "Unmatched biological energy efficiency that silicon cannot replicate today.",
        "AI computing power is growing fast but faces a massive energy consumption challenge."
      ]
    }
  },
  "react-patterns-at-scale": {
    fr: {
      title: "Où vont réellement vos photos après avoir cliqué sur 'Enregistrer' ?",
      category: "Cloud Computing",
      categoryClass: "text-tertiary",
      date: "2024-07-02",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a469ac09a80af5b990484c8/477d05d5090e12b6f07520e588a59c47.original.jpg",
      readTime: "5 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Où vont réellement vos photos après avoir cliqué sur 'Enregistrer' ? Prenons un exemple simple : imaginez que vous possédiez un grand entrepôt. Au lieu de garder toutes vos affaires chez vous, vous les déposez dans cet entrepôt sécurisé. Vous pouvez y accéder quand vous le souhaitez, ajouter de nouveaux objets, en retirer, et louer plus d'espace si nécessaire.",
        "C'est exactement la logique du stockage dans le cloud. Chaque fois que vous sauvegardez une photo, envoyez un document ou enregistrez un fichier en ligne, ces données sont stockées dans d'immenses infrastructures distantes (datacenters) conçues pour les conserver de manière sécurisée et les rendre disponibles à tout moment.",
        "L'objectif n'est pas seulement de stocker. Il faut aussi que les données soient disponibles rapidement, protégées contre les pannes physiques et accessibles depuis n'importe où. C'est pour cette raison que les entreprises utilisent des architectures cloud résilientes plutôt que de conserver tous leurs fichiers sur un seul serveur physique local."
      ],
      keyTakeaways: [
        "Le cloud fonctionne comme un entrepôt distant sécurisé et extensible à la demande.",
        "Haute disponibilité et protection contre les pannes matérielles par la duplication.",
        "Accès instantané et sécurisé depuis n'importe quel appareil connecté."
      ]
    },
    en: {
      title: "Where do your photos actually go after you click 'Save'?",
      category: "Cloud Computing",
      categoryClass: "text-tertiary",
      date: "2024-07-02",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a469ac09a80af5b990484c8/477d05d5090e12b6f07520e588a59c47.original.jpg",
      readTime: "5 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "Where do your photos actually go after you click 'Save'? Let's use a simple analogy: imagine you owned a large warehouse. Instead of keeping all your belongings at home, you drop them off at this secure warehouse. You can access them whenever you want, add new items, remove them, and rent more space if needed.",
        "This is exactly the logic of cloud storage. Every time you back up a photo, send a document, or save a file online, this data is stored in massive remote infrastructures (datacenters) designed to keep them safe and available at all times.",
        "The goal is not just storage. Data must also be quickly available, protected against hardware failures, and accessible from anywhere. That's why businesses use resilient cloud architectures rather than keeping all files on a single local physical server."
      ],
      keyTakeaways: [
        "Cloud storage acts as a secure, scalable remote warehouse on demand.",
        "High availability and physical hardware resilience through data duplication.",
        "Instant and secure access from any connected device worldwide."
      ]
    }
  },
  "kubecon-2024-insights": {
    fr: {
      title: "Retour d'expérience à l'Orange Digital Center Kinshasa",
      category: "Événements",
      categoryClass: "text-secondary-fixed",
      date: "2024-06-27",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a4009ef8f08ffc4be04f2ef/af121858c6dd5e12755d0d72a215c8a5.original.jpg",
      readTime: "7 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Apprendre à coder est une base, construire des solutions est un métier. Aux côtés de mon collègue Franck Kapuya, nous avons eu le plaisir d'échanger avec les apprenants du parcours de l'école du code d'Orange Digital Center Kinshasa autour d'un sujet essentiel : ce qui fait réellement la différence après une formation en développement.",
        "Au cours de cette session, nous avons partagé notre expérience sur plusieurs aspects du terrain : comprendre le besoin utilisateur avant d'écrire la moindre ligne de code, concevoir une architecture logicielle claire et maintenable, et adopter de bonnes pratiques avec Git, les tests et la sécurité.",
        "Nous avons également discuté de l'utilisation de l'IA comme d'un assistant et non d'un pilote automatique, et de l'importance de développer des habitudes professionnelles rigoureuses. Un grand merci à Orange Digital Center pour l'accueil et aux apprenants pour leur participation active."
      ],
      keyTakeaways: [
        "Comprendre le besoin métier est plus important que d'écrire du code brut.",
        "L'importance d'une architecture maintenable et de bonnes pratiques de développement.",
        "L'IA comme copilote et non comme remplacement de la réflexion logique."
      ]
    },
    en: {
      title: "Feedback from Orange Digital Center Kinshasa",
      category: "Events",
      categoryClass: "text-secondary-fixed",
      date: "2024-06-27",
      image: "https://buffer-media-uploads.s3.amazonaws.com/65a973e80411c231f70241dd/6a4009ef8f08ffc4be04f2ef/af121858c6dd5e12755d0d72a215c8a5.original.jpg",
      readTime: "7 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "Learning to code is a foundation, building software solutions is a profession. Alongside my colleague Franck Kapuya, we had the pleasure of discussing with the students of the Orange Digital Center Kinshasa coding school about a vital topic: what actually makes a difference after finishing a development program.",
        "During this session, we shared our field experience on several key aspects: understanding business requirements before writing a single line of code, designing clean and maintainable software architectures, and adopting best practices with Git, testing, and system security.",
        "We also discussed utilizing AI as a co-pilot rather than an autopilot, and the value of cultivating rigorous professional habits. A huge thanks to Orange Digital Center for the warm welcome and to the students for their active engagement."
      ],
      keyTakeaways: [
        "Understanding business requirements is more critical than raw coding.",
        "The value of clean code, structured architectures, and rigorous version control.",
        "AI should be treated as an assistant, not a replacement for logic."
      ]
    }
  }
};

export function BlogPostDetailPage() {
  useRevealOnScroll();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useContext(UiContext);

  const postData = id ? detailedPosts[id] : null;

  if (!postData) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <h1 className="font-display-lg text-on-surface mb-4">Post Not Found</h1>
        <p className="text-text-muted mb-8">The blog article you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-on-primary-container hover:opacity-90 transition-opacity"
        >
          <Icon name="arrow_back" />
          <span>Back to Blog</span>
        </button>
      </div>
    );
  }

  const post = lang === "fr" ? postData.fr : postData.en;
  const locale = lang === "fr" ? "fr-FR" : "en-US";

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative">
      <div className="developer-dot-pattern" />
      <main className="pb-24 pt-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-container-max-width px-margin-desktop mb-12">
          <button
            onClick={() => navigate("/blog")}
            className="group inline-flex items-center gap-2 font-label-md text-text-muted hover:text-primary transition-colors py-2"
          >
            <Icon name="arrow_back" className="transition-transform group-hover:-translate-x-1" />
            <span>{lang === "fr" ? "Retour aux articles" : "Back to Articles"}</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="reveal mx-auto max-w-container-max-width px-margin-desktop mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`rounded-full border border-on-surface/10 bg-surface px-3 py-1 font-label-sm ${post.categoryClass}`}>
              {post.category}
            </span>
            <span className="text-text-muted font-label-sm">{post.readTime}</span>
            <span className="text-text-muted">•</span>
            <span className="text-text-muted font-label-sm">{formatDate(post.date, locale)}</span>
          </div>

          <h1 className="font-display-lg leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary-container">
              <img src="/profile_facebook.jpg" alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <p className="font-label-md font-bold">{post.author}</p>
              <p className="text-sm text-text-muted">{lang === "fr" ? "Ingénieur Full Stack & DevOps" : "Full Stack & DevOps Engineer"}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <section className="reveal mx-auto max-w-container-max-width px-margin-desktop mb-16" data-delay="100">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl border border-on-surface/10 bg-surface-container">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </section>

        {/* Article Body */}
        <section className="mx-auto max-w-[800px] px-margin-desktop reveal" data-delay="200">
          <div className="space-y-6 text-on-surface/90 leading-relaxed font-body-lg">
            {post.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways Section */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary-container/10 p-8">
            <h3 className="font-headline-md text-primary mb-6 flex items-center gap-2">
              <Icon name="tips_and_updates" />
              <span>{lang === "fr" ? "Points clés à retenir" : "Key Takeaways"}</span>
            </h3>
            <ul className="space-y-4">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <Icon name="check" className="text-primary mt-1" />
                  <p className="text-on-surface">{takeaway}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
