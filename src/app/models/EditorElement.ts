export enum EditorElementTypes {
  BUTTON = "BUTTON",
  TEXT = "TEXT",
  BOX = "BOX",
  FLEX = "FLEX",
  INPUT = "INPUT",
}

export enum LayoutElementTypes {
  BASIC = "BASIC",
}

/**
 * this is the type for raw elements that are draggable and gets converted to component when inside the canva
 */
export type EditorElement = {
  type: EditorElementTypes | LayoutElementTypes;

  /**
   * @elements are the basic components, atoms
   * @layouts are the group of elements
   * @sections are the one that contains their own layout handler
   */
  kind?: "elements" | "layouts" | "section";
};
