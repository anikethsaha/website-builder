import React, { LegacyRef } from "react";
import { ConnectDragSource, useDrag } from "react-dnd";
import { EditorElement } from "../models/EditorElement";
import { ELEMENT_DROP_TYPE } from "../constants/EditorDatas";
import { EditorComponent } from "../models/EditorComponents";

export type ElementPropType = {
  isDragging: boolean;
};

interface DropResult {
  name: string;
}

export const withElementDisplayContainer = <T extends unknown>(
  Element: React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement & { isDragging?: boolean }
  >,
  kind: EditorElement["kind"] = "elements",
  defaultComponentValue?: Omit<Omit<EditorComponent<T>, "id">, "type">
) => {
  const ElementDisplayContainer: React.FC<EditorElement> = (props) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: ELEMENT_DROP_TYPE,
      item: { ...props, ...defaultComponentValue, kind },

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
