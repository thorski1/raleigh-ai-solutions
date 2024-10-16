'use client';

import { trpc } from '@/trpc/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import BlogHero from '@/components/blog/blog-hero';
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
import ShimmerButton from '@/components/magicui/shimmer-button';
import { ChevronRight, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { MagicCard } from '@/components/magicui/magic-card';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

const CoolDivider = () => (
  <div className="flex items-center justify-center my-12">
    <div className="h-px bg-gradient-to-r from-transparent via-secondary to-secondary-light w-1/3" />
    <div className="mx-4">
      <AnimatedShinyText as="span" className="text-2xl">
        •
      </AnimatedShinyText>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-secondary to-secondary-light w-1/3" />
  </div>
);

export default function BlogPageClient() {
  const { toast } = useToast();
  const { data: posts, isLoading } = trpc.getPosts.useQuery();
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

  const SkeletonCard = () => (
    <Card className="overflow-hidden h-full flex flex-col">
      <Skeleton className="w-full h-48" />
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent className="flex-grow">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </CardFooter>
    </Card>
  );

  return (
    <>
      <BlogHero
        headline="Innovative AI Solutions for a Smarter Raleigh"
        subheadline="Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : posts?.map((post: any) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id} className="block h-full">
                  <MagicCard
                    className="h-full"
                    gradientColor="hsl(var(--primary) / 0.5)"
                    neonFirstColor="hsl(var(--secondary))"
                    neonSecondColor="hsl(var(--accent))"
                  >
                    <Card className="h-full border-0 flex flex-col group">
                      {post.mainImage && (
                        <Image
                          src={urlFor(post.mainImage).url()}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                      )}
                      <CardHeader className="backdrop-blur-sm">
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {post.excerpt.slice(0, 100)}...
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="backdrop-blur-sm flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {post.categories.map((category: any) => (
                            <span
                              key={category}
                              className="bg-secondary/20 group-hover:bg-secondary/40 text-secondary-foreground px-2 py-1 rounded-full text-xs"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="bg-secondary/10 group-hover:bg-secondary/40 backdrop-blur-sm flex justify-between py-4 text-sm text-muted-foreground mt-auto">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>{post.estimatedReadingTime} min read</span>
                      </CardFooter>
                    </Card>
                  </MagicCard>
                </Link>
              ))}
        </div>
      </div>

      <CoolDivider />

      {/* About Us section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />
        <BorderBeam className="absolute inset-0 z-10" />
        <div className="relative z-20 text-center">
          <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center mb-6">
            About Raleigh AI Solutions
          </AnimatedShinyText>
          <p className="text-lg mb-8 text-primary-light max-w-2xl mx-auto">
            At Raleigh AI Solutions, we are dedicated to empowering businesses in Raleigh with
            cutting-edge AI technologies. Our blog shares expert insights, industry trends, and
            practical guides to help you navigate the evolving landscape of artificial intelligence.
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
    </>
  );
}
