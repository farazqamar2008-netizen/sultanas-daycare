import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export const inputClass =
  "mt-1 w-full rounded-xl border-2 border-sky-light bg-white px-4 py-2.5 text-ink placeholder:text-ink-soft/50 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky-light/70";

export const inputErrorClass =
  "mt-1 w-full rounded-xl border-2 border-coral bg-white px-4 py-2.5 text-ink placeholder:text-ink-soft/50 focus:border-coral-dark focus:outline-none focus:ring-2 focus:ring-coral-light";

export function FormField({ label, htmlFor, required, error, hint, children, className }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
        {label} {required && <span className="text-coral-dark">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1 flex items-center gap-1 text-xs font-medium text-coral-dark" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1 text-xs text-ink-soft">{hint}</p>
      ) : null}
    </div>
  );
}
