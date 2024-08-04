import { Resizable } from "re-resizable";
import React from "react";
import { useEditor } from "src/app/hooks/useEditor";
import { EditorComponent } from "src/app/models/EditorComponents";
import { DEVICE_TYPES } from "src/app/models/device.mode";
import { useDeviceType } from "src/app/stores/editor.store";

const RESIZE_COLOR = "rgb(241 90 4)";

export const ElementResizableLayer: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<unknown>;
}> = ({ children, component }) => {
  const { updateDisableDrag, updateStyle } = useEditor();
  const deviceType = useDeviceType();

  const style = component.style?.[deviceType ?? DEVICE_TYPES.DESKTOP];

  const defaultWidth = style?.width ? Number(style?.width) : 100;
  const defaultHeight = style?.height ? Number(style?.height) : 100;

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
      handleStyles={{
        top: { backgroundColor: RESIZE_COLOR, height: 2 },
        left: { backgroundColor: RESIZE_COLOR, width: 2 },
        right: { backgroundColor: RESIZE_COLOR, width: 2 },
        bottom: { backgroundColor: RESIZE_COLOR, height: 2 },
        topLeft: { backgroundColor: RESIZE_COLOR },
        topRight: { backgroundColor: RESIZE_COLOR },
        bottomLeft: { backgroundColor: RESIZE_COLOR },
        bottomRight: { backgroundColor: RESIZE_COLOR },
      }}
      onResize={(e, direction, ref, d) => {
        const height = ref.clientHeight;
        const width = ref.clientWidth;
        if (d?.height || d.width) {
          updateStyle(component.id, {
            height,
            width,
            deviceType,
          });
        }

        updateDisableDrag(false);
      }}
    >
      {children}
    </Resizable>
  );
};
