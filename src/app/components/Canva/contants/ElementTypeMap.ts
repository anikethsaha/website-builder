import { EditorElementTypes } from "src/app/models/EditorElement";
import { ButtonElementComponent } from "../../ElementPicker/Elements/ButtonElement";
import { TextElementComponent } from "../../ElementPicker/Elements/TextElement";

export const ElementTypeMap = {
  [EditorElementTypes.BUTTON]: ButtonElementComponent,
  [EditorElementTypes.TEXT]: TextElementComponent,
};
