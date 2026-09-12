"use client";

import { useState } from "react";
import { CheckCircle2, Minus, Plus, RotateCcw } from "lucide-react";
import { FormField, inputClass, inputErrorClass } from "@/components/ui/FormField";
import { BUSINESS } from "@/data/business";
import { ChildFields, type ChildFieldErrors, type ChildFormData } from "./ChildFields";

const MAX_CHILDREN = 6;

interface ApplicationFormData {
  parentName: string;
  email: string;
  phone: string;
  numChildren: number;
  children: ChildFormData[];
  schedule: string;
  startDate: string;
}

interface FormErrors {
  parentName?: string;
  email?: string;
  phone?: string;
  children: ChildFieldErrors[];
}

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const EMPTY_CHILD: ChildFormData = { name: "", dob: "", allergies: "" };

function emptyForm(): ApplicationFormData {
  return {
    parentName: "",
    email: "",
    phone: "",
    numChildren: 1,
    children: [{ ...EMPTY_CHILD }],
    schedule: "",
    startDate: "",
  };
}

function validate(data: ApplicationFormData): FormErrors {
  const errors: FormErrors = { children: data.children.map(() => ({})) };

  if (!data.parentName.trim()) errors.parentName = "Please enter your name.";

  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "That email doesn't look quite right.";

  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";

  data.children.forEach((child, i) => {
    if (!child.name.trim()) errors.children[i].name = "Please enter a name.";
    if (!child.dob) errors.children[i].dob = "Please enter a date of birth.";
  });

  return errors;
}

function hasErrors(errors: FormErrors): boolean {
  return Boolean(
    errors.parentName || errors.email || errors.phone || errors.children.some((c) => c.name || c.dob)
  );
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({ children: [{}] });
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof ApplicationFormData>(field: K, value: ApplicationFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function updateChild(index: number, field: keyof ChildFormData, value: string) {
    setFormData((prev) => {
      const children = prev.children.map((c, i) => (i === index ? { ...c, [field]: value } : c));
      return { ...prev, children };
    });
  }

  function setNumChildren(n: number) {
    const clamped = Math.min(MAX_CHILDREN, Math.max(1, n));
    setFormData((prev) => {
      const children = prev.children.slice(0, clamped);
      while (children.length < clamped) children.push({ ...EMPTY_CHILD });
      return { ...prev, numChildren: clamped, children };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

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
          parentName: formData.parentName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          numChildren: formData.numChildren,
          children: formData.children.map((c) => ({
            name: c.name.trim(),
            dob: c.dob,
            allergies: c.allergies.trim() || undefined,
          })),
          schedule: formData.schedule.trim() || undefined,
          startDate: formData.startDate || undefined,
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
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 text-center shadow-playful">
        <CheckCircle2 className="mx-auto h-12 w-12 text-grass-dark" aria-hidden="true" />
        <p className="mt-4 font-display text-xl text-ink">
          Thank you! We&apos;ll reach out about availability and booking times.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(emptyForm());
            setErrors({ children: [{}] });
            setStatus("idle");
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2 text-sm font-bold text-white shadow-soft hover:scale-105"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Submit another response
        </button>
      </div>
    );
  }

  if (status === "not-configured") {
    return (
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 text-center shadow-playful">
        <p className="font-display text-xl text-ink">Almost there!</p>
        <p className="mt-3 text-ink-soft">
          Our online applications aren&apos;t quite turned on yet. In the meantime, please call{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-sky-dark">
            {BUSINESS.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-sky-dark">
            {BUSINESS.email}
          </a>{" "}
          and we&apos;ll help you right away.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2 text-sm font-bold text-white shadow-soft hover:scale-105"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Back to form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl space-y-6 rounded-3xl bg-white p-6 shadow-playful sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Parent name" htmlFor="parentName" required error={errors.parentName} className="sm:col-span-2">
          <input
            id="parentName"
            type="text"
            value={formData.parentName}
            onChange={(e) => updateField("parentName", e.target.value)}
            className={errors.parentName ? inputErrorClass : inputClass}
            autoComplete="name"
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
          />
        </FormField>

        <FormField label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={errors.email ? inputErrorClass : inputClass}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </FormField>

        <FormField label="Phone" htmlFor="phone" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={errors.phone ? inputErrorClass : inputClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </FormField>
      </div>

      <FormField label="Number of children" htmlFor="numChildren" required>
        <div className="mt-1 inline-flex items-center gap-3 rounded-full border-2 border-sky-light bg-white px-2 py-1">
          <button
            type="button"
            onClick={() => setNumChildren(formData.numChildren - 1)}
            disabled={formData.numChildren <= 1}
            aria-label="Decrease number of children"
            className="rounded-full p-2 text-sky-dark hover:bg-sky-light disabled:opacity-30"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span id="numChildren" className="w-6 text-center font-display text-lg" aria-live="polite">
            {formData.numChildren}
          </span>
          <button
            type="button"
            onClick={() => setNumChildren(formData.numChildren + 1)}
            disabled={formData.numChildren >= MAX_CHILDREN}
            aria-label="Increase number of children"
            className="rounded-full p-2 text-sky-dark hover:bg-sky-light disabled:opacity-30"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </FormField>

      <div className="space-y-4">
        {formData.children.map((child, i) => (
          <ChildFields
            key={i}
            index={i}
            value={child}
            errors={errors.children[i]}
            onChange={(field, value) => updateChild(i, field, value)}
          />
        ))}
      </div>

      <FormField
        label="Required schedule"
        htmlFor="schedule"
        hint="Optional, e.g. Mon/Wed/Fri, full-time, mornings only."
      >
        <textarea
          id="schedule"
          value={formData.schedule}
          onChange={(e) => updateField("schedule", e.target.value)}
          className={inputClass}
          rows={2}
        />
      </FormField>

      <FormField label="Starting date" htmlFor="startDate" hint="Optional">
        <input
          id="startDate"
          type="date"
          value={formData.startDate}
          onChange={(e) => updateField("startDate", e.target.value)}
          className={inputClass}
        />
      </FormField>

      {status === "error" && (
        <p className="rounded-xl bg-coral-light px-4 py-3 text-sm font-medium text-coral-dark" role="alert">
          Something went wrong sending your application. Please try again, or reach us directly at{" "}
          <a href={BUSINESS.phoneHref} className="underline">
            {BUSINESS.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-coral px-8 py-3.5 font-display text-lg text-white shadow-soft transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Submit Application"}
      </button>
    </form>
  );
}
