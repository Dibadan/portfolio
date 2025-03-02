import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CodeBlock = ({ value }: { value: { language: string; code: string } }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative my-8 rounded-xl overflow-hidden bg-neutral-950/50 border border-neutral-800 backdrop-blur-sm shadow-xl"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-neutral-900/50 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
            {value.language}
          </span>
        </div>
        <motion.button
          onClick={handleCopy}
          animate={copied ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors rounded-md bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="font-medium">
            {copied ? "Copied!" : "Copy code"}
          </span>
        </motion.button>
      </div>
      <div className="p-6 overflow-x-auto">
        <SyntaxHighlighter
          language={value.language || "javascript"}
          style={vscDarkPlus}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: 0,
            fontSize: "15px",
            lineHeight: "1.7",
            fontFamily: "JetBrains Mono, monospace",
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "#666",
            borderRight: "1px solid #333",
            marginRight: "1em",
          }}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

export function BlogPostBody({ content }: { content: any }) {
  const customComponents: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: { asset: { url: string } } }) => (
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={value.asset.url}
          alt="Blog Post Image"
          className="rounded-lg my-8 w-full shadow-2xl"
        />
      ),
      code: ({ value }) => <CodeBlock value={value} />,
    },
    block: {
      h3: ({ children }: { children?: React.ReactNode }) => (
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mt-12 mb-6"
        >
          {children}
        </motion.h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <motion.h4 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold mt-8 mb-4"
        >
          {children}
        </motion.h4>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base leading-relaxed mb-6 text-neutral-300"
        >
          {children}
        </motion.p>
      ),
    },
  };

  return (
    <div className="prose prose-lg prose-invert mx-auto prose-pre:p-0 prose-pre:bg-transparent">
      <PortableText value={content} components={customComponents} />
    </div>
  );
}
