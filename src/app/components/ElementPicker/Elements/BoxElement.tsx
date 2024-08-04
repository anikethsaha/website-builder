import React from "react";
import { ConnectDragSource } from "react-dnd";
import { withElementDisplayContainer } from "src/app/hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorComponent } from "src/app/models/EditorComponents";
import { EditorElement } from "src/app/models/EditorElement";
import { StyleHelper } from "src/app/utils/StyleHelper";
import { BoxValueType } from "../Schemas/Box";
import { useDeviceType } from "src/app/stores/editor.store";

/** TYPES */
type BaseProps = EditorComponent<BoxValueType>;

/** HELPERS */
const styleHelper = new StyleHelper();

export const BoxElementComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  const deviceType = useDeviceType();

  if (props.id) {
    console.log("props.style", props.style?.[deviceType]);
    console.log(
      `styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})`,
      styleHelper.normalizeStyles(props.style?.[deviceType] ?? {})
    );
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
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32px"
        height="32px"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
      >
        <rect
          x={1}
          y={1}
          fill="none"
          stroke="#000000"
          strokeWidth={2}
          strokeMiterlimit={10}
          width={62}
          height={62}
        />
      </svg>
    </div>
  );
});

BoxElementComponent.displayName = "BoxElementComponent";

export const BoxElement = withElementDisplayContainer<BoxValueType>(
  BoxElementComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >,
  "elements",
  {
    style: {
      desktop: { width: 100, height: 100 },
      mobile: { width: 100, height: 100 },
    },
  }
);
