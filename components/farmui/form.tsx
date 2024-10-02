"use client";

import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/trpc/client';
import ShimmerButton from "../magicui/shimmer-button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { mutate: submitContactForm, isPending } = trpc.submitContactForm.useMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitContactForm(values);
      form.reset();
      toast({
        title: 'Message submitted',
        description:
          'You have successfully submitted your message. we will keep in touch with you with the speed of light :)',
      });
      // Show success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
      toast({
        title: 'Something went wrong',
        description: 'There is an error while submitting the form, Please try again later :(',
        variant: 'destructive',
      });
    }
  }
  
  return (
    <section className="custom-screen-lg mx-auto z-20">
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <Card className="relative z-20 p-[2px] rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.01] group">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff00aa] to-[#00FFF1] opacity-75 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff00aa] to-[#00FFF1] opacity-0 group-hover:opacity-20" />
          <div className="relative bg-primary-light rounded-[10px] p-6 h-full flex flex-col z-10">
            <CardHeader>
              <CardDescription className="text-primary-dark text-lg font-bold">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 z-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-dark">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="bg-background active:bg-primary-light focus:bg-gradient-to-r from-white to-secondary-light shadow-md shadow-primary-light focus:shadow-xl focus:shadow-primary-light"
                              />
                            </FormControl>
                            <FormMessage className="text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-dark">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your email"
                                {...field}
                                className="bg-background active:bg-primary-light focus:bg-gradient-to-r from-white to-secondary-light shadow-md shadow-primary-light focus:shadow-xl focus:shadow-primary-light"
                              />
                            </FormControl>
                            <FormMessage className="text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-dark">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              {...field}
                              className="bg-background active:bg-primary-light focus:bg-gradient-to-r from-white to-secondary-light shadow-md shadow-primary-light focus:shadow-xl focus:shadow-primary-light"
                            />
                          </FormControl>
                          <FormMessage className="text-destructive" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <ShimmerButton
                    borderRadius="12px"
                    background="hsl(var(--action))"
                    className="text-center w-full md:w-1/2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2"
                    type="submit"
                  >
                    Submit
                    {isPending ? (
                      <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                    )}
                  </ShimmerButton>
                </form>
              </Form>
            </CardContent>
          </div>
        </Card>
      </div>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
      `}</style>
    </section>
  );
}


