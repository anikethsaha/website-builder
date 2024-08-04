import { useEditorStore } from "../stores/editor.store";

export const useIsEditorDragDisable = () => {
  const isDragDisabled = useEditorStore((state) => state.disableDrag);
  return isDragDisabled;
};
