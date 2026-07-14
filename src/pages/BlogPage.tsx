import { Icon } from "../components/Layout";
import { useT } from "../i18n";
import { useContext } from "react";
import UiContext from "../contexts/UiContext";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const blogPosts = [
  {
    id: "gitops-speed-up-releases",
    categoryKey: "devops",
    categoryClass: "text-primary",
    date: "2024-10-18",
    titleKey: "blog_post_1_title",
    excerptKey: "blog_post_1_excerpt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0KqUsD8fZnBRL0gN0M2_sVG-PL2nZLBiVSe3nI0BZNxnGCbocjFPuIVqVk1tEyXw-LjJ8F-V713rt3Jgd4q8Atv1QKTQdfMvbi7OXDXSgh3S7F3ANQHEVXwChZPTV-lKNvfVAfc-h4GZlpWFu36j5ojPx2XosTYyoZjf0ueqijBaGoofp3X-iplDUSl_ptmgw0GOlsU5vUQfPDiSKw1_vvKT_C6oh6FiU1LIwGdHa25si_qrmBMrgYHri43ISecHMC1xuWCt_004",
  },
  {
    id: "react-patterns-at-scale",
    categoryKey: "fullstack",
    categoryClass: "text-tertiary",
    date: "2024-10-12",
    titleKey: "blog_post_2_title",
    excerptKey: "blog_post_2_excerpt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLHtfsVQpUbTXNA-FTa_ExJ7DjKRKW4ZawC4oI-toZhb15nRR9Urx2vrcjQb-MWWScopPnDl-XL5xZEXXqH4TsKFH2nzf-YD-Dbla0VZAS9qUU0RmZrMlUsL6vrn3T14at9Arhr6nzMVwm0p1eWKo6GrK8HSLmwtmKkoSDwvPpFvFsfQFaO4-B0KURY-DaTI8qgctsun-sGemkDVgIpjHbUOTPS76ZO6MbUr91igNu-jb2PS8_JJS9ZpztJI0CdbxB2g0-yv9TXOc",
  },
  {
    id: "kubecon-2024-insights",
    categoryKey: "events",
    categoryClass: "text-secondary-fixed",
    date: "2024-09-28",
    titleKey: "blog_post_3_title",
    excerptKey: "blog_post_3_excerpt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqqa6Aa7IfF0qTQqNtwgYGbZ8cUpJZ5LvuAUNbyEO6mDMJPm9s8Kkgy5lDKIfdEzmngTb9_2Wzgt2__J0aP5UbWB19ap-imSmeFlnwF3sCniV_68PyLGfSakJX8YKz1GlQHu0WMSTi7Y3qekBSKTvfsZIpb57_Td2VadOb3jGjPcoYM7qlhgWvQhhKjIEoJvYRpgYVMOmp9Wn3Gfi7slmpN-NgZ_OdnrUoz6LULMjK3jTtBEkdcIzCc7HL88qE678v1rDBJTTK6o",
  },
];

const filters = ["all", "devops", "fullstack", "events"];

