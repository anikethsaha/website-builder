import React from "react";
import { ConnectDragSource } from "react-dnd";
import { withElementDisplayContainer } from "../../../hocs/withElementDisplayContainer";
import { ComponentProperties } from "src/app/models/ComponentProperties";
import { EditorElement } from "src/app/models/EditorElement";
import { EditorComponent } from "src/app/models/EditorComponents";
import { StyleHelper } from "src/app/utils/StyleHelper";
import { BasicLayoutValueType } from "../Schemas/BasicLayout/Schema";

type BaseProps = EditorComponent<BasicLayoutValueType> & {
  isDragging?: boolean;
};

const styleHelper = new StyleHelper();

/**
 * This is the component that will render the component in the canvas as Component
 * as well as this is the component that will be rendered in the element picker as Element
 */
export const BasicLayoutComponent = React.forwardRef<
  ConnectDragSource,
  BaseProps
>((props, dragRef) => {
  return (
    <div
      ref={dragRef}
      className="p-2  bg-gray-100 text-gray-500 rounded border border-slate-300 flex flex-row  w-full h-36 justify-between items-center cursor-all-scroll"
      style={styleHelper.normalizeStyles(props.style ?? {})}
    >
      <div className="text-2xl flex-1 flex justify-center items-center">1</div>
      <div className="text-2xl flex-1 flex justify-center items-center">2</div>
      <div className="text-2xl flex-1 flex justify-center items-center">3</div>
    </div>
  );
});

BasicLayoutComponent.displayName = "BasicLayoutComponent";

export const BasicLayout = withElementDisplayContainer(
  BasicLayoutComponent as React.ForwardRefExoticComponent<
    React.RefAttributes<ConnectDragSource> &
      EditorElement &
      ComponentProperties & { isDragging?: boolean | undefined }
  >
);
