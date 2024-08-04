import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { ELEMENT_DROP_TYPE } from "src/app/constants/EditorDatas";
import { useIsEditorDragDisable } from "src/app/hooks/useIsEditorDragDisable";
import { EditorComponent } from "src/app/models/EditorComponents";
import { useDeviceType } from "src/app/stores/editor.store";

const LEFT_PANEL_OFFSET = 384;
const TOP_PANEL_OFFSET = 48;

export const ElementAutoLayout: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<unknown>;
}> = ({ children, component }) => {
  const deviceType = useDeviceType();
  const isDragDisabled = useIsEditorDragDisable();
  const position = component.position;

  const id = component.id;

  /** @todo first priority should not be inittialPOsition, handle when implementing movement  */
  const top = position?.coordinates?.y
    ? position?.coordinates?.y - TOP_PANEL_OFFSET
    : 0;
  let left: number | string = position?.coordinates?.x
    ? position?.coordinates?.x - LEFT_PANEL_OFFSET
    : 0;

  if (deviceType === "mobile") {
    console.log({ old: left });
    left = left - 200 > 200 ? left - 200 : left;
    console.log({ new: left });
  }

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ELEMENT_DROP_TYPE,
      item: { ...component },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [JSON.stringify(component)]
  );

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
