import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 20, 2026"
      intro="These Terms govern your use of the CrowdStock app and website. By creating an account, you agree to them."
    >
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By creating a CrowdStock account or using the app, you agree to
          these Terms and our Privacy Policy. If you do not agree, please do
          not use CrowdStock.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <LegalList
          items={[
            "You must be at least 18 years old.",
            "You must complete any identity verification we require.",
            "You may hold only one CrowdStock account.",
            "You are responsible for using CrowdStock in line with the laws of the location you use it from.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. What CrowdStock is">
        <p>
          CrowdStock is a participation platform built around hourly rounds.
          In each round, every participant sets their own stock value. When
          the round closes, CrowdStock combines everyone&apos;s stock value
          into the People&apos;s Hourly Stock Value. How much you earn from a
          round depends on how close your stock value was to that number.
          Auto Stock is an optional feature that sets your chosen value
          automatically at the start of each round you enable it for.
        </p>
      </LegalSection>

      <LegalSection title="4. Not an investment product">
        <p>
          CrowdStock is not a bank, broker, investment adviser, or provider
          of financial products. Setting a stock value does not buy shares,
          securities, or any real-world asset, and nothing in the app is
          financial advice. The People&apos;s Hourly Stock Value is generated
          entirely from participants&apos; own submitted values each round —
          it does not track any market, index, or external price. Outcomes
          depend on the collective behavior of participants that hour and are
          inherently uncertain; CrowdStock does not guarantee any return,
          outcome, or level of earnings.
        </p>
      </LegalSection>

      <LegalSection title="5. Your account">
        <p>
          Keep your login details and device secure — you are responsible
          for activity on your account. Tell us immediately at{" "}
          <a href="mailto:support@crowdstock.app" className="text-primary hover:underline">
            support@crowdstock.app
          </a>{" "}
          if you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="6. Wallet, funding & payouts">
        <LegalList
          items={[
            "You fund your CrowdStock wallet using the payment methods we support.",
            "Amounts set into an open round are held for that round and released back into your wallet, plus any earnings, once the round settles.",
            "Payout requests are sent to the bank details you provide and processed within the timeframe shown in the app.",
            "We may apply limits to deposits, payouts, or round participation to manage risk and comply with regulation.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Round settlement is final">
        <p>
          Once a round settles and results are published, that result is
          final, save for cases of a proven technical error or fraud on our
          part or another participant&apos;s part.
        </p>
      </LegalSection>

      <LegalSection title="8. Prohibited conduct">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Create or use more than one account.",
            "Use bots, scripts, or automation to set stock values.",
            "Attempt to coordinate with other participants to manipulate the People's Hourly Stock Value.",
            "Use CrowdStock for money laundering or any unlawful purpose.",
            "Attempt to access another user's account or our systems without authorization.",
          ]}
        />
        <p>
          We may suspend or close accounts that breach this section, and
          withhold funds connected to the breach where permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Fees">
        <p>
          Any fees that apply — for example on deposits, payouts, or currency
          conversion — will be shown to you in the app before you confirm the
          transaction.
        </p>
      </LegalSection>

      <LegalSection title="10. Taxes">
        <p>
          You are responsible for determining and paying any taxes that apply
          to your use of CrowdStock under the laws of your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="11. Suspending or closing your account">
        <p>
          You can close your account at any time by contacting support. We
          may suspend or close an account to comply with the law, to
          investigate suspected fraud or abuse, or where required by our
          payment or regulatory partners. Where possible, we will return any
          available wallet balance not connected to an investigation.
        </p>
      </LegalSection>

      <LegalSection title="12. Disclaimers & limitation of liability">
        <p>
          CrowdStock is provided &ldquo;as is.&rdquo; To the fullest extent
          permitted by law, CrowdStock is not liable for indirect,
          incidental, or consequential losses arising from your use of the
          app, including losses relating to round outcomes, service
          interruptions, or third-party payment failures.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to these terms">
        <p>
          We may update these Terms from time to time. We will post the
          updated version here and update the &ldquo;Last updated&rdquo;
          date. Continuing to use CrowdStock after an update means you accept
          the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Governing law">
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:support@crowdstock.app" className="text-primary hover:underline">
            support@crowdstock.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
