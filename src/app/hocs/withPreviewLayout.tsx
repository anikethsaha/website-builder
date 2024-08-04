import React from "react";

import { EditorElement } from "../models/EditorElement";
import { EditorComponent } from "../models/EditorComponents";

export const withPreviewLayout = (
  Element: React.ComponentType<EditorElement>
) => {
  const ElementDisplayContainer: React.FC<EditorComponent<unknown>> = (
    props
  ) => {
    const top = props.position?.coordinates?.y
      ? props.position?.coordinates.y > 300
        ? props.position?.coordinates.y - 300
        : props.position?.coordinates.y
      : 0;

    const left = props.position?.coordinates?.x
      ? props.position?.coordinates.x > 300
        ? props.position?.coordinates.x - 300
        : props.position?.coordinates.x
      : 0;

    return (
      <div
        className="absolute"
        style={{
          top,
          left,
        }}
      >
        <Element {...props} />
      </div>
    );
  };

  return ElementDisplayContainer;
};
