import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  List,
  InlineStack,
  Badge,
} from "@shopify/polaris";
import stylesHref from "./app._index.css?url";

/* Route-scoped CSS (you can keep this if you have extra custom styles) */
export const links = () => [
  { rel: "stylesheet", href: stylesHref },
];

export default function AppIndex() {
  return (
    <div className="appShell min-h-screen bg-slate-950">
      <Page
        title="Countdown Announcement Bar"
        subtitle="Create a high‑converting, customizable countdown bar to highlight your offers"
      >
        {/* Page background container */}
        <div className="pageBackground max-w-5xl mx-auto py-8 space-y-6">
          <Layout>
            {/* Overview / Value section */}
            <Layout.Section>
              <Card>
                <div className="heroCard relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                  {/* Inner glass panel */}
                  <div className="rounded-2xl bg-slate-950/95 p-6 md:p-8 text-slate-50">
                    <BlockStack gap="400">
                      <BlockStack gap="200">
                        <Text
                          as="h2"
                          variant="headingLg"
                          className="tracking-tight"
                        >
                          Countdown bars that actually convert
                        </Text>
                        <Text
                          as="p"
                          variant="bodyMd"
                          className="text-slate-200 max-w-2xl"
                        >
                          Add a fully customizable announcement bar with a live
                          countdown timer to your theme to highlight limited‑time
                          sales and boost urgency without touching code.
                        </Text>
                      </BlockStack>

                      {/* 3-column feature grid */}
                      <InlineStack
                        gap="400"
                        wrap
                        align="start"
                        className="featureGrid grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
                      >
                        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-sm">
                          <BlockStack gap="100" maxInlineSize="260px">
                            <Text as="h3" variant="headingSm">
                              Drive urgency
                            </Text>
                            <Text
                              as="p"
                              variant="bodyMd"
                              className="text-slate-200 text-sm"
                            >
                              Show a real‑time countdown to your offer end date to
                              encourage customers to purchase before time runs out.
                            </Text>
                          </BlockStack>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-sm">
                          <BlockStack gap="100" maxInlineSize="260px">
                            <Text as="h3" variant="headingSm">
                              Match your branding
                            </Text>
                            <Text
                              as="p"
                              variant="bodyMd"
                              className="text-slate-200 text-sm"
                            >
                              Control fonts, colors, and spacing so the bar blends
                              seamlessly with your existing store design.
                            </Text>
                          </BlockStack>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-sm">
                          <BlockStack gap="100" maxInlineSize="260px">
                            <Text as="h3" variant="headingSm">
                              Easy to configure
                            </Text>
                            <Text
                              as="p"
                              variant="bodyMd"
                              className="text-slate-200 text-sm"
                            >
                              Edit all settings directly from the theme editor,
                              without touching any code.
                            </Text>
                          </BlockStack>
                        </div>
                      </InlineStack>
                    </BlockStack>
                  </div>
                </div>
              </Card>
            </Layout.Section>

            {/* How to set up section */}
            <Layout.Section>
              <Card
                title="How to set up the countdown bar"
                sectioned
              >
                <BlockStack
                  gap="300"
                  className="cardBody space-y-4 text-slate-200"
                >
                  <Text as="p" variant="bodyMd">
                    Follow these steps in your Online Store theme editor to add
                    the countdown announcement bar to your storefront.
                  </Text>

                  <div className="orderedListWrapper bg-slate-900/60 rounded-xl border border-slate-800 p-4 md:p-5">
                    <List type="number">
                      <List.Item>
                        Go to{" "}
                        <Text as="span" variant="bodySm" className="font-medium">
                          Online Store &gt; Themes &gt; Customize
                        </Text>
                        .
                      </List.Item>
                      <List.Item>
                        In the theme editor, open the{" "}
                        <Text as="span" variant="bodySm" className="font-medium">
                          Header
                        </Text>{" "}
                        or the section where you want the bar to appear, then
                        click{" "}
                        <Text as="span" variant="bodySm" className="font-medium">
                          Add section
                        </Text>
                        .
                      </List.Item>
                      <List.Item>
                        Search for{" "}
                        <Text as="span" variant="bodySm" className="font-medium">
                          Countdown Announcement
                        </Text>{" "}
                        (the app block) and add it to your layout.
                      </List.Item>
                      <List.Item>
                        Click the newly added app block to open its settings panel
                        on the right side.
                      </List.Item>
                      <List.Item>
                        Adjust the text, end date, colors, and font options, then
                        click{" "}
                        <Text as="span" variant="bodySm" className="font-medium">
                          Save
                        </Text>
                        .
                      </List.Item>
                    </List>
                  </div>
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Settings explanation section */}
            <Layout.Section>
              <Card
                title="Explanation of key settings"
                sectioned
              >
                <BlockStack
                  gap="300"
                  className="cardBody space-y-4 text-slate-200"
                >
                  <Text as="p" variant="bodyMd">
                    These are the main options you will see for the Countdown
                    Announcement block in the theme editor.
                  </Text>

                  <BlockStack
                    gap="200"
                    className="space-y-6"
                  >
                    <BlockStack
                      gap="100"
                      className="settingRow space-y-2 border border-slate-800 rounded-xl p-4 bg-slate-900/60"
                    >
                      <InlineStack
                        gap="200"
                        align="center"
                        className="justify-between"
                      >
                        <Text as="h3" variant="headingSm">
                          Header Text
                        </Text>
                        <Badge tone="success">Required</Badge>
                      </InlineStack>
                      <Text as="p" variant="bodyMd" className="text-slate-200">
                        The main message shown on the bar, such as “🔥 Sale Ends
                        In” or “Limited Time Free Shipping”.
                      </Text>
                    </BlockStack>

                    <BlockStack
                      gap="100"
                      className="settingRow space-y-2 border border-slate-800 rounded-xl p-4 bg-slate-900/60"
                    >
                      <Text as="h3" variant="headingSm">
                        Offer End Date
                      </Text>
                      <Text as="p" variant="bodyMd" className="text-slate-200">
                        Date when your promotion ends. Use YYYY-MM-DD (2026-01-01)
                        or DD/MM/YYYY (01/01/2026). If the date is invalid or
                        empty, the app automatically falls back to 15 days from
                        today.
                      </Text>
                    </BlockStack>

                    <BlockStack
                      gap="100"
                      className="settingRow space-y-2 border border-slate-800 rounded-xl p-4 bg-slate-900/60"
                    >
                      <Text as="h3" variant="headingSm">
                        Show Countdown Timer
                      </Text>
                      <Text as="p" variant="bodyMd" className="text-slate-200">
                        Turn this on to display the live DD:HH:MM:SS countdown.
                        Turn it off to show only the announcement text, centered
                        across the bar.
                      </Text>
                    </BlockStack>

                    <BlockStack
                      gap="100"
                      className="settingRow space-y-2 border border-slate-800 rounded-xl p-4 bg-slate-900/60"
                    >
                      <Text as="h3" variant="headingSm">
                        Styling controls
                      </Text>
                      <Text as="p" variant="bodyMd" className="text-slate-200">
                        Use Bar Font Size, Countdown Font Size, colors, font
                        family, and padding to control the size and appearance of
                        the bar and the timer blocks.
                      </Text>
                    </BlockStack>
                  </BlockStack>
                </BlockStack>
              </Card>
            </Layout.Section>

            {/* Tips section */}
            <Layout.Section>
              <Card title="Best practices for higher conversions" sectioned>
                <div className="cardBody bg-slate-900/60 rounded-xl border border-slate-800 p-4 md:p-5 text-slate-200">
                  <List>
                    <List.Item>
                      Use short, clear messages like “Sale ends in” or “Offer
                      expires soon” to keep the bar readable on mobile.
                    </List.Item>
                    <List.Item>
                      Choose a background color that stands out from your header
                      but still matches your brand palette.
                    </List.Item>
                    <List.Item>
                      Avoid setting the countdown too far in the future; urgency
                      works best for limited‑time offers.
                    </List.Item>
                  </List>
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        </div>
      </Page>
    </div>
  );
}
