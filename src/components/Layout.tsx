import type { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import UiContext from "../contexts/UiContext";
import { useT } from "../i18n";
import {
  FaEnvelope,
  FaPhone,
  FaLink,
  FaDownload,
  FaLayerGroup,
  FaCogs,
  FaCloud,
  FaCheckCircle,
  FaShieldAlt,
  FaBriefcase,
  FaGraduationCap,
  FaIdBadge,
  FaCertificate,
  FaAward,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLanguage,
  FaAddressBook,
  FaLock,
  FaEye,
  FaTerminal,
  FaNetworkWired,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaCode,
  FaBolt,
  FaSyncAlt,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaLightbulb,
  FaCheck
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: FaEnvelope,
  phone: FaPhone,
  link: FaLink,
  download: FaDownload,
  layers: FaLayerGroup,
  settings_input_component: FaCogs,
  cloud: FaCloud,
  check_circle: FaCheckCircle,
  shield: FaShieldAlt,
  work: FaBriefcase,
  school: FaGraduationCap,
  badge: FaIdBadge,
  verified: FaCertificate,
  workspace_premium: FaAward,
  open_in_new: FaExternalLinkAlt,
  arrow_forward: FaArrowRight,
  translate: FaLanguage,
  contacts: FaAddressBook,
  lock: FaLock,
  visibility: FaEye,
  terminal: FaTerminal,
  lan: FaNetworkWired,
  dark_mode: FaMoon,
  light_mode: FaSun,
  menu: FaBars,
  close: FaTimes,
  code: FaCode,
  bolt: FaBolt,
  sync: FaSyncAlt,
  send: FaPaperPlane,
  location_on: FaMapMarkerAlt,
  arrow_back: FaArrowLeft,
  tips_and_updates: FaLightbulb,
  check: FaCheck,
};

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export function Icon({ name, className = "" }: IconProps) {
  const Component = iconMap[name];
  if (!Component) {
    console.warn(`Icon "${name}" not found in Fa mapping`);
    return null;
  }
  return <Component className={`inline-block ${className}`} />;
}

interface NavLinkItem {
  label: string;
  to: string;
}

const navLinks: Array<NavLinkItem & { labelFr: string; labelEn: string }> = [
  { label: "Home", to: "/", labelFr: "Accueil", labelEn: "Home" },
  { label: "Works", to: "/works", labelFr: "Projets", labelEn: "Works" },
  { label: "Blog", to: "/blog", labelFr: "Blog", labelEn: "Blog" },
  { label: "About", to: "/about", labelFr: "À propos", labelEn: "About" },
  { label: "Contact", to: "/contact", labelFr: "Contact", labelEn: "Contact" },
];

interface NavbarProps {
  activePath: string;
  ctaLabel?: string;
}

// NavbarControls removed: using UiContext directly for theme/lang toggles

export function Navbar({ activePath, ctaLabel = "Hire Me" }: NavbarProps) {
  const { theme, setTheme, lang, setLang } = useContext(UiContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{background:'var(--nav-bg)', borderBottomColor:'var(--nav-border)'}} className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex w-full max-w-container-max-width items-center justify-between gap-3 px-4 sm:px-6 md:px-margin-desktop py-3 sm:py-4">
        <Link to="/" onClick={() => setMobileOpen(false)} className="font-headline-md font-semibold text-on-surface">
          Exaucé Umba
        </Link>
        <div className="hidden items-center gap-6 lg:flex bg-surface-container/60 border border-on-surface/5 rounded-full px-4 py-2">
          {navLinks.map(({ labelFr, labelEn, to }) => {
            const isActive = activePath === to;
            const label = lang === "fr" ? labelFr : labelEn;
            return (
              <Link
                key={to}
                to={to}
                className={`font-label-md transition-colors duration-300 px-3 py-1 rounded-full ${
                  isActive
                    ? "font-bold text-primary bg-primary/10"
                    : "font-medium text-on-surface/75 hover:text-on-surface"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="toggle-theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full p-2 text-on-surface hover:bg-black/5 flex items-center justify-center"
          >
            {theme === "light"
              ? <Icon name="dark_mode" className="text-[20px]" />
              : <Icon name="light_mode" className="text-[20px]" />}
          </button>
          <button
            aria-label="toggle-lang"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-full border border-on-surface/20 px-3 py-1 text-sm text-on-surface"
          >
            {lang.toUpperCase()}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex ml-1 rounded-full bg-primary-container px-4 py-2 text-sm font-label-md text-on-primary-container shadow-[0_10px_30px_rgba(0,82,204,0.15)] transition-transform duration-200 hover:scale-95 sm:ml-2 sm:px-5"
          >
            {ctaLabel}
          </Link>
          <button
            aria-label="toggle-mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex lg:hidden rounded-full p-2 text-on-surface hover:bg-black/5 transition-colors items-center justify-center"
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ background: 'var(--nav-bg)', borderTop: '1px solid var(--nav-border)' }}
      >
        <div className="flex flex-col px-4 pb-6 pt-3 gap-1">
          {navLinks.map(({ labelFr, labelEn, to }) => {
            const isActive = activePath === to;
            const label = lang === "fr" ? labelFr : labelEn;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-label-md transition-colors duration-200 ${
                  isActive
                    ? "bg-primary-container/30 text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                )}
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-full bg-primary-container py-3 text-center text-sm font-label-md text-on-primary-container shadow-[0_10px_30px_rgba(0,82,204,0.15)]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}

interface FooterProps {
  variant?: "full" | "compact";
}

export function Footer({ variant = "full" }: FooterProps) {
  const t = useT();
  const { lang } = useContext(UiContext);
  if (variant === "compact") {
    return (
      <footer style={{background:'var(--footer-bg)', borderTopColor:'var(--footer-border)'}} className="w-full border-t py-12">
        <div className="mx-auto flex max-w-container-max-width flex-col items-center justify-between gap-8 px-4 sm:px-6 md:px-margin-desktop md:flex-row">
          <div className="mb-0 md:mb-0">
            <span className="font-label-md font-bold text-on-surface">{t("siteName")}</span>
            <p className="mt-2 font-label-sm text-text-muted">{t("copyright")}</p>
          </div>
          <FooterLinks activePath="" />
        </div>
      </footer>
    );
  }

  return (
    <footer style={{background:'var(--footer-bg)', borderTopColor:'var(--footer-border)'}} className="border-t">
      <div className="mx-auto grid max-w-container-max-width grid-cols-1 gap-8 px-4 sm:px-6 md:px-margin-desktop py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-8 block font-headline-md font-bold text-on-surface">
            {t("siteName")}
          </Link>
          <p className="mb-4 max-w-xs font-body-md text-text-muted">{t("footer_lead")}</p>
        </div>
        <FooterColumn title={lang === "fr" ? "Navigation" : "Navigation"}>
          {navLinks.map(({ labelFr, labelEn, to }) => (
            <Link key={to} to={to} className="font-label-md text-text-muted transition-colors hover:text-on-surface">
              {lang === "fr" ? labelFr : labelEn}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title={t("connect")}>
          <a href="https://www.linkedin.com/in/exau-umba/" target="_blank" rel="noopener noreferrer" className="font-label-md text-text-muted transition-colors hover:text-on-surface">
            {t("social_linkedin")}
          </a>
          <a href="https://www.facebook.com/exauce.umba.k" target="_blank" rel="noopener noreferrer" className="font-label-md text-text-muted transition-colors hover:text-on-surface">
            {t("social_facebook")}
          </a>
          <a href="https://github.com/exau-umba" target="_blank" rel="noopener noreferrer" className="font-label-md text-text-muted transition-colors hover:text-on-surface">
            {t("social_github")}
          </a>
          <a href="https://x.com/exau-umba" target="_blank" rel="noopener noreferrer" className="font-label-md text-text-muted transition-colors hover:text-on-surface">
            {t("social_twitter")}
          </a>
          <Link to="/contact" className="font-label-md text-text-muted transition-colors hover:text-on-surface">
            {t("contact")}
          </Link>
        </FooterColumn>
        <FooterColumn title={t("expertise")}> 
          <div className="flex items-center gap-2">
            <p className="font-label-md text-text-muted">{t("freelance") ?? "Freelance: Open"}</p>
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          </div>
          <p className="font-label-md text-text-muted">{t("based") ?? "Based: RDC / Remote"}</p>
          <a href="/CV_Exaucé_Umba.pdf" target="_blank" rel="noreferrer" className="font-label-md text-primary underline decoration-primary decoration-2 underline-offset-4 transition hover:text-on-surface">
            {t("download_cv")}
          </a>
        </FooterColumn>
      </div>
      <div style={{borderTopColor:'var(--nav-border)'}} className="mx-auto flex max-w-container-max-width flex-col items-center justify-between gap-4 border-t px-4 sm:px-6 md:px-margin-desktop py-8 text-text-muted md:flex-row">
        <p className="font-body-md">{t("copyright")}</p>
        <div className="flex gap-8">
          <p className="font-body-md">
            Powered by <span className="text-on-surface"><Link to={'/'} className="font-semibold">U Vision</Link></span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePath={location.pathname} />
      <div className="pt-20 sm:pt-24">{children}</div>
      <Footer variant="full" />
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="mb-4 font-label-sm uppercase tracking-widest text-text-muted">{title}</span>
      {children}
    </div>
  );
}

function FooterLinks({ activePath }: { activePath: string }) {
  return (
    <div className="flex flex-wrap gap-8">
      {navLinks.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          className={`font-label-sm transition-colors hover:underline decoration-primary ${
            activePath === to ? "text-on-surface" : "text-text-muted hover:text-on-surface"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export { FooterLinks };
