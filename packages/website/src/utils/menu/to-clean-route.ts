/**
 * Create clean routes for Astro collections. Astro and Docusaurus have a
 * different method of transforming a markdown file path to a url. The Astro
 * version of the website should be a dropin replacement for the legacy
 * Docusaurus version. That means that the generated url structure should be
 * identical. This utility function does that and takes some quirks of Docusuarus
 * into account.
 *
 * Since this utility can also be used in other places then Astro, it tries to be
 * as complete as possible
 */
export function toCleanRoute(path: string) {
  return (
    path
      // Remove .md to make clean urls
      .replace('.md', '')

      // Transform README routes to index routes
      .replace(/\/readme/i, '')

      // Remove the leading digit in the /onderzoek-bekijken subfolders to keep
      // the Docusaurus url structure
      .replaceAll(/\/\d-/g, '/')
      .replaceAll(/^\d-/g, '')

      // Docusaurus removed the leading digits, but appearantly does not do that
      // when the next secion is also a digit. So we need to readd the `5-` we just
      // removed in the previous step
      .replace('18-jaar', '5-18-jaar')

      // The docs folder has one folder with a space in it. Astro slugifies
      // that, but Docusaurus left that as is. We need to convert urls to
      // that folder back to the legacy way of working to keep the urls the
      // same
      .replace('18-jaar-worden', '18-jaar worden')
  );
}

/**
 * In the tag b1, docusaurus adds a dash between `b` and `1`, we need to mimic
 * that behaviour for the urls to match
 */
export function toCleanTag(tag: string) {
  return tag.replace(/^b1$/, 'b-1');
}
