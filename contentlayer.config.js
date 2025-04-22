import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "nested", of: Author },
    postImage: { type: "string" }, // Assuming postImage is a string path
  },
  computedFields: {
    slug: {
      type: "string",
      // Resolves the slug from the file path, taking the last part
      // e.g., 'blog/my-post.mdx' -> 'my-post'
      resolve: (doc) => doc._raw.flattenedPath.split("/").pop(),
    },
    // If you still need the URL for some reason, adjust it accordingly
    url: {
      type: "string",
      resolve: (post) =>
        `/blog/${post._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

// Define Author type if you haven't already
const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "content", // Adjusted to point to the general content directory
  documentTypes: [Post],
});
