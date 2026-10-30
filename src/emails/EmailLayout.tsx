import { Body, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { emailFont, emailStyles as s } from "./theme";

/** Shared branded frame: Ink header with the mark and wordmark, Brand Blue rule, flat colours. */
export function EmailLayout({ preview, children }: { preview: string; children: ReactNode }) {
  return (
    <Html lang="en">
      {/* Poppins where the reader has it, then a system fallback stack (see theme.ts). */}
      <Head />
      <Preview>{preview}</Preview>
      <Body style={s.body}>
        <Container style={s.container}>
          <Section style={s.header}>
            <table role="presentation" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                    <Img src={`${site.url}/logo-mark.png`} width="28" height="29" alt="" />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Text style={{ ...s.wordmark, fontFamily: emailFont }}>Coxcel</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
          <Hr style={s.rule} />
          <Section style={s.content}>{children}</Section>
          <Section style={s.footer}>
            <Text style={s.small}>
              {site.name} | {site.email} | {site.url.replace(/^https?:\/\//, "")}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
