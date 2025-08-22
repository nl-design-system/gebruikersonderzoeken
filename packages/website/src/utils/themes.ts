import { getCollection } from 'astro:content';

export async function getOnderzoekenByTheme(themeId: string) {
  const onderzoeken = await getCollection('onderzoeken');

  return onderzoeken.filter((onderzoek) => {
    const themeIds = (onderzoek.data.themes || []).map((theme) => theme.id);
    return themeIds.includes(themeId);
  });
}
