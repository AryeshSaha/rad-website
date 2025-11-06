"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { contactFormFields } from "@/constants/contactFormFields";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, "full name can't be greater than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "full name can only contain letters and spaces")
    .trim(),
  email: z.email({ message: "Please enter a valid email address." }).trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormType = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const defaultValues = contactFormFields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue;
    return acc;
  }, {} as Record<string, string | boolean>);
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  async function onSubmit(values: ContactFormType) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value?.toString() ?? "");
    });

    try {
      await submitContactForm(formData);
      toast.success("Form submitted successfully!");
      form.reset();
    } catch (err) {
      toast.error("Error submitting contact form");
      console.error("Error submitting contact form:", err);
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold tracking-tight">Write to us</h2>
      <p className="mt-2 text-lg text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        reprehenderit itaque.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <FieldGroup>
          {contactFormFields.map((fieldDef) => (
            <Controller
              key={fieldDef.name}
              name={fieldDef.name as keyof ContactFormType}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={fieldDef.name}
                    className="block text-base font-medium bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent"
                  >
                    {fieldDef.label}
                  </FieldLabel>
                  <div className="flex flex-col gap-2">
                    {fieldDef.type === "textarea" ? (
                      <>
                        <Textarea
                          placeholder={fieldDef.placeholder}
                          className={`block w-full rounded-md px-4 py-3 h-40 text-white shadow-sm ${
                            fieldState.error
                              ? "border-red-500 border"
                              : "border-gray-300"
                          }`}
                          {...field}
                          value={
                            typeof field.value === "string" ? field.value : ""
                          }
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </>
                    ) : (
                      <>
                        <Input
                          {...field}
                          id={fieldDef.name}
                          aria-invalid={fieldState.invalid}
                          placeholder={fieldDef.placeholder}
                          autoComplete="off"
                          className={`block w-full rounded-md px-4 py-3 text-white shadow-sm ${
                            fieldState.error
                              ? "border-red-500 border"
                              : "border-gray-300"
                          }`}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </>
                    )}
                  </div>
                </Field>
              )}
            />
          ))}
          <div>
            <Button
              variant={"myTheme"}
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm transition"
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ContactForm;
