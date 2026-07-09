import { useEffect } from "react";

export function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute("data-delay") ?? 0);
            window.setTimeout(() => entry.target.classList.add("active"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

export function useWorkCardGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".work-card");

    const handlers = Array.from(cards).map((card) => {
      const onMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", onMove);
      return { card, onMove };
    });

    return () => {
      handlers.forEach(({ card, onMove }) => card.removeEventListener("mousemove", onMove));
    };
  }, []);
}
