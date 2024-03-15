import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.md",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "json" },
    postImage: { type: "string" }, // Assuming postImage is a string path
  },
  computedFields: {
    slug: {
      type: "string",
      // Generate slug based on the file name, stripping the .md extension
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ""),
    },
    // If you still need the URL for some reason, adjust it accordingly
    url: {
      type: "string",
      resolve: (post) =>
        `/blog/${post._raw.sourceFileName.replace(/\.md$/, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content", // Adjusted to point to the general content directory
  documentTypes: [Post],
});
