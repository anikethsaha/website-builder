import { useEditorStore } from "../stores/editor.store";

export const useEditorComponents = () =>
  useEditorStore((state) => state.components);
