import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  List,
  InlineStack,
  Badge,
  Divider,
} from "@shopify/polaris";

export default function AppIndex() {
  return (
    <Page
      title="Countdown Announcement Bar"
      subtitle="Create a high‑converting, customizable countdown bar to highlight your offers"
    >
      <Layout>
        {/* Overview / Value section */}
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <BlockStack gap="200">
                <Text as="h2" variant="headingLg">
                  What this app does
                </Text>
                <Text as="p" variant="bodyMd">
                  This app adds a fully customizable announcement bar with a live countdown timer to your theme, helping you highlight limited‑time sales and boost urgency.
                </Text>
              </BlockStack>

              <InlineStack gap="400" wrap align="start">
                <BlockStack gap="100" maxInlineSize="260px">
                  <Text as="h3" variant="headingSm">
                    Drive urgency
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Show a real‑time countdown to your offer end date to encourage customers to purchase before time runs out.
                  </Text>
                </BlockStack>

                <BlockStack gap="100" maxInlineSize="260px">
                  <Text as="h3" variant="headingSm">
                    Match your branding
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Control fonts, colors, and spacing so the bar blends seamlessly with your existing store design.
                  </Text>
                </BlockStack>

                <BlockStack gap="100" maxInlineSize="260px">
                  <Text as="h3" variant="headingSm">
                    Easy to configure
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Edit all settings directly from the theme editor, without touching code.
                  </Text>
                </BlockStack>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* How to set up section */}
        <Layout.Section>
          <Card title="How to set up the countdown bar" sectioned>
            <BlockStack gap="300">
              <Text as="p" variant="bodyMd">
                Follow these steps in your Online Store theme editor to add the countdown announcement bar to your storefront.
              </Text>

              <List type="number">
                <List.Item>
                  Go to <Text as="span" variant="bodySm">Online Store &gt; Themes &gt; Customize</Text>.
                </List.Item>
                <List.Item>
                  In the theme editor, open the <Text as="span" variant="bodySm">Header</Text> or the section where you want the bar to appear, then click <Text as="span" variant="bodySm">Add section</Text>.
                </List.Item>
                <List.Item>
                  Search for <Text as="span" variant="bodySm">Countdown Announcement</Text> (the app block) and add it to your layout.
                </List.Item>
                <List.Item>
                  Click the newly added app block to open its settings panel on the right side.
                </List.Item>
                <List.Item>
                  Adjust the text, end date, colors, and font options, then click <Text as="span" variant="bodySm">Save</Text>.
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* Settings explanation section */}
        <Layout.Section>
          <Card title="Explanation of key settings" sectioned>
            <BlockStack gap="300">
              <Text as="p" variant="bodyMd">
                These are the main options you will see for the Countdown Announcement block in the theme editor.
              </Text>

              <BlockStack gap="200">
                <BlockStack gap="100">
                  <InlineStack gap="200" align="center">
                    <Text as="h3" variant="headingSm">
                      Header Text
                    </Text>
                    <Badge tone="success">Required</Badge>
                  </InlineStack>
                  <Text as="p" variant="bodyMd">
                    The main message shown on the bar, such as “🔥 Sale Ends In” or “Limited Time Free Shipping”.
                  </Text>
                </BlockStack>

                <Divider />

                <BlockStack gap="100">
                  <Text as="h3" variant="headingSm">
                    Offer End Date
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Date when your promotion ends. Use YYYY-MM-DD (2026-01-01) or DD/MM/YYYY (01/01/2026). If the date is invalid or empty, the app automatically falls back to 15 days from today.
                  </Text>
                </BlockStack>

                <Divider />

                <BlockStack gap="100">
                  <Text as="h3" variant="headingSm">
                    Show Countdown Timer
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Turn this on to display the live DD:HH:MM:SS countdown. Turn it off to show only the announcement text, centered across the bar.
                  </Text>
                </BlockStack>

                <Divider />

                <BlockStack gap="100">
                  <Text as="h3" variant="headingSm">
                    Styling controls
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Use Bar Font Size, Countdown Font Size, colors, font family, and padding to control the size and appearance of the bar and the timer blocks.
                  </Text>
                </BlockStack>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* Tips section */}
        <Layout.Section>
          <Card title="Best practices for higher conversions" sectioned>
            <List>
              <List.Item>
                Use short, clear messages like “Sale ends in” or “Offer expires soon” to keep the bar readable on mobile.
              </List.Item>
              <List.Item>
                Choose a background color that stands out from your header but still matches your brand palette.
              </List.Item>
              <List.Item>
                Avoid setting the countdown too far in the future; urgency works best for limited‑time offers.
              </List.Item>
            </List>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
