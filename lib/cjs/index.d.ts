import { ReactNode } from "react";
export declare function useSlots<T>(children: ReactNode): {
    slots: T;
};
export declare const Template: (props: {
    slot: string | undefined;
    children: ReactNode;
}) => JSX.Element;
