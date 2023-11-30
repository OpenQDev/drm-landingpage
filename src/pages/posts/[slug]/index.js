import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Nav from "@/components/sales/nav";
import Footer from "@/components/sales/footer";
import FooterBanner from "@/components/sales/footer-banner";
import Image from "next/image";

// This function determines which paths will be pre-rendered.
export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));

  return { paths, fallback: false };
}

// This function gets the data for each pre-rendered page based on the slug.
export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

// Your page component now directly receives the post object.
const PostLayout = ({ post }) => {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <Nav />
      <article className="mx-auto font-custom max-w-5xl py-8 pt-20">
        <div className="flex flex-col max-w-3xl justify-center mb-8">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
          <h2 className="text-xl font-semibold pt-3 text-[#424242]">
            {post.subtitle}
          </h2>
        </div>

        {console.log("post: ", post)}

        {/* Image (Assuming you have a post.image property) */}
        {post.postImage && <img src={post.postImage} alt="Post image" />}

        {/* Author Information */}
        <div className="flex flex-col space-y-4 py-6 border-b border-gray-800">
          <span className="text-gray-400 font-ui-monospace">Author</span>

          {/* Author Image (Assuming you have a post.author.image property) */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              {post.author && post.author.image && (
                <div className="w-10 h-10 rounded-full mr-2 overflow-hidden">
                  <Image
                    src={"/landingpage/drm/devrel/Kai.jpg"}
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
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0 markdown text-left text-lg pt-4"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default PostLayout;
