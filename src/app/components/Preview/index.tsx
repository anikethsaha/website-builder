import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { PreviewComponentRenderer } from "./PreviewComponentRenderer";
import { useEditorComponents } from "src/app/hooks/useEditorComponent";
import { useDeviceType } from "src/app/stores/editor.store";

export const Preview = () => {
  const components = useEditorComponents();
  const deviceType = useDeviceType();
  const [htmlCodeString, setHTMLCodeString] = useState("");

  useEffect(() => {
    const htmlCode = ReactDOMServer.renderToString(
      <PreviewComponentRenderer
        components={components}
        deviceType={deviceType}
      />
    );
    setHTMLCodeString(htmlCode);
  }, [JSON.stringify(components), deviceType]);

  return (
    <div className="flex flex-col justify-center items-center p-8 flex-1 w-full h-full relative bg-gray-100">
      <div
        className={`${
          deviceType === "mobile" ? "w-1/5" : "w-2/3"
        } h-full rounded-md bg-white border border-slate-200`}
      >
        <iframe
          className="w-full h-full"
          srcDoc={`  
              <html >
                <head>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <title>Preview</title>
                    <style>
                      html {
                        height: 100%;
                        width: 100%;
                      }
                    </style>
                    </head>
                    <body class=" w-full h-full">
                    <div class="relative w-full h-full">
                    ${htmlCodeString}
                    </div>
                    </body>
                    </html>
              
              `}
        />
      </div>
    </div>
  );
};
