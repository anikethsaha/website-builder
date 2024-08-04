import React, { LegacyRef } from "react";
import { ConnectDragSource, useDrag } from "react-dnd";
import { EditorElement } from "../models/EditorElement";
import { ELEMENT_DROP_TYPE } from "../constants/EditorDatas";

export type ElementPropType = {
  isDragging: boolean;
};

interface DropResult {
  name: string;
}

export const withElementDisplayContainer = (
  Element: React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement & { isDragging?: boolean }
  >
) => {
  const ElementDisplayContainer: React.FC<EditorElement> = (props) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: ELEMENT_DROP_TYPE,
      item: { ...props },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    });

    return (
      <div
        className={
          (props.kind === "layouts" ? "min-h-52" : "min-h-32") +
          " p-4 border border-slate-300 rounded-lg box-border flex flex-1 justify-center items-center bg-sky-50 flex-col"
        }
      >
        <Element
          {...props}
          isDragging={isDragging}
          ref={dragRef as unknown as LegacyRef<ConnectDragSource> | undefined}
        />
      </div>
    );
  };

  return ElementDisplayContainer;
};
