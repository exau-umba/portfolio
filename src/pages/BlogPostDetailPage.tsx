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
      title: "GitOps : accélérer vos releases en toute sécurité",
      category: "DevOps",
      categoryClass: "text-primary",
      date: "2024-10-18",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KqUsD8fZnBRL0gN0M2_sVG-PL2nZLBiVSe3nI0BZNxnGCbocjFPuIVqVk1tEyXw-LjJ8F-V713rt3Jgd4q8Atv1QKTQdfMvbi7OXDXSgh3S7F3ANQHEVXwChZPTV-lKNvfVAfc-h4GZlpWFu36j5ojPx2XosTYyoZjf0ueqijBaGoofp3X-iplDUSl_ptmgw0GOlsU5vUQfPDiSKw1_vvKT_C6oh6FiU1LIwGdHa25si_qrmBMrgYHri43ISecHMC1xuWCt_004",
      readTime: "6 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Le déploiement continu a révolutionné la façon dont nous livrons le logiciel, mais il apporte son lot de risques. C'est ici que GitOps intervient en faisant de Git l'unique source de vérité pour l'ensemble du système opérationnel.",
        "Avec GitOps, toute modification d'infrastructure ou de configuration logicielle passe par une demande de fusion (Pull Request). Une fois approuvée, un agent réconciliateur (tel qu'ArgoCD) applique automatiquement l'état décrit dans Git au cluster de destination. Cela évite les accès manuels directs sur les clusters et garantit une traçabilité totale.",
        "Si un bug est introduit, le retour à la version précédente (rollback) est aussi simple qu'un 'git revert'. La sécurité s'en trouve renforcée puisque les identifiants d'accès à l'infrastructure de production ne quittent jamais le cluster."
      ],
      keyTakeaways: [
        "Git devient la console de commande centrale de vos infrastructures cloud.",
        "Les rollbacks sont instantanés et traçables par l'historique des commits Git.",
        "L'automatisation renforce la sécurité en limitant les interventions humaines manuelles."
      ]
    },
    en: {
      title: "GitOps: Speed up releases safely",
      category: "DevOps",
      categoryClass: "text-primary",
      date: "2024-10-18",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KqUsD8fZnBRL0gN0M2_sVG-PL2nZLBiVSe3nI0BZNxnGCbocjFPuIVqVk1tEyXw-LjJ8F-V713rt3Jgd4q8Atv1QKTQdfMvbi7OXDXSgh3S7F3ANQHEVXwChZPTV-lKNvfVAfc-h4GZlpWFu36j5ojPx2XosTYyoZjf0ueqijBaGoofp3X-iplDUSl_ptmgw0GOlsU5vUQfPDiSKw1_vvKT_C6oh6FiU1LIwGdHa25si_qrmBMrgYHri43ISecHMC1xuWCt_004",
      readTime: "6 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "Continuous delivery has revolutionized how we ship software, but it also brings risks. This is where GitOps steps in, making Git the single source of truth for the entire operational environment.",
        "Under a GitOps workflow, any infrastructure or application configuration change is proposed via a Pull Request. Once approved, a reconciliation agent (such as ArgoCD) automatically syncs the cluster state with the Git definition. This removes the need for direct cluster access and ensures absolute traceability.",
        "If a bug is introduced, rolling back is as easy as executing a 'git revert'. Security is inherently improved because production access credentials never need to leave the targeted cluster."
      ],
      keyTakeaways: [
        "Git acts as the central control plane for all your cloud environments.",
        "Rollbacks are instantaneous and trackable through Git commit history.",
        "Automation improves security boundaries by limiting manual runtime access."
      ]
    }
  },
  "react-patterns-at-scale": {
    fr: {
      title: "Patterns React modernes pour l'échelle",
      category: "Full-Stack",
      categoryClass: "text-tertiary",
      date: "2024-10-12",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLHtfsVQpUbTXNA-FTa_ExJ7DjKRKW4ZawC4oI-toZhb15nRR9Urx2vrcjQb-MWWScopPnDl-XL5xZEXXqH4TsKFH2nzf-YD-Dbla0VZAS9qUU0RmZrMlUsL6vrn3T14at9Arhr6nzMVwm0p1eWKo6GrK8HSLmwtmKkoSDwvPpFvFsfQFaO4-B0KURY-DaTI8qgctsun-sGemkDVgIpjHbUOTPS76ZO6MbUr91igNu-jb2PS8_JJS9ZpztJI0CdbxB2g0-yv9TXOc",
      readTime: "5 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "Gérer le code React sur un projet d'envergure demande une discipline stricte sur la séparation des responsabilités. Cet article explore les meilleurs choix de conception pour maintenir un codebase propre et évolutif.",
        "Nous analysons la création de hooks personnalisés réutilisables qui isolent la logique métier des composants visuels. De plus, nous étudions l'utilisation sélective des Contextes React pour éviter les re-rendus inutiles et l'importance du chargement dynamique pour réduire le bundle de démarrage.",
        "En appliquant ces principes, nous avons réduit la taille moyenne de nos pages de 40% et grandement simplifié l'écriture des tests unitaires."
      ],
      keyTakeaways: [
        "L'isolation de la logique métier dans des hooks personnalisés simplifie le refactoring.",
        "Le code splitting via React.lazy et Suspense améliore grandement le temps de premier affichage (FCP).",
        "Optimiser l'usage des Contextes évite les cascades de re-rendus inutiles."
      ]
    },
    en: {
      title: "Modern React Patterns at Scale",
      category: "Full-Stack",
      categoryClass: "text-tertiary",
      date: "2024-10-12",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLHtfsVQpUbTXNA-FTa_ExJ7DjKRKW4ZawC4oI-toZhb15nRR9Urx2vrcjQb-MWWScopPnDl-XL5xZEXXqH4TsKFH2nzf-YD-Dbla0VZAS9qUU0RmZrMlUsL6vrn3T14at9Arhr6nzMVwm0p1eWKo6GrK8HSLmwtmKkoSDwvPpFvFsfQFaO4-B0KURY-DaTI8qgctsun-sGemkDVgIpjHbUOTPS76ZO6MbUr91igNu-jb2PS8_JJS9ZpztJI0CdbxB2g0-yv9TXOc",
      readTime: "5 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "Managing React code at scale requires strict discipline around separation of concerns. This article explores key architectural choices to keep a growing codebase clean and maintainable.",
        "We discuss implementing custom hooks that isolate complex business state logic from render components. We also touch on optimizing React Context usage to prevent excessive re-renders and the importance of lazy loading modules to keep initial bundle sizes low.",
        "Applying these patterns allowed us to reduce average page weights by 40% while making component testing significantly more straightforward."
      ],
      keyTakeaways: [
        "Decoupled state logic in custom hooks simplifies future component changes.",
        "Code splitting with dynamic imports improves Core Web Vitals like First Contentful Paint.",
        "Proper React Context grouping limits global render triggers."
      ]
    }
  },
  "kubecon-2024-insights": {
    fr: {
      title: "KubeCon 2024 : insights clés",
      category: "Événements",
      categoryClass: "text-secondary-fixed",
      date: "2024-09-28",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqqa6Aa7IfF0qTQqNtwgYGbZ8cUpJZ5LvuAUNbyEO6mDMJPm9s8Kkgy5lDKIfdEzmngTb9_2Wzgt2__J0aP5UbWB19ap-imSmeFlnwF3sCniV_68PyLGfSakJX8YKz1GlQHu0WMSTi7Y3qekBSKTvfsZIpb57_Td2VadOb3jGjPcoYM7qlhgWvQhhKjIEoJvYRpgYVMOmp9Wn3Gfi7slmpN-NgZ_OdnrUoz6LULMjK3jTtBEkdcIzCc7HL88qE678v1rDBJTTK6o",
      readTime: "7 min de lecture",
      author: "Exaucé Umba",
      paragraphs: [
        "La KubeCon + CloudNativeCon Europe 2024 a mis en lumière les changements majeurs qui s'opèrent dans le monde de l'ingénierie système et des plateformes. Cet événement a réuni des milliers d'experts pour échanger sur les nouvelles directions du cloud-native.",
        "Cette année, les deux sujets dominants étaient l'intégration des charges de travail IA/Machine Learning sur Kubernetes, et la démocratisation de WebAssembly (Wasm) comme alternative ultra-légère aux conteneurs Docker traditionnels.",
        "Le Platform Engineering s'impose désormais comme une discipline essentielle pour fournir aux équipes de développement des portails en libre-service (Internal Developer Platforms) réduisant la friction opérationnelle au quotidien."
      ],
      keyTakeaways: [
        "Kubernetes s'adapte de plus en plus pour devenir l'orchestrateur de prédilection des GPUs.",
        "WebAssembly (Wasm) prend de l'ampleur pour des microservices légers et instantanés.",
        "L'expérience développeur (DevEx) et le Platform Engineering sont les priorités des organisations modernes."
      ]
    },
    en: {
      title: "KubeCon 2024: Key Insights",
      category: "Events",
      categoryClass: "text-secondary-fixed",
      date: "2024-09-28",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqqa6Aa7IfF0qTQqNtwgYGbZ8cUpJZ5LvuAUNbyEO6mDMJPm9s8Kkgy5lDKIfdEzmngTb9_2Wzgt2__J0aP5UbWB19ap-imSmeFlnwF3sCniV_68PyLGfSakJX8YKz1GlQHu0WMSTi7Y3qekBSKTvfsZIpb57_Td2VadOb3jGjPcoYM7qlhgWvQhhKjIEoJvYRpgYVMOmp9Wn3Gfi7slmpN-NgZ_OdnrUoz6LULMjK3jTtBEkdcIzCc7HL88qE678v1rDBJTTK6o",
      readTime: "7 min read",
      author: "Exaucé Umba",
      paragraphs: [
        "KubeCon + CloudNativeCon Europe 2024 highlighted the major shifts happening in system engineering and platform architectures. The event brought together thousands of professionals to discuss the future of cloud-native development.",
        "This year, two primary topics stole the spotlight: deploying AI/ML workloads natively on Kubernetes, and the rise of WebAssembly (Wasm) as a super lightweight alternative to traditional container systems like Docker.",
        "Platform Engineering continues to solidify its role as a key methodology, offering developer portals (IDPs) that reduce infrastructure friction and improve daily velocity."
      ],
      keyTakeaways: [
        "Kubernetes continues to evolve its orchestration patterns for GPU allocation.",
        "Wasm is maturing rapidly for low-latency, edge computing runtime cases.",
        "Developer Experience (DevEx) and developer-first platforms are now a major focus for engineering teams."
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
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <main className="pb-24 pt-8">
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
              EU
            </div>
            <div>
              <p className="font-label-md font-bold">{post.author}</p>
              <p className="text-sm text-text-muted">{lang === "fr" ? "Ingénieur Cloud & DevOps" : "Cloud & DevOps Engineer"}</p>
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
