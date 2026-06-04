import { format, parseISO } from "date-fns";
import { NextSeo } from "next-seo";
import { allPosts } from "contentlayer/generated";
import Nav from "@/components/sales/nav";
import Footer from "@/components/sales/footer";
import FooterBanner from "@/components/sales/footer-banner";
import Image from "next/legacy/image";
import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";

// This function determines which paths will be pre-rendered.
export async function getStaticPaths() {
  const paths = allPosts
    .map((post) => ({
      params: { slug: post.slug },
    }))
    .filter(({ params }) => params.slug);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  const otherPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 5);

  if (!post) {
    console.error(`Post not found for slug: ${params.slug}`);
    return { notFound: true };
  }

  return { props: { post, otherPosts } };
}

// Your page component now directly receives the post object.
const PostLayout = ({ post, otherPosts }) => {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <NextSeo
        title={post.title}
        description={post.subtitle}
        canonical={`https://openq.dev/blog/${post.slug}`}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: post.title,
          },
          {
            name: "twitter:description",
            content: post.subtitle,
          },
          {
            name: "twitter:image",
            content: `https://openq.dev${post.postImage}`,
          },
        ]}
        openGraph={{
          url: `https://openq.dev/blog/${post.slug}`,
          title: post.title,
          description: post.subtitle,
          images: [
            {
              url: `https://openq.dev${post.postImage}`,
              width: 800,
              height: 600,
              alt: post.title,
              type: "image/jpeg",
            },
          ],
          siteName: "OpenQ",
        }}
        twitter={{
          handle: "@openqlabs",
          site: "@openqlabs",
          cardType: "summary_large_image",
          title: post.title,
          description: post.subtitle,
          image: `https://openq.dev${post.postImage}`,
        }}
      />
      <Nav />

      <article className="font-custom px-content-padding-blog py-8 pt-20">
        <div className="flex flex-col max-w-3xl justify-center mb-8">
          <nav className="breadcrumb mb-4">
            <ol className="flex space-x-2 text-sm text-gray-500">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-700">{post.title}</li>
            </ol>
          </nav>

          <h1 className="text-5xl font-extrabold">{post.title}</h1>
          <h2 className="text-xl font-semibold pt-5 text-[#424242]">
            {post.subtitle}
          </h2>
        </div>

        {post.postImage && <img src={post.postImage} alt="Post image" />}

        <div className="flex flex-col space-y-4 py-6 border-b border-gray-800">
          <span className="text-gray-400 font-ui-monospace">Author</span>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              {post.author && post.author.image && (
                <div className="w-10 h-10 rounded-full mr-2 overflow-hidden">
                  <Image
                    src={post.author.image}
                    alt={"rick"}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-2 overflow-hidden"
                  />
                </div>
              )}
              {/* Author Name */}
              {post.author && (
                <span className="font-semibold">{post.author.name}</span>
              )}
            </div>
            <div>
              <time
                dateTime={post.date}
                className="mt-10 mb-1 text-sm text-gray-500 font-ui-monospace"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </div>
          </div>
        </div>

        {/* Post Body */}
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 markdown text-left text-lg pt-4">
          <MDXContent />
        </div>
      </article>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default PostLayout;
