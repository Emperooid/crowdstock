import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalList } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Responsible Use",
};

export default function ResponsibleUsePage() {
  return (
    <LegalPage
      title="Responsible Use"
      updated="September 20, 2026"
      intro="CrowdStock is meant to be a fun way to take part alongside other people, not a way to make ends meet. Here's how to keep it that way."
    >
      <LegalSection title="1. Only set what you can afford to set aside">
        <p>
          Treat any amount you put into a round as spent the moment you set
          it. Never fund your wallet with money you need for rent, bills,
          school fees, or any other essential cost, and never borrow money to
          take part.
        </p>
      </LegalSection>

      <LegalSection title="2. Use limits">
        <p>
          You can set your own deposit and spending limits in the app under
          Settings → Limits. Once set, a limit takes effect immediately and
          any decrease is applied right away; increases take effect after a
          short cooling-off period.
        </p>
      </LegalSection>

      <LegalSection title="3. Know the warning signs">
        <p>
          Consider taking a break if you notice yourself:
        </p>
        <LegalList
          items={[
            "Setting more into rounds than you planned to, to try to make up for an earlier round.",
            "Spending money meant for essentials to fund your wallet.",
            "Thinking about rounds when you should be focused on work, school, or family.",
            "Feeling anxious, guilty, or unable to stop when you try to take a break.",
            "Hiding your activity on CrowdStock from people close to you.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Take a break or self-exclude">
        <p>
          You can pause your account for a set period, or close it entirely,
          from Settings → Account → Take a Break. While paused, you will not
          be able to fund your wallet or join rounds. Contact{" "}
          <a href="mailto:support@crowdstock.app" className="text-primary hover:underline">
            support@crowdstock.app
          </a>{" "}
          if you would like help setting this up.
        </p>
      </LegalSection>

      <LegalSection title="5. Keep it balanced">
        <LegalList
          items={[
            "Set a time limit for how long you spend in the app each day.",
            "Don't treat CrowdStock as a source of income or a way to solve financial difficulty.",
            "Take regular breaks between rounds rather than joining every hour.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Supporting someone else">
        <p>
          If you're worried about a friend or family member's use of
          CrowdStock, encourage them to use the limit and take-a-break tools
          in the app, and to talk to a licensed financial counselor if money
          management becomes difficult. We're also glad to talk through the
          tools available — reach us at{" "}
          <a href="mailto:support@crowdstock.app" className="text-primary hover:underline">
            support@crowdstock.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Age restriction">
        <p>
          CrowdStock is strictly for people aged 18 and older. Identity
          verification is required to confirm this.
        </p>
      </LegalSection>

      <LegalSection title="8. Getting help">
        <p>
          If spending on CrowdStock — or anywhere else — is affecting your
          finances, wellbeing, or relationships, please speak with a licensed
          financial counselor or a mental health professional in your area.
          You can also reach our support team at{" "}
          <a href="mailto:support@crowdstock.app" className="text-primary hover:underline">
            support@crowdstock.app
          </a>{" "}
          — we're glad to help you set limits or pause your account.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
