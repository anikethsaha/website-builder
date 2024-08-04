import { EditorElementTypes } from "src/app/models/EditorElement";
import { ButtonElementComponent } from "../../ElementPicker/Elements/ButtonElement";
import { TextElementComponent } from "../../ElementPicker/Elements/TextElement";
import { BoxElementComponent } from "../../ElementPicker/Elements/BoxElement";
import { FlexElementComponent } from "../../ElementPicker/Elements/FlexElement";
import { InputElementComponent } from "../../ElementPicker/Elements/InputElement";

export const ElementTypeMap = {
  [EditorElementTypes.BUTTON]: ButtonElementComponent,
  [EditorElementTypes.TEXT]: TextElementComponent,
  [EditorElementTypes.BOX]: BoxElementComponent,
  [EditorElementTypes.FLEX]: FlexElementComponent,
  [EditorElementTypes.INPUT]: InputElementComponent,
};
