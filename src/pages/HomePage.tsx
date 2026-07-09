import { Icon } from "../components/Layout";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useT } from "../i18n";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

/**
 * Cycles through an array of phrases with a slide-from-bottom / slide-out-top animation.
 * Each phrase gets a unique gradient color.
 */
function RotatingHeroLine({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % phrases.length);
    setAnimKey((k) => k + 1);
  }, [phrases.length]);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  // Gradient colors for each phrase - matching cover/profile blue & cyan
  const gradients = [
    "from-[#0052cc] to-[#00b0ff]",       // royal blue → light cyan
    "from-[#0033aa] to-[#00d2ff]",       // navy → sky blue
    "from-[#1a73e8] to-[#00f2fe]",       // electric blue → neon cyan
    "from-[#002288] to-[#38f9d7]",       // deep dark blue → tealish cyan
  ];

  return (
    <span className="inline-flex overflow-hidden align-bottom" style={{ height: "1.15em" }}>
      <span
        key={animKey}
        className={`hero-rotating-text bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent`}
      >
        {phrases[index]}
      </span>
    </span>
  );
}


const coreProjects = [
  {
    key: "core_project_1",
    tags: ["React JS", "PostgreSQL", "Mysql", "Microservices", "Docker", "TailwindCSS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdze4Duol0gwMJqoXnmwVkITq5WeaeVfG1Bdp8Ti8lye8vF1ctTg8KFIibFiwhf2SdewbVHveNtlYjH1eHXv38h4-04QSJpBLiMZU5W-vh3_VXfVpoDd82fVxMkoAm4Rqpo4Li0LrPtx9L3LSN_tZpvaomLbKXkFNV1mli5RzSP62jSnwHwkb80QRF9DR31sBCmsQ_W1PNiQjba76wPkCpJn_wcefPovnlJDq4YaKCwDwiu1b0ZMpZNwvqCxh0HntJAKk5ZMvn7To",
  },
  {
    key: "core_project_2",
    tags: ["Python", "React", "CI/CD"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLEdAZOO3VoXyTZ2gZJVfWpjI6UwSt9ZaDUsivR75S8gocJik6pl82iz0bJ5kjLtqefYhnnGkTgDUhuHPcF2Vqkno-GpjKdSEcSrpVbJHpoh3qiYa6UFJxuzrIenO2Tp69bWvEnqnqMQSYul_N7gFLsdX28-O06ci8Iz-VBqmu-HLlMv4W1ztnE3LNZ0YiIDCayoLfaJ_jCtmPZekKlwRn8IweF6p9CZ1TedKPjcPK3CyNVUX2sdhr6KDS6Cy36VZl6RlHGNAz_Ok",
  },
];

const services = [
  {
    titleKey: "fullstack_title",
    descKey: "fullstack_desc",
    tags: ["Microservices", "API Design", "React/Node"],
    icon: "layers",
    featured: false,
  },
  {
    titleKey: "devops_title",
    descKey: "devops_desc",
    tags: ["Jenkins/GitLab", "Automation"],
    icon: "settings_input_component",
    featured: true,
  },
  {
    titleKey: "cloud_title",
    descKey: "cloud_desc",
    tags: ["Terraform", "Kubernetes", "IaC"],
    icon: "cloud",
    featured: false,
  },
];

const workflowSteps = [
  { step: "1", titleKey: "workflow_step_1_title", descKey: "workflow_step_1_desc" },
  { step: "2", titleKey: "workflow_step_2_title", descKey: "workflow_step_2_desc" },
  { step: "3", titleKey: "workflow_step_3_title", descKey: "workflow_step_3_desc" },
  { step: "4", titleKey: "workflow_step_4_title", descKey: "workflow_step_4_desc" },
];

export function HomePage() {
  useRevealOnScroll();
  const t = useT();

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-8 sm:px-margin-desktop sm:py-12 md:py-20">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-surface-container px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-label-sm text-text-muted">{t("available")}</span>
              </div>

              <h1 className="mb-6 max-w-xl leading-[1.1] font-display-lg text-on-surface">
                {t("heroLine1")}{" "}
                <span className="text-on-surface/50"></span>
                <RotatingHeroLine
                  phrases={[
                    t("heroRotate1"),
                    t("heroRotate2"),
                    t("heroRotate3"),
                    t("heroRotate4"),
                  ]}
                />
                <span className="text-on-surface/50">.</span>
              </h1>

              <p className="mb-8 max-w-lg text-[16px] md:text-[17px] font-body-lg text-text-muted">{t("heroLead")}</p>

              <div className="flex flex-wrap gap-3">
                <Link to="/works" className="rounded-full bg-primary-container px-5 py-3 text-sm font-label-md text-on-primary-container sm:px-6">
                  {t("works")}
                </Link>
                <Link to="/contact" className="rounded-full border border-black/10 bg-surface-container px-5 py-3 text-sm font-label-md text-on-surface sm:px-6">
                  {t("contact")}
                </Link>
                {/* <a href="/CV_Exaucé_Umba.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-surface-container px-5 py-3 text-sm font-label-md text-on-surface transition hover:bg-surface-container-highest sm:px-6">
                  {t("download_cv")}
                </a> */}
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -bottom-10 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                
                {/* Image */}
                <img src="/moi.png" alt="Exaucé Umba" className="relative h-72 w-full max-w-md rounded-3xl object-cover object-top sm:h-96 md:h-[400px] lg:h-[420px] lg:w-[420px]" />
                
                {/* Gradient overlay to fade out the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none rounded-b-3xl" />
                
                {/* Overlay Card - centered on the bottom boundary line */}
                <div className="absolute bottom-0 left-1/2 z-10 w-[85%] max-w-[300px] -translate-x-1/2 translate-y-1/2 rounded-2xl bg-surface-elevated/85 border border-on-surface/10 p-3 sm:p-4 text-center text-on-surface backdrop-blur-md shadow-xl">
                  <p className="mb-3 font-body-md text-on-surface text-xs sm:text-sm">{t("heroLead_short")}</p>
                  <Link to="/contact" className="inline-block rounded-full bg-primary px-5 py-2 text-xs sm:text-sm font-label-md text-white shadow-md transition-transform hover:scale-95">
                    {t("emailMe")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop">
          <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <h2 className="font-headline-lg">{t("core_projects")}</h2>
            <Link to="/works" className="group flex items-center gap-2 font-label-md text-text-muted transition-colors hover:text-on-surface">
              {t("github_repo")}
              <Icon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {coreProjects.map((project) => (
              <div
                key={project.key}
                className="group relative aspect-4/3 overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated md:aspect-square"
              >
                <img src={project.image} alt={t(project.key + "_title")} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 sm:p-8">
                  <h3 className="font-headline-md mb-2 text-white">{t(project.key + "_title")}</h3>
                  <p className="mb-4 line-clamp-2 font-body-md text-white/80">{t(project.key + "_desc")}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 border border-white/20 px-3 py-1 font-label-sm text-white backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal mx-auto max-w-container-max-width px-margin-desktop py-16">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <div className="flex aspect-square flex-col justify-between rounded-xl bg-surface-elevated border border-black/10 p-8 md:aspect-auto">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <Icon name="terminal" className="text-4xl text-on-surface" />
                  <Icon name="check_circle" className="text-green-600" />
                </div>
                <h4 className="font-headline-md mb-4 text-on-surface">{t("modern_tech_stack")}</h4>
                <p className="font-body-md text-text-muted">{t("modern_tech_stack_desc")}</p>
              </div>
              <div className="mt-8 flex gap-2 overflow-hidden">
                {["AWS", "TERRAFORM", "GCP"].map((tag) => (
                  <div key={tag} className="rounded border border-black/10 px-3 py-1 text-xs font-bold text-on-surface">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex aspect-square flex-col justify-between rounded-xl border border-white/10 bg-surface-elevated p-8 md:aspect-auto">
              <Icon name="code" className="mb-8 text-4xl text-on-surface/20" filled />
              <p className="font-headline-md mb-8 leading-snug">{t("quote_block")}</p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary-container">
                  EU
                </div>
                <div>
                  <p className="font-label-md font-bold">{t("engineer_name")}</p>
                  <p className="font-label-sm text-text-muted">{t("engineer_role")}</p>
                </div>
              </div>
            </div>

            <div className="flex aspect-square flex-col items-center justify-center rounded-xl border border-white/10 bg-surface-container-high p-8 text-center md:aspect-auto">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 p-6">
                <span className="font-display-lg">99.9%</span>
              </div>
              <p className="font-headline-md mb-2">{t("uptime_delivery")}</p>
              <div className="flex items-center gap-2 text-primary">
                <Icon name="bolt" className="text-[18px]" />
                <span className="font-label-md uppercase tracking-widest">{t("automation_first")}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop sm:py-24">
          <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
            <span className="font-label-sm uppercase tracking-widest text-text-muted">{t("expertise")}</span>
            <p className="max-w-2xl font-headline-lg">{t("expertise_desc")} <span className="text-primary">{t("expertise_desc1")}</span> <span>{t("expertise_desc2")}</span></p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className={`rounded-2xl p-8 transition-all ${service.featured
                  ? "z-10 scale-105 border border-primary/30 bg-primary-container shadow-2xl shadow-primary/20"
                  : "group border border-primary/20 bg-surface-container hover:border-primary/30"
                  }`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.featured ? "bg-primary/20" : "bg-surface-container-highest"
                      }`}
                  >
                    <Icon
                      name={service.icon}
                      className={service.featured ? "text-on-primary-container" : "text-primary"}
                    />
                  </div>
                </div>
                <h3 className={`font-headline-md mb-4 ${service.featured ? "text-on-primary-container" : "text-on-surface"}`}>
                  {t(service.titleKey)}
                </h3>
                <p className={`mb-8 font-body-md ${service.featured ? "text-on-primary-container/80" : "text-text-muted"}`}>
                  {t(service.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 font-label-sm ${service.featured ? "bg-primary/20 text-on-primary-container" : "bg-primary/10 text-primary"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal relative overflow-hidden bg-surface-container-lowest py-16 sm:py-24">
          <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile sm:px-margin-desktop">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:gap-12">
              <span className="font-label-sm uppercase tracking-widest text-text-muted">
                Engineering Process
              </span>
              <div className="max-w-3xl">
                <h2 className="mb-6 font-headline-lg">
                  {t("workflow_step_1_title")} <span className="text-primary">{t("workflow_step_2_title")}</span>
                </h2>
                <p className="font-body-lg text-text-muted">{t("workflow_step_1_desc")}</p>
              </div>
            </div>
            <div className="space-y-4">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/8"
                >
                  <div className="flex items-start gap-8">
                    <span className="font-display-lg opacity-20 transition-opacity group-hover:opacity-100">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-headline-md mb-2">{t(item.titleKey)}</h3>
                      <p className="max-w-2xl font-body-md text-text-muted">{t(item.descKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mx-auto mb-16 max-w-container-max-width px-margin-mobile py-16 sm:px-margin-desktop sm:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated p-8 text-center sm:p-16">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_-20%,#7430f733,transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="mb-12 font-display-lg">
                {t("start_project")} <br className="hidden md:block" />
              </h2>
              <Link to="/contact" className="inline-block rounded-full bg-primary px-12 py-4 font-label-md text-white transition-transform hover:scale-105">
                {t("start_project")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
