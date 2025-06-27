import slugify from '@sindresorhus/slugify';
import { getCollection, type CollectionEntry } from 'astro:content';
import { toCleanTag } from './menu/to-clean-route.ts';

export interface Tag {
  slug: string;
  label: string;
  onderzoeken: Onderzoek[];
}

type TagsMap = Record<string, Tag>;
type Onderzoek = CollectionEntry<'onderzoeken'>;

let tagsMapPromise: Promise<TagsMap>;

/** Convert a tag label (as defined in frontmatter) to a slugified tag id */
const tagLabelToId = (label: string) => toCleanTag(slugify(label));

/** Create tag objects for each tag in an `Onderzoek` and append them to a tagsMap */
function appendTags(tagsMap: TagsMap, onderzoek: Onderzoek) {
  onderzoek.data.tags?.forEach((tagLabel) => {
    if (!tagLabel) return;

    const id = tagLabelToId(tagLabel);

    if (tagsMap[id] === undefined) {
      tagsMap[id] = {
        label: tagLabel,
        onderzoeken: [],
        slug: `/docs/tags/${id}`,
      };
    }

    tagsMap[id].onderzoeken.push(onderzoek);
  });

  return tagsMap;
}

/**
 * Build a tagsMap object based on all tags within the 'onderzoeken' collection.
 * It returns a Promise that will resolve to the `tagsMap`. When called again,
 * it will return the same promise making sure there is only one instance of the
 * tagsMap in circulation
 */
async function buildTagsMap() {
  if (tagsMapPromise instanceof Promise) return tagsMapPromise;

  tagsMapPromise = new Promise((resolve, reject) => {
    getCollection('onderzoeken')
      .then((onderzoeken) => onderzoeken.reduce(appendTags, {}))
      .then((tagsMap) => resolve(tagsMap))
      .catch((error) => reject(error));
  });

  return tagsMapPromise;
}

/** Get all tag ids in the tagsMap */
export async function getTagIds() {
  const tagsMap = await buildTagsMap();
  return Object.keys(tagsMap).sort((a, b) => a.localeCompare(b));
}

/** Get a tag from the tagsMap based on its tags label or id */
export async function getTag(tagLabelOrId: string) {
  const tagsMap = await buildTagsMap();

  const id = tagLabelToId(tagLabelOrId);
  return tagsMap[id];
}

/** Get a list of tags based on a list of labels or ids */
export async function getTags(tagLabelOrIds?: string[]) {
  const promises = (tagLabelOrIds ?? []).map(getTag);
  return Promise.all(promises);
}
