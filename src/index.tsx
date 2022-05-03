import React from "react";
import { Children, ReactElement, ReactNode } from "react";

export function useSlots<T>(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  const slots = {} as Record<
    string,
    | string
    | number
    | ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
  >;

  const defaultChildren = childrenArray.filter((item) => {
    const reactElement = item as ReactElement;
    const slot = reactElement?.props?.slot as string | undefined;

    if (slot && slot !== "default") {
      slots[slot] = item;
      return false;
    }
    return true;
  });

  slots["default"] = defaultChildren;

  return { slots: slots as unknown as T };
}

export const Template = (props: {
  slot: string | undefined;
  children: ReactNode;
}) => {
  return <>{props.children}</>;
};
