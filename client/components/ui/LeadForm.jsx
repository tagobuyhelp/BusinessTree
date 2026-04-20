"use client";

import React, { useCallback, useMemo, useState } from "react";

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 7;
}

export function LeadForm({
  onSubmit,
  submitLabel = "Get Free Strategy",
  defaultValues
}) {
  const [values, setValues] = useState(() => ({
    name: defaultValues?.name || "",
    contact: defaultValues?.contact || "",
    businessType: defaultValues?.businessType || "",
    message: defaultValues?.message || ""
  }));

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const businessOptions = useMemo(
    () => [
      { value: "", label: "Select business type" },
      { value: "saas", label: "SaaS" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "local", label: "Local Business" },
      { value: "agency", label: "Agency" },
      { value: "creator", label: "Creator / Personal Brand" },
      { value: "other", label: "Other" }
    ],
    []
  );

  const validate = useCallback(() => {
    const next = {};

    if (!values.name.trim()) next.name = "Name is required.";

    const contact = values.contact.trim();
    if (!contact) next.contact = "Email or phone is required.";
    else {
      const looksEmail = contact.includes("@");
      if (looksEmail && !isValidEmail(contact)) next.contact = "Enter a valid email address.";
      if (!looksEmail && !isValidPhone(contact)) next.contact = "Enter a valid phone number.";
    }

    if (!values.businessType) next.businessType = "Please select a business type.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [values.businessType, values.contact, values.name]);

  const setField = useCallback((key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (submitting) return;
      if (!validate()) return;

      setSubmitting(true);
      try {
        await onSubmit?.({
          name: values.name.trim(),
          contact: values.contact.trim(),
          businessType: values.businessType,
          message: values.message.trim()
        });
      } finally {
        setSubmitting(false);
      }
    },
    [onSubmit, submitting, validate, values]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-name" className="text-small font-medium text-textPrimary">
          Name
        </label>
        <input
          id="lead-name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          className={cx(
            "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-body text-textPrimary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            errors.name && "border-error"
          )}
          autoComplete="name"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "lead-name-error" : undefined}
        />
        {errors.name ? (
          <div id="lead-name-error" className="mt-2 text-small text-error">
            {errors.name}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lead-contact" className="text-small font-medium text-textPrimary">
          Email or phone
        </label>
        <input
          id="lead-contact"
          value={values.contact}
          onChange={(e) => setField("contact", e.target.value)}
          className={cx(
            "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-body text-textPrimary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            errors.contact && "border-error"
          )}
          inputMode="email"
          autoComplete="email"
          aria-invalid={errors.contact ? "true" : undefined}
          aria-describedby={errors.contact ? "lead-contact-error" : undefined}
        />
        {errors.contact ? (
          <div id="lead-contact-error" className="mt-2 text-small text-error">
            {errors.contact}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lead-business" className="text-small font-medium text-textPrimary">
          Business type
        </label>
        <select
          id="lead-business"
          value={values.businessType}
          onChange={(e) => setField("businessType", e.target.value)}
          className={cx(
            "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-body text-textPrimary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            errors.businessType && "border-error"
          )}
          aria-invalid={errors.businessType ? "true" : undefined}
          aria-describedby={errors.businessType ? "lead-business-error" : undefined}
        >
          {businessOptions.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.businessType ? (
          <div id="lead-business-error" className="mt-2 text-small text-error">
            {errors.businessType}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lead-message" className="text-small font-medium text-textPrimary">
          Message (optional)
        </label>
        <textarea
          id="lead-message"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          rows={3}
          className={cx(
            "mt-2 w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-body text-textPrimary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          )}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cx(
          "inline-flex h-11 w-full items-center justify-center rounded-md px-4 text-body font-semibold",
          "bg-accent text-onAccent hover:bg-secondary active:bg-accent",
          "transition disabled:opacity-60 disabled:pointer-events-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        )}
      >
        {submitLabel}
      </button>

      <div className="text-center text-small text-textSecondary">No spam. No commitment.</div>
    </form>
  );
}

