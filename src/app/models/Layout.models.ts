import { EditorComponent } from "./EditorComponents";

export type LayoutComponentType<T> = Omit<EditorComponent<T>, "id">;
