import { TriangleAlert } from "lucide-react";

export function DraftBanner() {
  return (
    <div className="my-6 flex items-start gap-3 rounded-2xl bg-sun-light px-5 py-4 text-sm text-ink">
      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-sun-dark" aria-hidden="true" />
      <p>
        <strong>Draft — pending review against local childcare regulations.</strong> This is a
        placeholder policy. It has not yet been reviewed by a legal professional or verified
        against Ontario childcare regulations, and should not be relied on as final.
      </p>
    </div>
  );
}
