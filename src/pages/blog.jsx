import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Nav from "../components/sales/nav";
import Footer from "@/components/sales/footer";
import FooterBanner from "@/components/sales/footer-banner";

function PostCard({ title, url, date, body }) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={url}>
          <span className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {title}
          </span>
        </Link>
      </h2>
      <time dateTime={date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: body.html }}
      />
    </div>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black font-custom">
          Blog Posts
        </h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
}
