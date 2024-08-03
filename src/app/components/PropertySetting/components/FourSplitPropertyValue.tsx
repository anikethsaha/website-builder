import React from "react";

const directions = ["Top", "Right", "Bottom", "Left"];

const toCapitalCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const FourSplitPropertyValue: React.FC<{
  name: "margin" | "padding";
  styles: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, styles, handleChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500  mb-2" htmlFor="margin">
        {toCapitalCase(name)}:
      </label>
      <div className="flex flex-row gap-1">
        {directions.map((direction) => {
          const directionName = `${name}${direction}`;

          return (
            <div className="flex flex-col" key={direction}>
              <label
                className="text-xs text-gray-300 font-semibold mb-2"
                htmlFor="margin"
              >
                {direction}
              </label>
              <input
                type="text"
                placeholder="Eg: 10px"
                className="flex-1 w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
                name={directionName}
                value={styles[directionName]}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
