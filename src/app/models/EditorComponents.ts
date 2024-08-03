import { ComponentProperties } from "./ComponentProperties";
import { EditorElement } from "./EditorElement";

export type EditorComponent<V> = {
  id: string;
  isFocused?: boolean;
  value?: V;
} & EditorElement &
  ComponentProperties;
