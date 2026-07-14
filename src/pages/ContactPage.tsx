import { useState, type FormEvent } from "react";
import { Icon } from "../components/Layout";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useT } from "../i18n";

type FormStatus = "idle" | "sending" | "sent";

export function ContactPage() {
  useRevealOnScroll();
  const t = useT();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background selection:bg-primary-container selection:text-on-primary-container relative">
      <div className="developer-dot-pattern" />
      <main className="mx-auto max-w-container-max-width px-margin-desktop pb-24 pt-16 relative z-10">
        <div className="relative">
          <div className="pointer-events-none absolute -left-25 -top-25 z-[-1] h-75 w-75 bg-[radial-gradient(circle,rgba(0,82,204,0.1)_0%,rgba(0,82,204,0)_70%)]" />

          <header className="reveal mb-16">
            <h1 className="font-display-lg mb-6 leading-none text-on-surface">
              {t("contact_header_title_part1")} <br />
              <span className="text-primary">{t("contact_header_title_part2")}</span>
            </h1>
            <p className="max-w-2xl font-body-lg text-text-muted">{t("contact_header_lead")}</p>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-7" data-delay="100">
              <div className="glass-panel rounded-2xl p-8 md:p-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-label-sm uppercase tracking-widest text-text-muted">
                        {t("name")}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t("name")}
                        className="w-full rounded-xl border border-white/5 bg-surface-container p-4 font-body-md text-on-surface placeholder:text-text-muted transition-all focus:border-primary-container focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm uppercase tracking-widest text-text-muted">
                        {t("email")}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder={t("email")}
                        className="w-full rounded-xl border border-white/5 bg-surface-container p-4 font-body-md text-on-surface placeholder:text-text-muted transition-all focus:border-primary-container focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm uppercase tracking-widest text-text-muted">
                      {t("message")}
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder={t("message")}
                      className="w-full resize-none rounded-xl border border-white/5 bg-surface-container p-4 font-body-md text-on-surface placeholder:text-text-muted transition-all focus:border-primary-container focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`group flex w-full items-center justify-center gap-2 rounded-xl py-5 font-label-md font-bold transition-all active:scale-[0.98] ${
                      status === "sent"
                        ? "bg-green-500 text-white"
                        : "bg-primary-container text-on-primary-container hover:opacity-90"
                    } ${status === "sending" ? "opacity-70" : ""}`}
                  >
                    {status === "sending" && (
                      <>
                        <Icon name="sync" className="animate-spin" />
                        {t("sending")}
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        <Icon name="check_circle" />
                        {t("message_sent")}
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        {t("sendMessage")}
                        <Icon name="send" className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="reveal space-y-8 lg:col-span-5" data-delay="200">
              <div className="glass-panel relative aspect-video overflow-hidden rounded-2xl lg:aspect-square">
                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-surface-dim to-transparent" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="mb-1 flex items-center gap-2 text-primary">
                    <Icon name="location_on" className="text-[18px]" />
                    <span className="font-label-sm uppercase tracking-widest">{t("location")}</span>
                  </div>
                  <p className="font-headline-md">Kinshasa, RDC</p>
                </div>
                <iframe
                  title="Kinshasa Map"
                  className="h-full w-full grayscale contrast-125 opacity-60"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=15.25%2C-4.45%2C15.40%2C-4.20&layer=mapnik&marker=-4.3217%2C15.3218"
                  style={{ border: 0, minHeight: '220px' }}
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <h3 className="mb-4 font-label-sm uppercase tracking-widest text-text-muted">
                  Connect
                </h3>
                {[
                  { icon: "link", titleKey: "social_linkedin", subtitleKey: "social_linkedin_sub", url: "https://linkedin.com/in/exau-umba" },
                  { icon: "link", titleKey: "social_facebook", subtitleKey: "social_facebook_sub", url: "https://facebook.com/exauce.umba.k" },
                  { icon: "link", titleKey: "social_instagram", subtitleKey: "social_instagram_sub", url: "https://instagram.com/exau-umba" },
                  { icon: "code", titleKey: "social_github", subtitleKey: "social_github_sub", url: "https://github.com/exau-umba" },
                  { icon: "link", titleKey: "social_startpage", subtitleKey: "social_startpage_sub", url: "https://exauceumba.start.page" },
                  { icon: "mail", titleKey: "social_email", subtitleKey: "social_email_sub", url: "mailto:umbaexauce233@gmail.com" },
                ].map((item) => (
                  <a
                    key={item.titleKey}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel group flex items-center justify-between rounded-2xl p-6 transition-all hover:border-primary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-primary/10">
                        <Icon name={item.icon} />
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface">{t(item.titleKey)}</p>
                        <p className="font-label-sm text-text-muted">{t(item.subtitleKey)}</p>
                      </div>
                    </div>
                    <Icon
                      name="north_east"
                      className="text-text-muted transition-colors group-hover:text-primary"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
