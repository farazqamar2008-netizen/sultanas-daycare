"use client";

import { useState } from "react";
import { CheckCircle2, Mail, RotateCcw } from "lucide-react";
import { FormField, inputClass, inputErrorClass } from "@/components/ui/FormField";
import { BUSINESS } from "@/data/business";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "That email doesn't look quite right.";
  if (!data.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

function buildMailto(data: ContactFormData) {
  const subject = encodeURIComponent(`Message from ${data.name || "the website"}`);
  const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
  return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json().catch(() => null);
      if (json && json.result !== "success") throw new Error(json.error || "Unknown error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-playful">
        <CheckCircle2 className="mx-auto h-12 w-12 text-grass-dark" aria-hidden="true" />
        <p className="mt-4 font-display text-xl text-ink">Thanks for reaching out! We&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => {
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            setStatus("idle");
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2 text-sm font-bold text-white shadow-soft hover:scale-105"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Submit another response
        </button>
      </div>
    );
  }

  if (status === "not-configured" || status === "error") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-playful">
        <p className="font-display text-xl text-ink">
          {status === "error" ? "Something went wrong" : "Almost there!"}
        </p>
        <p className="mt-3 text-ink-soft">
          {status === "error"
            ? "We couldn't send that just now. "
            : "Our online contact form isn't quite turned on yet. "}
          Send us an email directly instead, and we won&apos;t lose what you wrote:
        </p>
        <a
          href={buildMailto(formData)}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-bold text-white shadow-soft hover:scale-105"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Email {BUSINESS.email}
        </a>
        <p className="mt-3 text-sm text-ink-soft">
          or call{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-sky-dark">
            {BUSINESS.phone}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-soft px-5 py-2 text-sm font-bold text-ink-soft hover:bg-sun-light"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Back to form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl bg-white p-6 shadow-playful sm:p-8">
      <FormField label="Name" htmlFor="contactName" required error={errors.name}>
        <input
          id="contactName"
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={errors.name ? inputErrorClass : inputClass}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contactName-error" : undefined}
        />
      </FormField>

      <FormField label="Email" htmlFor="contactEmail" required error={errors.email}>
        <input
          id="contactEmail"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={errors.email ? inputErrorClass : inputClass}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contactEmail-error" : undefined}
        />
      </FormField>

      <FormField label="Message" htmlFor="contactMessage" required error={errors.message}>
        <textarea
          id="contactMessage"
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={errors.message ? inputErrorClass : inputClass}
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contactMessage-error" : undefined}
        />
      </FormField>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-coral px-8 py-3.5 font-display text-lg text-white shadow-soft transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
