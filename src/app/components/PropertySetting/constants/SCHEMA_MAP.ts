import { EditorElementTypes } from "src/app/models/EditorElement";
import { ButtonSchema } from "../../ElementPicker/Schemas/Button";
import { RJSFSchema } from "@rjsf/utils";
import { TextSchema } from "../../ElementPicker/Schemas/TextElement";
import { BoxSchema } from "../../ElementPicker/Schemas/Box";
import { FlexSchema } from "../../ElementPicker/Schemas/Flex";
import { InputSchema } from "../../ElementPicker/Schemas/Input";

export const SCHEMA_MAP: { [key in EditorElementTypes]: RJSFSchema } = {
  [EditorElementTypes.BUTTON]: ButtonSchema,
  [EditorElementTypes.TEXT]: TextSchema,
  [EditorElementTypes.BOX]: BoxSchema,
  [EditorElementTypes.FLEX]: FlexSchema,
  [EditorElementTypes.INPUT]: InputSchema,
};
