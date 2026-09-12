import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: `Application Policy | ${BUSINESS.name}`,
};

export default function ApplicationPolicyPage() {
  return (
    <PolicyPage title="Application Policy">
      <p>
        This outlines how enrollment applications work at {BUSINESS.name}. Final
        terms will be confirmed in writing before a child starts.
      </p>

      <h2>How it works</h2>
      <ul>
        <li>Submit the application form with your family and children&apos;s details.</li>
        <li>We&apos;ll reach out to discuss availability and, if there&apos;s a fit, arrange a visit.</li>
        <li>If we don&apos;t have a spot right now, we&apos;ll add you to our waitlist and reach out when one opens.</li>
      </ul>

      <h2>Waitlist</h2>
      <p>
        Placement on the waitlist does not guarantee a spot. We&apos;ll contact families in
        the order that best matches age group and schedule needs as spots become
        available.
      </p>

      <h2>Fees &amp; deposit</h2>
      <p>
        Fee amounts, payment schedule, and any deposit required to hold a spot are
        confirmed directly with your family.
      </p>

      <h2>Cancellation &amp; withdrawal</h2>
      <p>
        Notice period and any applicable fees for withdrawing a child from care are
        confirmed directly with your family.
      </p>

      <h2>Health &amp; safety</h2>
      <p>
        Immunization records, allergy/medical information, and emergency contacts are
        required before a child&apos;s start date, in line with Ontario childcare
        regulations.
      </p>

      <h2>Questions</h2>
      <p>
        Reach out to {BUSINESS.email} or {BUSINESS.phone} with any questions about
        applying.
      </p>
    </PolicyPage>
  );
}
