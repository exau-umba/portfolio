export function formatDate(dateString: string, locale = "en-US") {
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(d);
  } catch (e) {
    return dateString;
  }
}

export default formatDate;
