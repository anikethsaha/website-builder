export enum EditorElementTypes {
  BUTTON = "BUTTON",
  TEXT = "TEXT",
}

/**
 * this is the type for raw elements that are draggable and gets converted to component when inside the canva
 */
export type EditorElement = {
  type: EditorElementTypes;
};
