import React from "react";
import { useDrag } from "react-dnd";
import { ELEMENT_DROP_TYPE } from "src/app/constants/EditorDatas";
import { useIsEditorDragDisable } from "src/app/hooks/useIsEditorDragDisable";
import { EditorComponent } from "src/app/models/EditorComponents";
import { DEVICE_TYPES } from "src/app/models/device.mode";
import { useDeviceType } from "src/app/stores/editor.store";

const LEFT_PANEL_OFFSET = 384;
const TOP_PANEL_OFFSET = 134;

const MOBILE_LEFT_PANEL_OFFSET = LEFT_PANEL_OFFSET + 308;
const MOBILE_TOP_PANEL_OFFSET = TOP_PANEL_OFFSET;

export const ElementAutoLayout: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<unknown>;
}> = ({ children, component }) => {
  const deviceType = useDeviceType();
  const isDragDisabled = useIsEditorDragDisable();
  const position = component?.position?.[deviceType];

  let top = position?.coordinates?.y;
  let left = position?.coordinates?.x;

  if (deviceType === DEVICE_TYPES.DESKTOP) {
    top = typeof top === "number" ? top - TOP_PANEL_OFFSET : 0;
    left = typeof left === "number" ? left - LEFT_PANEL_OFFSET : 0;
  } else if (deviceType === DEVICE_TYPES.MOBILE) {
    top = typeof top === "number" ? top - MOBILE_TOP_PANEL_OFFSET : 0;
    left = typeof left === "number" ? left - MOBILE_LEFT_PANEL_OFFSET : 0;
  }

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ELEMENT_DROP_TYPE,
      item: { ...component },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [JSON.stringify(component), deviceType]
  );

  if (component.kind === "section") {
    return <>{children}</>;
  }

  if (isDragDisabled)
    return (
      <div
        className={`absolute `}
        style={{
          top,
          left,
        }}
      >
        {children}
      </div>
    );

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div
      ref={drag}
      className={`absolute `}
      style={{
        top,
        left,
      }}
    >
      {children}
    </div>
  );
};
