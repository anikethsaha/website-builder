import React, { use, useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ButtonElement } from "../ElementPicker/Elements/ButtonElement";
import { useEditorComponents } from "src/app/hooks/useEditorComponent";
import { ComponentRenderer } from "./ComponentRenderer";
import { ELEMENT_DROP_TYPE } from "src/app/constants/EditorDatas";

import { useEditor } from "src/app/hooks/useEditor";
import { EditorComponent } from "src/app/models/EditorComponents";
import { useIsEditorDragDisable } from "src/app/hooks/useIsEditorDragDisable";
import { useDeviceType } from "src/app/stores/editor.store";
import { DEVICE_TYPES } from "src/app/models/device.mode";

export const Canva = () => {
  const components = useEditorComponents();
  const isDragDisabled = useIsEditorDragDisable();
  const deviceType = useDeviceType();
  const { addComponent, updatePosition, setLayout, removeComponent } =
    useEditor();

  const [{ isOver }, dropRef] = useDrop(
    {
      accept: ELEMENT_DROP_TYPE,
      drop(item, monitor) {
        const component = item as EditorComponent<unknown>;
        const type = component.type;
        const position = monitor.getSourceClientOffset();
        console.log("adding, ", { component });

        if (component) {
          if (component.kind === "layouts") {
            setLayout(component.type);
          } else {
            if (!component.id) {
              addComponent({
                ...component,
                type,
                position: {
                  [deviceType ?? DEVICE_TYPES.DESKTOP]: {
                    coordinates: position ?? undefined,
                  },
                },
              });
            } else {
              // update the position of the component (filter by id)
              updatePosition(component.id, position!, deviceType);
            }
          }
        }

        return undefined;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    },
    [deviceType]
  );

  const handleDelete = (e: KeyboardEvent) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const focusedComponent = components.find((c) => c.isFocused);
      if (focusedComponent?.isFocused) {
        removeComponent(focusedComponent.id);
      }
    }
  };

  /**
   * useeffect to add a keydown event listener to delete the selected component or the focused component
   */
  useEffect(() => {
    console.log({ components });
    // window.addEventListener("keydown", handleDelete);
    // return () => {
    //   window.removeEventListener("keydown", handleDelete);
    // };
  }, [JSON.stringify(components)]);

  return (
    <div className="flex justify-center items-center  flex-1 w-full h-full bg-gray-100">
      <div
        ref={isDragDisabled ? undefined : dropRef}
        className={`flex m-8    h-3/4   rounded relative ${
          isOver ? "bg-slate-50" : "bg-white"
        } ${deviceType === "mobile" ? "w-2/5" : "w-full"}`}
      >
        {components.map((component) => (
          <ComponentRenderer key={component.id} {...component} />
        ))}
      </div>
    </div>
  );
};
