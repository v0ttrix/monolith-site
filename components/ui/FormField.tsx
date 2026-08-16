interface FormFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  name?: string;
  rows?: number;
  children?: React.ReactNode; // for select options
}

export default function FormField({
  label,
  id,
  type = "text",
  required = false,
  placeholder,
  name,
  rows = 4,
  children,
}: FormFieldProps) {
  const inputClass =
    "w-full border border-muted-light bg-bone px-4 py-3 font-body text-base text-charcoal focus:outline-none focus:border-accent transition-colors";

  return (
    <div>
      <label
        htmlFor={id}
        className="font-body text-[10px] uppercase tracking-widest text-slate mb-2 block font-semibold"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name || id}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClass} resize-none`}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name || id}
          required={required}
          className={inputClass}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name || id}
          required={required}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}
