import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    fullname: z.string().min(3, { message: "Full name is required." }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password is required." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-96">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"mt-4"}>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  value={field.value || ""}
                  className="w-full h-12 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"mt-4"}>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  {...field}
                  value={field.value || ""}
                  className="w-full h-12 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"mt-6"}>Password</FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  placeholder="********"
                  {...field}
                  value={field.value || ""}
                  className="w-full h-12 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"mt-6"}>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type={"password"}
                  placeholder="********"
                  {...field}
                  value={field.value || ""}
                  className="w-full h-12 px-4 py-2 bg-[#1e1e1e] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full mt-7 p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-md text-lg text-white font-semibold hover:opacity-90 transition hover:cursor-pointer"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
