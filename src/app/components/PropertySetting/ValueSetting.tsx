import React from "react";
import { EditorComponent } from "src/app/models/EditorComponents";
import Form from "@rjsf/chakra-ui";
import validator from "@rjsf/validator-ajv8";

import { SCHEMA_MAP } from "./constants/SCHEMA_MAP";
import { useEditor } from "src/app/hooks/useEditor";

export const ValueSetting: React.FC<{
  component: EditorComponent<any>;
}> = ({ component }) => {
  const schema = SCHEMA_MAP[component.type];
  const { setValue } = useEditor();

  const onFormChange = (e: any) => {
    setValue(component, e.formData);
  };

  return (
    <div className="flex flex-1 flex-col gap-1 p-3 justify-center items-start">
      <div className="w-full">
        {schema && (
          <Form
            schema={schema}
            formData={component.value}
            validator={validator}
            onChange={onFormChange}
          >
            <div></div>
          </Form>
        )}
      </div>
    </div>
  );
};
