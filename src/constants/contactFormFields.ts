import FormFieldType from "@/types/formFieldTypes";

export const contactFormFields: FormFieldType[] = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "e.g. Jasmine Smith",
    type: "text",
    defaultValue: "",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "e.g. example@dot.com",
    type: "email",
    defaultValue: "",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "e.g. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "textarea",
    defaultValue: "",
  },
]