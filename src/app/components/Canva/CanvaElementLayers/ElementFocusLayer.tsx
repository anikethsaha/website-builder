import React, { useEffect, useRef, useState } from "react";

import { useEditor } from "src/app/hooks/useEditor";

import { EditorComponent } from "src/app/models/EditorComponents";

export const ElementFocusLayer: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<T>;
}> = ({ children, component }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { focusComponent } = useEditor();
  const [isHovered, setIsHovered] = useState(false);
  const id = component.id;

  const focusedStyle = component.isFocused
    ? " border-2 border-blue-500 p-2 box-border"
    : "";

  return (
    <div
      onClick={() => {
        focusComponent(id);
      }}
      ref={ref}
      className={focusedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsHovered(false)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
      {/* {false ? (
        <div className="relative ">
          <div
            style={{ zIndex: 9 }}
            className="w-screen h-screen absolute bottom-1/2 right-1/2   border border-red-300 border-dashed overflow-hidden"
          ></div>
          <div
            style={{ zIndex: 9 }}
            className="w-screen h-screen absolute bottom-1/2 left-1/2  border border-red-300 border-dashed overflow-hidden "
          ></div>
          <div
            style={{ zIndex: 9 }}
            className="w-screen h-screen absolute top-1/2 right-1/2  border border-red-300 border-dashed overflow-hidden"
          ></div>
          <div
            style={{ zIndex: 9 }}
            className="w-screen h-screen absolute top-1/2 left-1/2   border border-red-300 border-dashed overflow-hidden"
          ></div>
          <div style={{ zIndex: 10, position: "relative" }}>{children}</div>
        </div>
      ) : (
        children
      )} */}
    </div>
  );
};
