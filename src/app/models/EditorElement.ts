export enum EditorElementTypes {
  BUTTON = "BUTTON",
  TEXT = "TEXT",
  SECTION = "SECTION",
}

export enum LayoutElementTypes {
  BASIC = "BASIC",
}

/**
 * this is the type for raw elements that are draggable and gets converted to component when inside the canva
 */
export type EditorElement = {
  type: EditorElementTypes | LayoutElementTypes;
  kind?: "elements" | "layouts";
};
