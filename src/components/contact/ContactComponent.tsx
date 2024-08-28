import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { toast } from "sonner";
import BlurFade from "../ui/blurfade";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message cannot be empty"),
  access_key: z.string().nonempty(),
});

function ContactComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: import.meta.env.VITE_APP_WEB_3_KEY,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast.success("Message sent successfully! 🎉");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(`Failed to send message. Please try again. Error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <BlurFade duration={1} amount={0.5}>
      <Card className="w-full max-w-md mx-auto p-4 md:p-6 lg:p-8 mt-8">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-xl md:text-2xl font-semibold">
            Get in Touch with Us 📬
          </CardTitle>
        </CardHeader>
        <Separator className="w-full mb-6" />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Full Name"
                        {...field}
                        autoComplete="name"
                        className="mt-1"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Email"
                        {...field}
                        autoComplete="email"
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Your Message"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="flex justify-center">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </BlurFade>
  );
}

export default ContactComponent;
