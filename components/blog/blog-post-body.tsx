import { PortableText, PortableTextReactComponents } from "@portabletext/react";

export function BlogPostBody({ content }: { content: any }) {
  const customComponents: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: { asset: { url: string } } }) => (
        <img
          src={value.asset.url}
          alt="Blog Post Image"
          className="rounded-lg my-6 w-full"
        />
      ),
    },
    block: {
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-2xl font-bold mt-6 mb-2">{children}</h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-base leading-relaxed mb-4">{children}</p>
      ),
    },
  };

  return (
    <div className="prose prose-lg mx-auto">
      <PortableText value={content} components={customComponents} />
    </div>
  );
}
