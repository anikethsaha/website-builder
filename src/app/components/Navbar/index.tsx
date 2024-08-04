import React from "react";
import { useEditor } from "src/app/hooks/useEditor";
import { useEditorStore, usePreviewMode } from "src/app/stores/editor.store";
import { NavbarPanel } from "./NavbarPanel";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 flex flex-row-reverse  left-0 h-12 w-full bg-slate-900 items-center justify-center">
      <NavbarPanel />
    </div>
  );
};
