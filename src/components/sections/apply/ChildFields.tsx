import { FormField, inputClass, inputErrorClass } from "@/components/ui/FormField";
import { calculateAge } from "@/lib/utils";

export interface ChildFormData {
  name: string;
  dob: string;
  allergies: string;
}

export interface ChildFieldErrors {
  name?: string;
  dob?: string;
}

interface ChildFieldsProps {
  index: number;
  value: ChildFormData;
  errors?: ChildFieldErrors;
  onChange: (field: keyof ChildFormData, value: string) => void;
}

export function ChildFields({ index, value, errors, onChange }: ChildFieldsProps) {
  const prefix = `child-${index}`;
  const age = calculateAge(value.dob);

  return (
    <div className="rounded-2xl border-2 border-dashed border-grass/50 bg-white/60 p-4">
      <p className="mb-3 font-display text-sm text-grass-dark">Child {index + 1}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Child's name" htmlFor={`${prefix}-name`} required error={errors?.name}>
          <input
            id={`${prefix}-name`}
            type="text"
            value={value.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={errors?.name ? inputErrorClass : inputClass}
            autoComplete="off"
            aria-invalid={Boolean(errors?.name)}
            aria-describedby={errors?.name ? `${prefix}-name-error` : undefined}
          />
        </FormField>

        <FormField
          label="Date of birth"
          htmlFor={`${prefix}-dob`}
          required
          error={errors?.dob}
          hint={age ? `Age: ${age.label}` : undefined}
        >
          <input
            id={`${prefix}-dob`}
            type="date"
            value={value.dob}
            onChange={(e) => onChange("dob", e.target.value)}
            className={errors?.dob ? inputErrorClass : inputClass}
            aria-invalid={Boolean(errors?.dob)}
            aria-describedby={errors?.dob ? `${prefix}-dob-error` : age ? `${prefix}-dob-hint` : undefined}
          />
        </FormField>

        <FormField
          label="Pet / food allergies"
          htmlFor={`${prefix}-allergies`}
          hint="Optional — let us know if there's anything we should be aware of."
          className="sm:col-span-2"
        >
          <input
            id={`${prefix}-allergies`}
            type="text"
            value={value.allergies}
            onChange={(e) => onChange("allergies", e.target.value)}
            className={inputClass}
            placeholder="e.g. peanuts, cats"
            autoComplete="off"
          />
        </FormField>
      </div>
    </div>
  );
}
