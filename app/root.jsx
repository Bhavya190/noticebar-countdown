// app/root.jsx
import { Outlet } from "react-router";
import {
  AppProvider,
  Frame,
} from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

export default function Root() {
  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Outlet />
      </Frame>
    </AppProvider>
  );
}
