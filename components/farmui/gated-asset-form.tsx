'use client';

import { useState } from 'react';
import { CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { ChevronRight, Loader2, Download } from 'lucide-react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { trpc } from '@/trpc/client';
import ShimmerButton from '../magicui/shimmer-button';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
});

export default function GatedAssetForm({ assetSlug }: { assetSlug: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
    },
  });

  const { mutate: submitGatedAssetRequest, isPending } = trpc.submitGatedAssetRequest.useMutation();
  const { data: asset, isLoading: isAssetLoading } = trpc.getGatedAsset.useQuery({
    slug: assetSlug,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitGatedAssetRequest({ ...values, assetSlug });
      form.reset();
      setIsSubmitted(true);
      toast({
        title: 'Request submitted',
        description: 'Thank you for your interest. You can now download the asset.',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Something went wrong',
        description: 'There was an error while submitting the form. Please try again later.',
        variant: 'destructive',
      });
    }
  }

  if (isAssetLoading) {
    return <div>Loading asset information...</div>;
  }

  if (!asset) {
    return <div>Asset not found</div>;
  }

  return (
    <Card className="relative z-20 p-[2px] rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.01] group">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff00aa] to-[#00FFF1] opacity-75 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff00aa] to-[#00FFF1] opacity-0 group-hover:opacity-20" />
      <div className="relative bg-primary-light rounded-[10px] p-6 h-full flex flex-col z-10">
        <CardHeader>
          <CardDescription className="text-primary-dark text-lg font-bold">
            {isSubmitted
              ? 'Thank you for your interest!'
              : 'Fill out the form to access the full asset'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="space-y-4">
              <p className="text-primary-dark">
                You can now download <b>{asset.title}</b>
              </p>
              <ShimmerButton
                borderRadius="12px"
                background="hsl(var(--action))"
                as="a"
                target="_blank"
                href={asset.assetFile}
                rel="noopener noreferrer"
                className="text-center w-full md:w-1/2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2 inline-flex items-center justify-center"
              >
                Download Asset
                <Download className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 z-20">
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
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-dark">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company"
                          {...field}
                          className="bg-background active:bg-primary-light focus:bg-gradient-to-r from-white to-secondary-light shadow-md shadow-primary-light focus:shadow-xl focus:shadow-primary-light"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <ShimmerButton
                  borderRadius="12px"
                  background="hsl(var(--action))"
                  className="text-center w-full md:w-1/2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2"
                  type="submit"
                >
                  Get Asset
                  {isPending ? (
                    <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />
                  ) : (
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                  )}
                </ShimmerButton>
              </form>
            </Form>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
