import { BasicLayoutComponentList } from "../components/ElementPicker/Schemas/BasicLayout/component.config";
import { LayoutElementTypes } from "../models/EditorElement";
import { LayoutComponentType } from "../models/Layout.models";

export const LAYOUT_COMPONENT_MAP: {
  [layoutName in LayoutElementTypes]: LayoutComponentType<unknown>[];
} = {
  [LayoutElementTypes.BASIC]: BasicLayoutComponentList,
};
