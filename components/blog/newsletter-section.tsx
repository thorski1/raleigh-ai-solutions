'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, Loader2 } from 'lucide-react';
import { trpc } from '@/trpc/client';

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function NewsletterSection() {
  const { toast } = useToast();
  const { mutate: subscribeToNewsletter, isPending } = trpc.subscribeToNewsletter.useMutation();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    try {
      await subscribeToNewsletter(values);
      form.reset();
      toast({
        title: 'Subscribed!',
        description: 'You have successfully subscribed to our newsletter.',
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: 'Subscription failed',
        description: 'An error occurred. Please try again later.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section className="relative py-16 overflow-hidden bg-secondary/10">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="relative text-center">
        <AnimatedShinyText
          as="h2"
          className="text-2xl md:text-3xl text-center mb-6 text-primary-dark/80"
        >
          Subscribe to Our Newsletter
        </AnimatedShinyText>
        <p className="text-lg mb-8 text-primary-dark/70 max-w-xl mx-auto">
          Stay updated with the latest AI trends, insights, and news. Join our community today!
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="z-10 max-w-2xl mx-auto flex items-center gap-2"
          >
            <div className="flex-grow">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="w-full bg-background active:bg-primary-light focus:bg-gradient-to-r from-white to-secondary-light shadow-md shadow-primary-light focus:shadow-xl focus:shadow-primary-light h-11 text-lg"
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
              className="text-center font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2 px-4 whitespace-nowrap"
              type="submit"
            >
              Subscribe
              {isPending ? (
                <Loader2 className="animate-spin ml-2 w-4 h-4 inline-block" />
              ) : (
                <ChevronRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 duration-300" />
              )}
            </ShimmerButton>
          </form>
        </Form>
      </div>
    </section>
  );
} 