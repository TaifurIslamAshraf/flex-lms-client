"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";

interface FormFieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  optional?: boolean;
  type?: string;
}

interface ReusableFormProps {
  schema: ZodSchema<any>;
  fields: FormFieldConfig[];
  onSubmit: (values: any) => void;
}

const FormInput = ({ schema, fields, onSubmit }: ReusableFormProps) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map(({ name, label, placeholder, optional, type = "text" }) => (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label className="text-primary">
                  {label} {optional && "(Optional)"}
                </Label>
                <FormControl>
                  <Input placeholder={placeholder} {...field} type={type} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
};

export default FormInput;
