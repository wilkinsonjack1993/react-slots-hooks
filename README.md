# React Slots

Create slots within React Components in a similar way to Vue JS. This library supports Typescript

## Getting Stated

```
npm install react-slots
OR
yarn add react-slots
```

## Usage with Typescript

Create the component that will have slots inserted into it using the `useSlot` hook:

```
import { useSlots } from "react-slots";

interface LayoutSlots {
  header?: ReactNode;
  default?: ReactNode;
  footer?: ReactNode;
}

const Layout = (props: { children: ReactNode }) => {
  const { slots } = useSlots<LayoutSlots>(props.children);
  return (
    <div className="wrapper">
      <div className="header">{slots.header}</div>
      <div className="content">{slots.default}</div>
      <div className="footer">{slots.footer}</div>
    </div>
  );
};

```

Then when using this component, either use the template component or add the slot prop to indicate which slot the children belong to. Any sections without a slot attribute will be assigned to the default slot.

```
import { Template } from "react-slots-test";

<Layout>
    <div slot="header">Header</div>
    <p>test</p>
    <p>Content</p>
    <Template slot="footer">
        <p>Footer</p>
        <p>Footer2</p>
    </Template>
</Layout>
```

The Template component has only one prop 'slot'. This component can be used if you wish to put multiple parallel components within one specific slot.
