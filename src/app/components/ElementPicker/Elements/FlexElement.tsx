import React from "react";
import { ConnectDragSource, useDrop } from "react-dnd";
import { withElementDisplayContainer } from "src/app/hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorComponent } from "src/app/models/EditorComponents";
import { EditorElement } from "src/app/models/EditorElement";
import { StyleHelper } from "src/app/utils/StyleHelper";

import { useDeviceType } from "src/app/stores/editor.store";
import { FlexValueType } from "../Schemas/Flex";
import { ELEMENT_DROP_TYPE } from "src/app/constants/EditorDatas";
import { useIsEditorDragDisable } from "src/app/hooks/useIsEditorDragDisable";
import { useEditor } from "src/app/hooks/useEditor";
import { ComponentRenderer } from "../../Canva/ComponentRenderer";

/** TYPES */
type BaseProps = EditorComponent<FlexValueType>;

/** HELPERS */
const styleHelper = new StyleHelper();

/**
 * @experimental component, was checking how a nest components would work
 */
export const FlexElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const isDragDisabled = useIsEditorDragDisable();
  const deviceType = useDeviceType();
  const { appendChildToComponent, updateChildsPosition, setLayout } =
    useEditor();

  const [{ isOver }, dropRef] = useDrop(
    {
      accept: ELEMENT_DROP_TYPE,
      drop(item, monitor) {
        const childComponent = item as EditorComponent<unknown>;
        const type = childComponent.type;
        const position = monitor.getSourceClientOffset();
        console.log({ monitor });

        if (childComponent) {
          if (childComponent.kind === "layouts") {
            setLayout(childComponent.type);
          } else {
            if (!childComponent.id) {
              appendChildToComponent(props.id, childComponent);
            } else {
              // update the position of the component (filter by id)
              if (position) {
                updateChildsPosition(
                  props.id,
                  childComponent.id,
                  position,
                  deviceType
                );
              }
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

  if (props.id) {
    return (
      <div
        ref={isDragDisabled ? undefined : dropRef}
        className={`flex  flex-col border border-dashed  border-gray-900 w-full  h-full   rounded relative ${
          isOver ? "bg-slate-50" : "bg-white"
        } `}
        style={styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})}
      >
        {props.childs?.map((child) => (
          <ComponentRenderer key={child.id} {...child} />
        ))}
        <div className="bg-gray-400 h-20 w-20 flex-1"></div>
        <div className="bg-gray-300 h-20 w-20 flex-1"></div>
        <div className="bg-gray-500 h-20 w-20 flex-1"></div>
      </div>
    );
  }

  return (
    <div
      ref={props.preview ? undefined : dragRef}
      className="text-4xl  cursor-all-scroll font-medium focus-visible:border-none focus-visible:outline-none"
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#444"
          d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"
        />
      </svg>
    </div>
  );
});

FlexElementComponent.displayName = "FlexElementComponent";

export const FlexElement = withElementDisplayContainer(
  FlexElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >,
  "section"
);
