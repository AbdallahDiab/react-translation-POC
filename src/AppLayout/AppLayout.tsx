import { FC, ReactNode } from "react";
import { Layout } from "antd";
const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { Content } = Layout;

  return (
    <>
      <Layout className="layout">
        <Content className="content">{children}</Content>
      </Layout>
    </>
  );
};

export default AppLayout;
