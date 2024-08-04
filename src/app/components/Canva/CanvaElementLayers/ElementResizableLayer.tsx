import { Resizable } from "re-resizable";
import React from "react";
import { useEditor } from "src/app/hooks/useEditor";
import { EditorComponent } from "src/app/models/EditorComponents";

export const ElementResizableLayer: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<unknown>;
}> = ({ children, component }) => {
  const { updateDisableDrag, updateStyle } = useEditor();

  const defaultWidth = component.style?.width
    ? Number(component.style?.width)
    : 100;
  const defaultHeight = component.style?.height
    ? Number(component.style?.height)
    : 100;

  return (
    <Resizable
      size={{
        width: defaultWidth,
        height: defaultHeight,
      }}
      onResizeStart={() => {
        console.log("start");
        updateDisableDrag(true);
      }}
      onResizeStop={(e, direction, ref, d) => {
        updateDisableDrag(false);
      }}
      defaultSize={{
        width: defaultWidth,
        height: defaultHeight,
      }}
      onResize={(e, direction, ref, d) => {
        const height = ref.clientHeight;
        const width = ref.clientWidth;
        if (d?.height || d.width) {
          updateStyle(component.id, {
            height,
            width,
          });
        }

        updateDisableDrag(false);
      }}
    >
      {children}
    </Resizable>
  );
};
