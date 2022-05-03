import { ReactNode } from "react";
import { useSlots, Template } from "react-slots-test";

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

function App() {
  return (
    <Layout>
      <div slot="header">Header</div>
      <div>
        <p>test</p>
        <p>Content</p>
      </div>
      <p>section</p>
      <Template slot="footer">
        <p>Footer</p>
        <p>Footer2</p>
      </Template>
    </Layout>
  );
}

export default App;
