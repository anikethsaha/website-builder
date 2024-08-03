import React, { LegacyRef } from "react";
import { ConnectDragSource, useDrag } from "react-dnd";
import { useEditor } from "../hooks/useEditor";
import { EditorElement, EditorElementTypes } from "../models/EditorElement";
import { EditorComponent } from "../models/EditorComponents";
import { NAME } from "../constants/EditorDatas";

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
  >,
  type: EditorElementTypes
) => {
  const ElementDisplayContainer: React.FC<EditorElement> = (props) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: NAME,
      item: { ...props },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    });

    return (
      <div className="p-12 border border-slate-300 rounded-lg box-border flex flex-1 justify-center items-center bg-sky-50">
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
