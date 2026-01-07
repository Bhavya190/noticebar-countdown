import { Outlet, Scripts } from "react-router";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import "./styles/tailwind.css";
import TestComponent from "./components/TestComponent";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Noticebar Countdown</title>
      </head>
      <body className="bg-gray-100">
        <AppProvider i18n={en}>
          <div className="min-h-screen p-8">
            <TestComponent />
            <Outlet />
          </div>
        </AppProvider>
        <Scripts />
      </body>
    </html>
  );
}
