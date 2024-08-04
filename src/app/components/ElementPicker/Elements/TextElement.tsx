import React from "react";
import { ConnectDragSource } from "react-dnd";
import { Resizable, ResizableProps } from "re-resizable";
import { withElementDisplayContainer } from "src/app/hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorComponent } from "src/app/models/EditorComponents";
import { EditorElement } from "src/app/models/EditorElement";
import { TextValueType } from "../Schemas/TextElement";
import { StyleHelper } from "src/app/utils/StyleHelper";
import { useEditor } from "src/app/hooks/useEditor";
import { useDeviceType } from "src/app/stores/editor.store";

/** TYPES */
type BaseProps = EditorComponent<TextValueType>;

/** HELPERS */
const styleHelper = new StyleHelper();

export const TextElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const { setValue } = useEditor();
  const deviceType = useDeviceType();
  const componentFocusedProps = {
    onInput: (e: any) => {
      setValue<TextValueType>(props, {
        text: e.currentTarget.textContent,
      });
    },
  };

  return (
    <div
      ref={props.preview ? undefined : dragRef}
      style={
        props.id
          ? styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})
          : undefined
      }
      className="text-4xl relative cursor-all-scroll font-medium focus-visible:border-none focus-visible:outline-none"
      suppressContentEditableWarning
      contentEditable={props.isFocused}
      {...(props.isFocused && props.id ? componentFocusedProps : {})}
    >
      {props.value?.text ?? "Aa"}
    </div>
  );
});

TextElementComponent.displayName = "TextElementComponent";

export const TextElement = withElementDisplayContainer(
  TextElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >
);
