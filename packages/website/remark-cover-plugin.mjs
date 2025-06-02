const isType = (type) => (object) => object?.type === type;
const isParagraph = isType('paragraph');
const isImage = isType('image');

function paragraphWithImage(object) {
  return isParagraph(object) && object?.children?.some(isImage);
}

/**
 * A remark plugin that adds the first image to be found as cover property in
 * the frontmatter
 */
export function coverPlugin() {
  return function (tree, file) {
    if (file.data.astro.frontmatter.cover) return;

    // Get the first paragraph with an image.
    // Images are always included in a paragraph
    const paragraph = tree?.children?.find(paragraphWithImage);

    // Get the first image from the paragraph
    const image = paragraph?.children?.find(isImage);

    if (image) {
      file.data.astro.frontmatter.cover = image;
    }
  };
}
