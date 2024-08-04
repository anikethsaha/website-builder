import React from "react";
import { EditorComponent } from "src/app/models/EditorComponents";
import { ElementTypeMap } from "./contants/ElementTypeMap";
import { ElementAutoLayout } from "./CanvaElementLayers/ElementAutoLayout";
import { ElementFocusLayer } from "./CanvaElementLayers/ElementFocusLayer";
import { ElementResizableLayer } from "./CanvaElementLayers/ElementResizableLayer";

/**
 * This is the component that will render the component in the canvas
 * so basically it converts the element to a component
 * @param props
 * @returns
 */
export const ComponentRenderer = <T extends unknown>(
  props: EditorComponent<T>
) => {
  if (ElementTypeMap[props.type]) {
    const ElementToRender = ElementTypeMap[props.type];

    return (
      <ElementAutoLayout component={props}>
        <ElementFocusLayer component={props}>
          <ElementResizableLayer component={props}>
            <ElementToRender {...props} />
          </ElementResizableLayer>
        </ElementFocusLayer>
      </ElementAutoLayout>
    );
  }

  return <></>;
};
