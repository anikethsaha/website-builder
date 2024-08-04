import { EditorComponent } from "src/app/models/EditorComponents";
import { TextValueType } from "../TextElement";
import { LayoutComponentType } from "src/app/models/Layout.models";
import { EditorElementTypes } from "src/app/models/EditorElement";
import { DEVICE_TYPES } from "src/app/models/device.mode";

export const BasicLayoutComponentList: LayoutComponentType<TextValueType>[] = [
  {
    type: EditorElementTypes.TEXT,
    position: {
      [DEVICE_TYPES.DESKTOP]: {
        coordinates: {
          x: 467.515625,
          y: 326,
        },
      },
    },

    isFocused: false,
    style: {
      [DEVICE_TYPES.DESKTOP]: { fontSize: "150" },
    },
  },
  {
    type: EditorElementTypes.TEXT,
    position: {
      [DEVICE_TYPES.DESKTOP]: {
        coordinates: {
          x: 795.515625,
          y: 311,
        },
      },
    },

    isFocused: true,
    style: {
      [DEVICE_TYPES.DESKTOP]: { fontSize: "150" },
    },
  },
  {
    type: EditorElementTypes.TEXT,
    position: {
      [DEVICE_TYPES.DESKTOP]: {
        coordinates: {
          x: 1143.515625,
          y: 319,
        },
      },
    },

    isFocused: false,
    style: {
      [DEVICE_TYPES.DESKTOP]: { fontSize: "150" },
    },
  },
];