export function BlogPage() {
  useRevealOnScroll();
  const t = useT();
  const { lang } = useContext(UiContext);
  const locale = lang === "fr" ? "fr-FR" : "en-US";
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body-md relative">
      <div className="developer-dot-pattern" />
      <main className="pb-24 pt-16 relative z-10">
        <header className="reveal mx-auto mb-16 max-w-container-max-width px-margin-desktop">
          <span className="mb-4 block font-label-sm uppercase tracking-widest text-primary">
            {t("blog_span")}
          </span>
          <h1 className="font-display-lg mb-6 max-w-3xl leading-tight">
            {t("blog_heading_part1")} <span className="text-primary">DevOps</span> {lang === "fr" ? "et de" : "and"}{" "}
            <span className="text-tertiary">{t("blog_heading_part2")}</span>
          </h1>
        </header>

        <section className="reveal mx-auto mb-24 max-w-container-max-width px-margin-desktop" data-delay="100">
          <Link
            to="/blog/scaling-infrastructure"
            className="group block relative cursor-pointer overflow-hidden rounded-2xl border border-on-surface/10 bg-surface-elevated"
          >
            <div className="flex min-h-125 flex-col lg:flex-row">
              <div className="relative h-64 overflow-hidden lg:h-auto lg:w-7/12">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_OxB-G2Jo_EPMqOku7DWtwQvZOjdV0Eiomo4qISF_ekQkpv5GXvrGJzf7ikX-oQqGm-9AlGQ9UM6FnoXSY4sSaeC0SzcjTsAmsLbGpr_lBYw17F2VWtH0a3RU1VGVWH3V1ZBn23J8kx1rLfqS5Wo7Joha6apPNi58N7WpElkRgR1IkrInpiuBrqAtgkmIpq0COBsBCC-FsgKEdyhrkJbA9y9Y0nCZ6Wu6Bi0EGLNxxVI_lqtKlHfu7A_eUXODWP6_xFIs8PTkpeU"
                  alt="Featured blog post"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface-elevated/50" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:w-5/12 text-on-surface">
                <div className="mb-6 flex items-center space-x-4">
                  <span className="rounded-full border border-primary/20 bg-primary-container/20 px-3 py-1 font-label-sm text-primary">
                    {t("featured")}
                  </span>
                  <span className="font-label-sm text-text-muted">{formatDate("2024-10-24", locale)}</span>
                </div>
                <h2 className="font-headline-lg mb-6 transition-colors group-hover:text-primary">
                  Scaling Infrastructure for Next-Gen SaaS Architecture
                </h2>
                <p className="mb-8 line-clamp-3 font-body-lg text-text-muted">
                  A deep dive into how we leveraged Kubernetes and Terraform to automate global
                  deployments while maintaining 99.99% uptime during peak traffic spikes.
                </p>
                <div className="flex items-center space-x-2 font-label-md text-primary transition-transform group-hover:translate-x-2">
                  <span>{t("read_full_article")}</span>
                  <Icon name="arrow_forward" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="reveal mx-auto max-w-container-max-width px-margin-desktop" data-delay="200">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-headline-md mb-2">{t("recent_stories")}</h3>
              <p className="text-text-muted">{t("recent_stories_paragraph")}</p>
            </div>
            <div className="flex w-full space-x-3 overflow-x-auto pb-2 md:w-auto">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`whitespace-nowrap rounded-full px-5 py-2 font-label-md ${
                    index === 0
                      ? "bg-primary text-on-primary"
                      : "border border-on-surface/10 bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
                  }`}
                >
                  {index === 0
                    ? t("filter_all")
                    : t("cat_" + filter)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.titleKey}
                className="blog-card-transition group flex flex-col overflow-hidden rounded-2xl border border-on-surface/10 bg-surface-elevated"
              >
                <div className="relative h-56">
                  <img src={post.image} alt={t(post.titleKey)} className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full border border-on-surface/10 bg-surface/90 px-3 py-1 font-label-sm backdrop-blur-md ${post.categoryClass}`}
                    >
                        {t("cat_" + post.categoryKey)}
                      </span>
                  </div>
                </div>
                <div className="flex grow flex-col p-8">
                  <span className="mb-3 font-label-sm text-text-muted">{formatDate(post.date, locale)}</span>
                  <Link to={`/blog/${post.id}`}>
                    <h4 className="mb-4 font-headline-md text-2xl transition-colors group-hover:text-primary text-on-surface">
                      {t(post.titleKey)}
                    </h4>
                  </Link>
                  <p className="mb-8 grow font-body-md text-text-muted">{t(post.excerptKey)}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center space-x-2 font-label-md text-on-surface group-hover:underline decoration-primary"
                  >
                    <span>{t("read_more")}</span>
                    <Icon name="arrow_forward" className="text-sm" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
