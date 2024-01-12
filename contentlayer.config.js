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

export default makeSource({
  contentDirPath: "src/pages/blog", // Adjusted to point to the correct directory
  documentTypes: [Post],
});
