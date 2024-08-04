import React from "react";
import { ConnectDragSource } from "react-dnd";
import { withElementDisplayContainer } from "src/app/hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorComponent } from "src/app/models/EditorComponents";
import {
  EditorElement,
  EditorElementTypes,
} from "src/app/models/EditorElement";
import { TextValueType } from "../Schemas/TextElement";
import { StyleHelper } from "src/app/utils/StyleHelper";
import { useEditor } from "src/app/hooks/useEditor";
import { Resizable } from "re-resizable";
import { SectionValueType } from "../Schemas/Section";
import { useDeviceType } from "src/app/stores/editor.store";

/** TYPES */
type BaseProps = EditorComponent<SectionValueType>;

/** HELPERS */
const styleHelper = new StyleHelper();

export const SectionElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const deviceType = useDeviceType();

  if (props.id) {
    return (
      <div
        className="flex flex-col bg-gray-500  h-full w-full"
        style={styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})}
      >
        {props.value?.type === "image" ? (
          <img src={props.value?.imageLink} className="w-full h-full" />
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={props.preview ? undefined : dragRef}
      className="text-4xl  cursor-all-scroll font-medium focus-visible:border-none focus-visible:outline-none"
    >
      <svg
        fill="#000000"
        height="32px"
        width="32px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 206.518 206.518"
      >
        <g>
          <g>
            <g>
              <path
                d="M93.517,0H3.897C1.743,0,0,1.745,0,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V3.897C97.414,1.745,95.671,0,93.517,0z M89.621,89.621H7.793V7.793h81.828V89.621z"
              />
              <path
                d="M202.621,0H113c-2.154,0-3.897,1.745-3.897,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V3.897C206.517,1.745,204.774,0,202.621,0z M198.724,89.621h-81.828V7.793h81.828V89.621z"
              />
              <path
                d="M93.517,109.103H3.897C1.743,109.103,0,110.848,0,113v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V113C97.414,110.848,95.671,109.103,93.517,109.103z M89.621,198.724H7.793v-81.828h81.828
				V198.724z"
              />
              <path
                d="M202.621,109.103H113c-2.154,0-3.897,1.745-3.897,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V113C206.517,110.848,204.774,109.103,202.621,109.103z M198.724,198.724h-81.828v-81.828
				h81.828V198.724z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
});

SectionElementComponent.displayName = "SectionElementComponent";

export const SectionElement = withElementDisplayContainer(
  SectionElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >
);
