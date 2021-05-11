import locales from "./locales";

export function localeLookup(name) {
  const item = locales.find((l) => [l.locale].includes(name));

  return item?.locale;
}
