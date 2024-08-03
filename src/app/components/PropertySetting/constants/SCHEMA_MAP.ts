import { EditorElementTypes } from "src/app/models/EditorElement";
import { ButtonSchema } from "../../ElementPicker/Schemas/Button";
import { RJSFSchema } from "@rjsf/utils";
import { TextSchema } from "../../ElementPicker/Schemas/TextElement";

export const SCHEMA_MAP: { [key in EditorElementTypes]: RJSFSchema } = {
  [EditorElementTypes.BUTTON]: ButtonSchema,
  [EditorElementTypes.TEXT]: TextSchema,
};
