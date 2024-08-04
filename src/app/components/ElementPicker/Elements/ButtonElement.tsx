import React from "react";
import { ConnectDragSource } from "react-dnd";
import { withElementDisplayContainer } from "../../../hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import {
  EditorElement,
  EditorElementTypes,
} from "src/app/models/EditorElement";
import { EditorComponent } from "src/app/models/EditorComponents";
import { ButtonValueType } from "../Schemas/Button";
import { useEditor } from "src/app/hooks/useEditor";
import { StyleHelper } from "src/app/utils/StyleHelper";

type BaseProps = EditorComponent<ButtonValueType>;

const styleHelper = new StyleHelper();

/**
 * This is the component that will render the component in the canvas as Component
 * as well as this is the component that will be rendered in the element picker as Element
 */
export const ButtonElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const { setValue } = useEditor();

  const componentFocusedProps = {
    onInput: (e: any) => {
      setValue<ButtonValueType>(props, { text: e.currentTarget.textContent });
    },
  };

  return (
    <div
      ref={props.preview ? undefined : dragRef}
      suppressContentEditableWarning
      type="button"
      className="py-2 h-12 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 cursor-all-scroll "
      style={styleHelper.normalizeStyles(props.style ?? {})}
      contentEditable={(props.id && props.isFocused) || !props.preview}
      {...(props.isFocused && props.id ? componentFocusedProps : {})}
    >
      {props.value?.text ?? "Button"}
    </div>
  );
});

ButtonElementComponent.displayName = "ButtonElement";

export const ButtonElement = withElementDisplayContainer(
  ButtonElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >
);
