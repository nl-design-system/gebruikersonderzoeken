/**
 * Generate a document title. ` | Gebruikersonderzoeken` will be appended to
 * the title. If no title is present, it will default to `Gebruikersonderzoeken`
 */
export const generateDocumentTitle = (title?: string) => {
  if (title?.endsWith(' | Gebruikersonderzoeken')) return title;

  return title ? `${title} | Gebruikersonderzoeken` : 'Gebruikersonderzoeken';
};

/**
 * Dispatch an `update-document-title` event. Once dispatched, the document
 * will update the title.
 */
export const updateDocumentTitle = (newTitle: string) => {
  const newPageTitle = generateDocumentTitle(newTitle);
  document.dispatchEvent(new UpdateDocumentTitleEvent(newPageTitle));
};

/**
 * An Event that contains the new title
 */
export class UpdateDocumentTitleEvent extends Event {
  static readonly eventName = 'update-document-title';

  readonly newTitle: string;

  constructor(newPageTitle: string) {
    super(UpdateDocumentTitleEvent.eventName, { bubbles: true, composed: true });
    this.newTitle = newPageTitle;
  }
}
