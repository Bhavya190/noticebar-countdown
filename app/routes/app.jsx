import { Outlet } from "react-router";
import { Page } from "@shopify/polaris";

export default function App() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}
