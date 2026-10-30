"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, startTransition, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { submitContact } from "@/actions/contact";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import {
  contactSchema,
  type ContactField,
  type ContactInput,
  type ContactResult,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

const inputClass =
  "mt-2 block w-full border border-mist-300 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-500 transition-colors hover:border-ink-400 focus:border-brand focus:outline-2 focus:outline-offset-0 focus:outline-brand aria-[invalid=true]:border-ink aria-[invalid=true]:border-l-4";

const labelClass = "block text-sm font-medium text-ink";

/**
 * Contact form. Validates in the browser with React Hook Form + Zod, then submits through a
 * Server Action that validates again. Without JavaScript the same form posts natively.
 */
export function ContactForm({ serviceOptions }: { serviceOptions: Option[] }) {
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    submitContact,
    null,
  );
  const statusRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    shouldFocusError: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      website: "",
    },
  });

  const serverErrors = state?.status === "error" ? state.fieldErrors : undefined;

  // Preselect a service from links such as /contact?service=ai-integration.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && serviceOptions.some((o) => o.value === requested)) {
      setValue("service", requested);
    }
  }, [serviceOptions, setValue]);

  useEffect(() => {
    if (!state) return;
    if (state.status === "success") {
      reset();
      statusRef.current?.focus();
    } else if (state.fieldErrors) {
      const first = Object.keys(state.fieldErrors)[0] as ContactField | undefined;
      if (first) setFocus(first);
    } else {
      statusRef.current?.focus();
    }
  }, [state, reset, setFocus]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    return handleSubmit(() => {
      const data = new FormData(form);
      startTransition(() => formAction(data));
    })(event);
  };

  const errorFor = (field: ContactField) => errors[field]?.message ?? serverErrors?.[field];

  const fieldProps = (field: ContactField) => {
    const error = errorFor(field);
    return {
      id: `contact-${field}`,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contact-${field}-error` : undefined,
    };
  };

  const fieldError = (field: ContactField) => {
    const error = errorFor(field);
    if (!error) return null;
    return (
      <p
        id={`contact-${field}-error`}
        className="mt-2 flex items-start gap-1.5 text-sm font-medium text-ink"
      >
        <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {error}
      </p>
    );
  };

  if (state?.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border-l-4 border-brand bg-mist-100 p-8 focus:outline-none"
      >
        <CircleCheck aria-hidden="true" className="size-8 text-brand-700" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Thank you. Your message is on its way.
        </h2>
        <p className="mt-3 text-ink-600">
          We have sent a confirmation to your inbox and will reply within one business day. If it
          does not arrive, check your spam folder or write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-700 underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
      aria-describedby="contact-required-note"
    >
      <p id="contact-required-note" className="text-sm text-ink-600">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required.
      </p>

      <div
        ref={statusRef}
        tabIndex={-1}
        role="alert"
        aria-live="assertive"
        className={cn(
          state?.status === "error"
            ? "flex gap-3 border-l-4 border-ink bg-mist-100 p-4 focus:outline-none"
            : "sr-only",
        )}
      >
        {state?.status === "error" ? (
          <>
            <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <p className="text-[0.95rem] font-medium">{state.message}</p>
          </>
        ) : null}
      </div>

      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            {...fieldProps("name")}
            {...register("name")}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            {...fieldProps("email")}
            {...register("email")}
          />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone <span className="font-normal text-ink-600">(optional)</span>
          </label>
          <input
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...fieldProps("phone")}
            {...register("phone")}
          />
          {fieldError("phone")}
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company <span className="font-normal text-ink-600">(optional)</span>
          </label>
          <input
            type="text"
            autoComplete="organization"
            className={inputClass}
            {...fieldProps("company")}
            {...register("company")}
          />
          {fieldError("company")}
        </div>
        <div>
          <label htmlFor="contact-service" className={labelClass}>
            Service of interest <span aria-hidden="true">*</span>
          </label>
          <select
            required
            className={cn(inputClass, "appearance-auto")}
            {...fieldProps("service")}
            {...register("service")}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        <div>
          <label htmlFor="contact-budget" className={labelClass}>
            Budget range <span className="font-normal text-ink-600">(optional)</span>
          </label>
          <select
            className={cn(inputClass, "appearance-auto")}
            {...fieldProps("budget")}
            {...register("budget")}
          >
            <option value="">Prefer not to say</option>
            {site.budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {fieldError("budget")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          rows={6}
          required
          placeholder="What are you trying to achieve, and by when?"
          className={cn(inputClass, "resize-y")}
          {...fieldProps("message")}
          {...register("message")}
        />
        {fieldError("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 size-5 shrink-0 accent-brand-600"
            {...fieldProps("consent")}
            {...register("consent")}
          />
          <label htmlFor="contact-consent" className="text-[0.95rem] text-ink-700">
            I agree that Coxcel may use these details to respond to my enquiry, as described in the{" "}
            <Link
              href="/legal/privacy"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            . <span aria-hidden="true">*</span>
          </label>
        </div>
        {fieldError("consent")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={pending} arrow={!pending} aria-disabled={pending}>
          {pending ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="size-5 animate-spin motion-reduce:animate-none"
              />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-sm text-ink-600" aria-live="polite">
          {pending ? "Sending your message..." : "We reply within one business day."}
        </p>
      </div>
    </form>
  );
}
