import { useOutsideClick } from "@chakra-ui/react";
import React, { useRef } from "react";

import { useEditor } from "src/app/hooks/useEditor";

import { EditorComponent } from "src/app/models/EditorComponents";

export const ElementFocusLayer: React.FC<{
  children?: React.ReactNode;
  component: EditorComponent<T>;
}> = ({ children, component }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { focusComponent, clearCompoenntFocus } = useEditor();
  const id = component.id;

  // useOutsideClick({
  //   ref,
  //   handler() {
  //     clearCompoenntFocus(id);
  //   },
  // });

  const focusedStyle = component.isFocused
    ? " border-2 border-blue-500 p-2 box-border"
    : "";

  return (
    <div
      onClick={() => {
        console.log("on click", id);
        focusComponent(id);
      }}
      ref={ref}
      className={focusedStyle}
    >
      {children}
    </div>
  );
};
