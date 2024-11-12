'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { MagicCard } from '@/components/magicui/magic-card';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Post } from '@/sanity/types';
import { trpc } from '@/trpc/client';
// import { SearchPosts } from "./search-posts";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import { Input } from '../ui/input';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BlogGridProps {
  searchQuery?: string;
  initialCategories?: string[];
}

export default function BlogGrid({
  searchQuery: initialSearchQuery,
  initialCategories = [],
}: BlogGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialSearchQuery || '');
  const debouncedSearch = useDebounce(searchValue, 300);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    return initialCategories || [];
  });
  const [open, setOpen] = useState(false);

  console.log('Initial render props:', { initialSearchQuery, initialCategories });

  const { data: posts = [], isLoading } = trpc.getPosts.useQuery(
    {
      searchQuery: debouncedSearch || null,
      categories: selectedCategories.length > 0 ? selectedCategories : null,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  // Extract unique categories from posts
  const availableCategories = useMemo(() => {
    if (!posts?.length) return [];

    // Reduce all post categories into a unique Set
    const uniqueCategories = posts.reduce((acc: Set<string>, post: any) => {
      if (Array.isArray(post.categories)) {
        post.categories.forEach((category: string) => {
          if (category) acc.add(category);
        });
      }
      return acc;
    }, new Set<string>());

    // Convert Set to sorted array
    return Array.from(uniqueCategories).sort();
  }, [posts]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearch) {
      params.set('q', debouncedSearch);
    } else {
      params.delete('q');
    }

    params.delete('categories');
    if (selectedCategories.length > 0) {
      selectedCategories.forEach((cat) => {
        params.append('categories', cat);
      });
    }

    router.push(`/blog?${params.toString()}`, { scroll: false });
  }, [debouncedSearch, selectedCategories, router, searchParams]);

  const categoryFilter = (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between ml-4 bg-white hover:bg-secondary/10"
        >
          {selectedCategories.length === 0
            ? 'Select categories...'
            : `${selectedCategories.length} selected`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search categories..." /> */}
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {availableCategories.map((category: any) => (
                <CommandItem
                  key={category}
                  value={category}
                  onSelect={(currentValue) => {
                    setSelectedCategories((prev) => {
                      if (prev.includes(currentValue)) {
                        return prev.filter((item) => item !== currentValue);
                      }
                      return [...prev, currentValue];
                    });
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedCategories.includes(category) ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="container px-4 mx-auto my-12">
      <div className="max-w-xl mx-auto mb-12">
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full border-1 bg-white backdrop-blur-xl focus:ring-2 focus:ring-secondary/40 
                  placeholder:text-muted-foreground/70 text-foreground transition-all duration-300
                  focus-visible:ring-offset-0 focus-visible:outline-none rounded-lg"
          />
          {categoryFilter}
        </div>

        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="cursor-pointer bg-secondary/40 hover:bg-secondary"
                onClick={() => {
                  setSelectedCategories((prev) => prev.filter((item) => item !== category));
                }}
              >
                {category}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategories([])}
              className="text-xs hover:bg-secondary"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-muted animate-pulse h-[300px]" />
            ))
          ) : posts?.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold">No posts found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search query</p>
            </div>
          ) : (
            posts?.map((post: any) => (
              <motion.div
                key={post._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <MagicCard
                    className="h-full"
                    gradientColor="hsl(var(--primary) / 0.5)"
                    neonFirstColor="hsl(var(--secondary))"
                    neonSecondColor="hsl(var(--accent))"
                  >
                    <Card className="h-full border-0 flex flex-col group">
                      {post.mainImage && (
                        <Image
                          src={post.mainImage}
                          alt={post.title || 'Blog post image'}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                      )}
                      <CardHeader className="backdrop-blur-sm p-4">
                        <CardTitle className="text-lg font-medium text-slate-700 leading-tight">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {post.excerpt?.slice(0, 100)}...
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="backdrop-blur-sm flex-grow px-4">
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(post.categories) &&
                            post.categories.map((category: string) => (
                              <span
                                key={category}
                                className="bg-secondary/20 group-hover:bg-secondary-dark text-secondary-foreground group-hover:text-white px-2 py-1 rounded-full text-xs"
                              >
                                {category}
                              </span>
                            ))}
                        </div>
                      </CardContent>
                      <CardFooter className="bg-secondary/10 group-hover:bg-secondary-dark group-hover:text-white backdrop-blur-sm flex justify-between p-4 text-sm text-muted-foreground mt-auto">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>{post.estimatedReadingTime} min read</span>
                      </CardFooter>
                    </Card>
                  </MagicCard>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
