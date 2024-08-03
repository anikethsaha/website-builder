import React, { use, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ButtonElement } from "../ElementPicker/Elements/ButtonElement";
import { useEditorComponents } from "src/app/hooks/useEditorComponent";
import { ComponentRenderer } from "./ComponentRenderer";
import { NAME } from "src/app/constants/EditorDatas";
import { EditorElement } from "src/app/models/EditorElement";
import { useEditor } from "src/app/hooks/useEditor";
import { EditorComponent } from "src/app/models/EditorComponents";

export const Canva = () => {
  const components = useEditorComponents();
  const { addComponent, updatePosition } = useEditor();

  const [{ isOver }, dropRef] = useDrop({
    accept: NAME,
    drop(item, monitor) {
      const component = item as EditorComponent<unknown>;
      const type = component.type;
      const position = monitor.getSourceClientOffset();

      if (component) {
        if (!component.id) {
          addComponent({
            type,
            position: {
              coordinates: position ?? undefined,
            },
          });
        } else {
          // update the position of the component (filter by id)
          updatePosition(component.id, position!);
        }
      }

      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  useEffect(() => {
    console.log({ components });
  }, [components]);

  return (
    <div className="flex mt-12 flex-1 w-full h-full ">
      <div
        ref={dropRef}
        className={`flex flex-1 w-full h-full relative ${
          isOver ? "bg-slate-200" : "bg-slate-100"
        }`}
      >
        {components.map((component) => (
          <ComponentRenderer key={component.id} {...component} />
        ))}
      </div>
    </div>
  );
};
