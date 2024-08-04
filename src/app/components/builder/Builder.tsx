import React from "react";
import { ElementPicker } from "../ElementPicker";
import { PropertySetting } from "../PropertySetting";
import { Canva } from "../Canva";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { usePreviewMode } from "src/app/stores/editor.store";
import { Preview } from "../Preview";

export const Builder = () => {
  const previewMode = usePreviewMode();
  return (
    <div
      className="h-full w-full flex flex-row"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <DndProvider backend={HTML5Backend}>
        {previewMode ? (
          <Preview />
        ) : (
          <>
            <ElementPicker />
            <Canva />
            <PropertySetting />
          </>
        )}
      </DndProvider>
    </div>
  );
};
