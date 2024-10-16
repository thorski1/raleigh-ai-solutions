import { urlFor } from "@/sanity/lib/image";
import { PortableTextMarkComponentProps } from "@portabletext/react";

import Image from "next/image";

export const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="w-full h-auto my-8 rounded-lg"
        />
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>
      ),
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc list-inside mb-4">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal list-inside mb-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
      number: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-semibold">{children}</strong>
      ),
      em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
      code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
      ),
      link: ({children, value}: PortableTextMarkComponentProps<{ href: string; _type: string }>) => {
      const rel = !value!.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value!.href} className="text-blue-500 hover:text-blue-600 hover:underline" rel={rel}>
          {children}
        </a>
      )
    },
    },
  };