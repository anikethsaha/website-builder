import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { NAME } from "src/app/constants/EditorDatas";
import { EditorComponent } from "src/app/models/EditorComponents";

const LEFT_PANEL_OFFSET = 384;
const TOP_PANEL_OFFSET = 48;

export const ElementAutoLayout: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<unknown>;
}> = ({ children, component }) => {
  const position = component.position;

  const id = component.id;

  /** @todo first priority should not be inittialPOsition, handle when implementing movement  */
  const top = position?.coordinates?.y
    ? position?.coordinates?.y - TOP_PANEL_OFFSET
    : 0;
  const left = position?.coordinates?.x
    ? position?.coordinates?.x - LEFT_PANEL_OFFSET
    : 0;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: NAME,
      item: { ...component },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [JSON.stringify(component)]
  );

  useEffect(() => {
    console.log({ isDragging });
  }, [isDragging]);

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
