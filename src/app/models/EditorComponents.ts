import { ComponentProperties } from "./ComponentProperties";
import { EditorElement } from "./EditorElement";

type BaseEditComponent<V> = {
  id: string;
  isFocused?: boolean;
  value?: V;
  isDragging?: boolean;
  preview?: boolean;
} & EditorElement &
  ComponentProperties;

export type EditorComponent<V> = BaseEditComponent<V> & {
  /** @unused atm */
  childs?: EditorComponent<V>[];
};
