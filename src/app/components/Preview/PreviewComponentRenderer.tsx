import React, { use } from "react";
import { useEditorComponents } from "src/app/hooks/useEditorComponent";
import { ElementTypeMap } from "../Canva/contants/ElementTypeMap";
import { EditorComponent } from "src/app/models/EditorComponents";
import { withPreviewLayout } from "src/app/hocs/withPreviewLayout";

export const PreviewComponentRenderer: React.FC<{
  components: EditorComponent<unknown>[];
}> = ({ components }) => {
  return (
    <>
      {components.map((component) => {
        const Component = ElementTypeMap[component.type];

        if (Component) {
          const PreviewCompatibleComponent = withPreviewLayout(Component);
          return (
            <PreviewCompatibleComponent
              key={component.id}
              {...component}
              preview
            />
          );
        }
        return null;
      })}
    </>
  );
};
