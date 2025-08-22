import { getCollection } from 'astro:content';

export async function getOnderzoekenByTheme(themeId: string) {
  return (await getCollection('onderzoeken')).filter((onderzoek) =>
    onderzoek.data.themes.some((theme) => theme.id === themeId),
  );
}
