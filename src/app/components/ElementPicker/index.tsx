import React from "react";
import { ButtonElement } from "./Elements/ButtonElement";
import { EditorElementTypes } from "src/app/models/EditorElement";
import { EditorComponent } from "src/app/models/EditorComponents";
import { TextComponent } from "./Elements/TextElement";

export const ElementPicker = () => {
  return (
    <div className="w-96  mt-12 	h-full border-r-slate-300 border-r bg-white flex flex-col p-4">
      <div className=" text-sm text-gray-500 font-semibold text-left">
        Select Elements
      </div>

      <div className="flex flex-col gap-2   mt-4">
        <ButtonElement type={EditorElementTypes.BUTTON} />
        <TextComponent type={EditorElementTypes.TEXT} />
      </div>
    </div>
  );
};
