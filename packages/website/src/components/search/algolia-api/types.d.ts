export interface Hierarchy {
  lvl0: string;
  lvl1: string | null;
  lvl2: string | null;
  lvl3: string | null;
  lvl4: string | null;
  lvl5: string | null;
  lvl6: string | null;
}

export interface Hit {
  anchor: string;
  content: string | null;
  hierarchy: Hierarchy;
  objectID: string;
  type: string;
  url: string;
  url_without_anchor: string;
}
