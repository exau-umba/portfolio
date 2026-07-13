import { Icon } from "../components/Layout";
import { useRevealOnScroll, useWorkCardGlow } from "../hooks/useRevealOnScroll";
import { useT } from "../i18n";

const stats = [
  { labelKey: "uptime_target", value: "99.9%" },
  { labelKey: "max_latency", value: "120ms" },
  { labelKey: "test_coverage", value: "94%" },
  { labelKey: "deployments_wk", value: "40+" },
];

export function WorksPage() {
  useRevealOnScroll();
  useWorkCardGlow();
  const t = useT();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <main className="pb-24 pt-16">
        <header className="reveal mx-auto mb-24 max-w-container-max-width px-margin-desktop">
          <div className="max-w-3xl">
            <h1 className="font-display-lg mb-6 leading-tight">
              {t("works_title")} <span className="text-primary">.</span>
            </h1>
            <p className="font-body-lg text-text-muted">{t("works_intro")}</p>
          </div>
        </header>

        <section className="mx-auto grid max-w-container-max-width grid-cols-1 gap-gutter px-margin-desktop md:grid-cols-12">
          <div className="work-card group reveal relative overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:col-span-8">
            <div className="work-card-glow" />
            <div className="relative z-10 flex h-full flex-col p-10">
              <div className="mb-8">
                <span className="mb-4 inline-block rounded-full bg-primary-container/20 px-3 py-1 font-label-sm text-primary">
                  {t("arch_security")}
                </span>
                <h2 className="font-headline-lg mb-4 text-on-surface">{t("work_ncd_title")}</h2>
                <p className="mb-6 max-w-xl font-body-md text-text-muted">{t("work_ncd_desc")}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["Java", "Docker", "PostgreSQL", "Microservices", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-on-surface/5 bg-surface-container-highest/50 px-3.5 py-1 font-label-sm text-text-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto overflow-hidden rounded-lg">
                <div className="relative aspect-video bg-surface-container">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdze4Duol0gwMJqoXnmwVkITq5WeaeVfG1Bdp8Ti8lye8vF1ctTg8KFIibFiwhf2SdewbVHveNtlYjH1eHXv38h4-04QSJpBLiMZU5W-vh3_VXfVpoDd82fVxMkoAm4Rqpo4Li0LrPtx9L3LSN_tZpvaomLbKXkFNV1mli5RzSP62jSnwHwkb80QRF9DR31sBCmsQ_W1PNiQjba76wPkCpJn_wcefPovnlJDq4YaKCwDwiu1b0ZMpZNwvqCxh0HntJAKk5ZMvn7To"
                    alt="Système National de Certification dashboard"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface-elevated/80 to-transparent" />
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <a href="#" className="group/link flex items-center gap-2 font-label-md text-primary">
                  {t("case_study")}
                  <Icon name="arrow_forward" className="transition-transform group-hover/link:translate-x-1" />
                </a>
                <div className="flex gap-4">
                  <Icon name="lock" className="cursor-pointer text-text-muted hover:text-on-surface transition-colors" />
                  <Icon name="visibility" className="cursor-pointer text-text-muted hover:text-on-surface transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="work-card group reveal relative overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:col-span-4">
            <div className="work-card-glow" />
            <div className="relative z-10 flex h-full flex-col p-8">
              <div className="mb-6">
                <span className="mb-4 inline-block rounded-full bg-primary-container/20 px-3 py-1 font-label-sm text-primary">
                  {t("optimization_tool")}
                </span>
                <h2 className="font-headline-md mb-3 text-on-surface">{t("work_bbopt_title")}</h2>
                <p className="mb-6 font-body-md text-text-muted">{t("work_bbopt_desc")}</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Python", "DevOps"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-on-surface/5 bg-surface-container-highest/50 px-3.5 py-1 font-label-sm text-text-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 grow">
                <div className="relative h-64 overflow-hidden rounded-lg bg-surface-container">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLEdAZOO3VoXyTZ2gZJVfWpjI6UwSt9ZaDUsivR75S8gocJik6pl82iz0bJ5kjLtqefYhnnGkTgDUhuHPcF2Vqkno-GpjKdSEcSrpVbJHpoh3qiYa6UFJxuzrIenO2Tp69bWvEnqnqMQSYul_N7gFLsdX28-O06ci8Iz-VBqmu-HLlMv4W1ztnE3LNZ0YiIDCayoLfaJ_jCtmPZekKlwRn8IweF6p9CZ1TedKPjcPK3CyNVUX2sdhr6KDS6Cy36VZl6RlHGNAz_Ok"
                    alt="Bbopt interface"
                  />
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="group/link flex items-center gap-2 font-label-md text-primary">
                  {t("view_github")}
                  <Icon name="terminal" className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="work-card group reveal relative overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:col-span-5">
            <div className="work-card-glow" />
            <div className="p-8 flex flex-col h-full justify-between">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary-container/20 px-3 py-1 font-label-sm text-primary">
                  {t("public_registry")}
                </span>
                <h2 className="font-headline-md mb-3 text-on-surface">{t("work_annuaire_title")}</h2>
                <p className="mb-6 font-body-md text-text-muted">{t("work_annuaire_desc")}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["React", "Node.js", "PostgreSQL", "Docker"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-on-surface/5 bg-surface-container-highest/50 px-3.5 py-1 font-label-sm text-text-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-48 overflow-hidden rounded-lg bg-surface-container mb-6">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/annuaire_occ.png"
                    alt="Annuaire de Certification"
                  />
                </div>
              </div>
              <div>
                <a href="https://annuaire.occdcpl.com" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 font-label-md text-primary">
                  {t("visit_site")}
                  <Icon name="arrow_forward" className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="work-card group reveal relative overflow-hidden rounded-xl border border-on-surface/10 bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:col-span-7">
            <div className="work-card-glow" />
            <div className="flex h-full items-center gap-8 p-10">
              <div className="w-1/2 flex flex-col justify-between h-full">
                <div>
                  <span className="mb-4 inline-block rounded-full bg-primary-container/20 px-3 py-1 font-label-sm text-primary">
                    {t("e_commerce")}
                  </span>
                  <h2 className="font-headline-md mb-3 text-on-surface">{t("work_dismoipapa_title")}</h2>
                  <p className="mb-6 font-body-md text-text-muted">{t("work_dismoipapa_desc")}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Next.js", "WooCommerce", "Tailwind CSS"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-on-surface/5 bg-surface-container-highest/50 px-3.5 py-1 font-label-sm text-text-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <a href="https://dismoipapa.shop" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 font-label-md text-primary">
                    {t("visit_site")}
                    <Icon name="arrow_forward" className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="w-1/2 h-full overflow-hidden rounded-lg bg-surface-container min-h-75 flex items-center justify-center">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/dismoipapa.png"
                  alt="Dis-moi papa"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto mt-32 max-w-container-max-width px-margin-desktop">
          <h3 className="font-headline-md mb-12 text-on-surface">{t("engineering_methodology")}</h3>
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="rounded-xl border border-on-surface/10 bg-surface-container p-8">
                <p className="mb-2 font-label-sm text-primary">{t(stat.labelKey)}</p>
                <h4 className="font-headline-lg font-bold text-on-surface">{stat.value}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
