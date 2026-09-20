import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 20, 2026"
      intro="This Privacy Policy explains what information CrowdStock collects, how we use it, and the choices and rights you have over your data."
    >
      <LegalSection title="1. Who we are">
        <p>
          CrowdStock (&ldquo;CrowdStock&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the CrowdStock
          mobile app and website, through which people set an hourly stock
          value together. This policy applies to anyone who visits our
          website or uses the app.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>We collect information in three ways:</p>
        <LegalList
          items={[
            <>
              <strong className="text-text">You give it to us</strong> — name,
              email address, phone number, date of birth, and identity
              verification documents when you create an account; bank or card
              details when you fund your wallet or request a payout.
            </>,
            <>
              <strong className="text-text">We collect it automatically</strong> —
              device type, operating system, IP address, app version, and how
              you use the app (rounds joined, values set, pages visited).
            </>,
            <>
              <strong className="text-text">We receive it from others</strong> —
              confirmation of a payment from our payment processors, or
              identity confirmation from a verification provider.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <LegalList
          items={[
            "To create and maintain your account and wallet.",
            "To run each hourly round: record the stock value you set, calculate the People's Hourly Stock Value, and settle results.",
            "To process deposits and payouts, and to verify your identity where required by law.",
            "To send you round reminders, receipts, and service updates.",
            "To detect and prevent fraud, multiple-accounting, or abuse of the platform.",
            "To respond to support requests and improve the app.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Legal basis for processing">
        <p>
          Where the Nigeria Data Protection Act applies, we process your
          information because it is necessary to perform our contract with
          you (running your account and each round), to comply with a legal
          obligation (identity verification, record-keeping), or because you
          have given consent (for example, marketing messages you can opt out
          of at any time).
        </p>
      </LegalSection>

      <LegalSection title="5. Who we share it with">
        <p>We do not sell your personal data. We share it only with:</p>
        <LegalList
          items={[
            "Payment processors and banking partners, to move money into and out of your wallet.",
            "Identity verification providers, to confirm you are who you say you are.",
            "Cloud hosting and analytics providers, who process data on our behalf under contract.",
            "Regulators, law enforcement, or courts, where we are legally required to.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Data storage & security">
        <p>
          We use industry-standard safeguards — encryption in transit,
          access controls, and regular security reviews — to protect your
          data. No system is completely secure, and we encourage you to use a
          strong, unique password and keep your device secure.
        </p>
      </LegalSection>

      <LegalSection title="7. How long we keep your data">
        <p>
          We keep account and transaction records for as long as your account
          is active, and for a period afterward as required by financial
          record-keeping and anti-fraud obligations. You can request deletion
          of data we are not legally required to retain.
        </p>
      </LegalSection>

      <LegalSection title="8. Your rights">
        <p>You can ask us to:</p>
        <LegalList
          items={[
            "Give you a copy of the personal data we hold about you.",
            "Correct information that is inaccurate or incomplete.",
            "Delete your data, subject to our legal record-keeping obligations.",
            "Restrict or object to certain uses of your data.",
            "Withdraw consent for marketing communications at any time.",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@crowdstock.app" className="text-primary hover:underline">
            privacy@crowdstock.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Age restriction">
        <p>
          CrowdStock is for people aged 18 and older. We do not knowingly
          collect information from anyone under 18, and we verify age as part
          of identity verification.
        </p>
      </LegalSection>

      <LegalSection title="10. Cookies">
        <p>
          Our website uses essential cookies to keep the site working, and
          may use analytics cookies to understand how visitors use it. You
          can control cookies through your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to this policy">
        <p>
          We may update this policy as our service changes. We will post the
          new version here and update the &ldquo;Last updated&rdquo; date above. Material
          changes will be highlighted in the app.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact us">
        <p>
          Questions about this policy or your data can be sent to{" "}
          <a href="mailto:privacy@crowdstock.app" className="text-primary hover:underline">
            privacy@crowdstock.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
