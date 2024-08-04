import { EditorComponent } from "src/app/models/EditorComponents";
import { TextValueType } from "../TextElement";
import { LayoutComponentType } from "src/app/models/Layout.models";
import { EditorElementTypes } from "src/app/models/EditorElement";

export const BasicLayoutComponentList: LayoutComponentType<TextValueType>[] = [
  {
    type: EditorElementTypes.TEXT,
    position: {
      coordinates: {
        x: 467.515625,
        y: 326,
      },
    },

    isFocused: false,
    style: {
      fontSize: "150",
    },
  },
  {
    type: EditorElementTypes.TEXT,
    position: {
      coordinates: {
        x: 795.515625,
        y: 311,
      },
    },

    isFocused: true,
    style: {
      fontSize: "150",
    },
  },
  {
    type: EditorElementTypes.TEXT,
    position: {
      coordinates: {
        x: 1143.515625,
        y: 319,
      },
    },

    isFocused: false,
    style: {
      fontSize: "150",
    },
  },
];
