'use client';

import { trpc } from '@/trpc/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import BlogHero from '@/components/blog/blog-hero';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import CalendarModal from '@/components/reusables/calendar-modal';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import ShimmerButton from "@/components/magicui/shimmer-button";
import { ChevronRight, Loader2 } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function BlogPage() {
  const { toast } = useToast();
  const {data: posts} = trpc.getPosts.useQuery();
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
    <>
      <BlogHero
        headline="Innovative AI Solutions for a Smarter Raleigh"
        subheadline="Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond."
        // cta1="Subscribe"
        // cta2="Browse All"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id} className="block">
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">{post.excerpt.slice(0, 100)}...</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>{post.estimatedReadingTime} min read</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.categories.map((category: any) => (
                      <span key={category} className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Us section */}
      <section className="relative py-16 mt-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />
        <BorderBeam className="absolute inset-0 z-10" />
        <div className="relative z-20 text-center">
          <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center mb-6">
            About Raleigh AI Solutions
          </AnimatedShinyText>
          <p className="text-lg mb-8 text-primary-light max-w-2xl mx-auto">
            At Raleigh AI Solutions, we are dedicated to empowering businesses in Raleigh with
            cutting-edge AI technologies. Our blog shares expert insights, industry trends, and
            practical guides to help you navigate the evolving landscape of artificial
            intelligence.
          </p>
          <Modal>
            <ModalTrigger className="w-full sm:w-auto px-0">
              <RainbowButton className="w-full md:w-auto">
                <span className="text-primary-dark font-semibold">Learn More About Us</span>
              </RainbowButton>
            </ModalTrigger>
            <ModalBody>
              <CalendarModal />
            </ModalBody>
          </Modal>
        </div>
      </section>

      {/* Newsletter Signup section */}
      <section className="relative py-16 overflow-hidden bg-secondary/10">
        <BorderBeam className="absolute inset-0 z-10" />
        <div className="relative text-center">
          <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center mb-6 text-primary-dark/80">
            Subscribe to Our Newsletter
          </AnimatedShinyText>
          <p className="text-lg mb-8 text-primary-dark/70 max-w-xl mx-auto">
            Stay updated with the latest AI trends, insights, and news. Join our community today!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="z-10 max-w-2xl mx-auto flex items-center gap-2">
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
    </>
  );
}