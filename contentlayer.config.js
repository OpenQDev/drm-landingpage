import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.md",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: "true" },
    date: { type: "date", required: true },
    author: { type: "json" },
    postImage: { type: "string" }, // Assuming postImage is a string path
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

// Define the Docs document type for documentation
const Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => doc.id || doc._raw.flattenedPath.replace("docs/", ""),
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("docs/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: ".", // Adjusted to point to the correct directory
  documentTypes: [Post, Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
  },
});
