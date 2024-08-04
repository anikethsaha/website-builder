import React from "react";
import { ConnectDragSource } from "react-dnd";
import { withElementDisplayContainer } from "../../../hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorElement } from "src/app/models/EditorElement";
import { EditorComponent } from "src/app/models/EditorComponents";
import { ButtonValueType } from "../Schemas/Button";
import { useEditor } from "src/app/hooks/useEditor";
import { StyleHelper } from "src/app/utils/StyleHelper";
import { useDeviceType } from "src/app/stores/editor.store";
import { DEVICE_TYPES } from "src/app/models/device.mode";
import { InputValueType } from "../Schemas/Input";

type BaseProps = EditorComponent<InputValueType>;

const styleHelper = new StyleHelper();

/**
 * This is the component that will render the component in the canvas as Component
 * as well as this is the component that will be rendered in the element picker as Element
 */
export const InputElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const deviceType = useDeviceType();
  return (
    <div
      className="w-full md:w-1/2 px-3"
      ref={props.preview ? undefined : dragRef}
      style={styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})}
    >
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.value?.id ?? "grid-last-name"}
      >
        {props.value?.label ?? "Label"}
      </label>
      <input
        disabled={props.preview || !props.id}
        className={`${
          props.id ? "py-2 px-4" : "py-1 px-2"
        }  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
        id={props.value?.id ?? "grid-last-name"}
        type={props.value?.type ?? "text"}
        placeholder={props.value?.placeholder ?? "Doe"}
      />
    </div>
  );
});

InputElementComponent.displayName = "InputElement";

export const InputElement = withElementDisplayContainer(
  InputElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >,
  "elements",
  { style: { [DEVICE_TYPES.DESKTOP]: { width: 390 } } }
);
