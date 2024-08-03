export const propertiesNeedPixelSuffix = [
  "width",
  "height",
  "borderRadius",
  "margin",
  "padding",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontSize",
];

export const defaultValues = {
  fontSize: "16px",
};

export class StyleHelper {
  addPixelIfRequired(value: string, propertyName: string) {
    if (propertiesNeedPixelSuffix.includes(propertyName)) {
      return `${value}px`;
    }
    return value;
  }

  normalizeStyles(styles: React.CSSProperties) {
    const normalizedStyles: React.CSSProperties = {};
    for (const key in styles) {
      normalizedStyles[key] = this.addPixelIfRequired(styles[key], key);
    }

    // handle default values
    for (const key in defaultValues) {
      if (!normalizedStyles[key]) {
        normalizedStyles[key] = defaultValues[key];
      }
    }
    return normalizedStyles;
  }
}
