import React from "react";
import { useEditor } from "src/app/hooks/useEditor";
import {
  usePreviewMode,
  useEditorStore,
  useDeviceType,
} from "src/app/stores/editor.store";

export const NavbarPanel = () => {
  const { togglePreviewMode, setDeviceType } = useEditor();
  const previewMode = usePreviewMode();
  const deviceType = useDeviceType();

  const componentsLength = useEditorStore((state) => state.components?.length);

  return (
    <div className="flex flex-row rounded bg-slate-700 overflow-hidden">
      <div
        className={`py-1 px-2 hover:opacity-65 cursor-pointer justify-center items-center flex  ${
          deviceType === "desktop" ? "bg-slate-600" : ""
        }`}
        onClick={() => setDeviceType("desktop")}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M27 5H5a2 2 0 00-2 2v14a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zM11 27h10m-7 0h4l-.5-4h-3l-.5 4z"
          />
        </svg>
      </div>
      <div
        onClick={() => setDeviceType("mobile")}
        className={`py-1 px-2 hover:opacity-65 cursor-pointer justify-center items-center flex  ${
          deviceType === "mobile" ? "bg-slate-600" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          id="mobile"
          fill="white"
        >
          <defs>
            <circle id="a" cx="12" cy="19" r="2"></circle>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <rect
              width="13"
              height="20"
              x="3.5"
              y="0"
              stroke="white "
              rx="2"
            ></rect>
            <use fill="#FFF"></use>
            <circle cx="10" cy="15" r="1.5" stroke="white"></circle>
          </g>
        </svg>
      </div>
      <div
        className="py-1 px-2 hover:opacity-65 cursor-pointer justify-center items-center flex"
        onClick={componentsLength > 0 ? togglePreviewMode : undefined}
      >
        {previewMode ? (
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            fill="white"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
          </svg>
        )}
      </div>
    </div>
  );
};
