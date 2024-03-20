import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Nav from "../components/sales/nav";
import Footer from "@/components/sales/footer";
import FooterBanner from "@/components/sales/footer-banner";
import { NextSeo } from "next-seo";
import Image from "next/image";

function PostCardHighlight({
  title,
  subtitle,
  url,
  date,
  body,
  postImage,
  author,
}) {
  return (
    <div className="mb-8">
      <Link href={url}>
        <Image
          className="rounded-md"
          src={postImage}
          alt="Post thumbnail"
          width={1570}
          height={856}
        />
      </Link>
      <h2 className="mb-5 mt-5">
        <Link href={url}>
          <div className="font-extrabold text-4xl">{title}</div>
          <div className="text-lg text-gray-600 mt-2">{subtitle}</div>
        </Link>
      </h2>
      <div className="flex flex-row space-x-2 items-center">
        <Image
          className="rounded-full"
          src={author.image}
          alt="Post thumbnail"
          width={25}
          height={25}
        />
        <div className="font-bold">{author.name}</div>
        <time
          dateTime={date}
          className="block text-sm text-gray-600 font-ui-monospace mt-1"
        >
          {format(parseISO(date), "LLLL d, yyyy")}
        </time>
      </div>
      {/*  <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: body.html }}
      /> */}
    </div>
  );
}

function PostCard({ title, subtitle, url, date, body, postImage, author }) {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 border-b border-gray-300 py-7">
      <div className="h-[150px] w-[300px] md:h-[150px] md:w-[150px] flex-shrink-0 relative">
        <Link href={url}>
          <Image
            className="rounded-md"
            src={postImage}
            alt="Post thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>
      <div>
        <h2 className="-mt-1 pt-5 md:pt-0">
          <Link href={url}>
            <div className="font-extrabold text-lg">{title}</div>
            <div className="text-md text-gray-600 mt-2">{subtitle}</div>
          </Link>
        </h2>
        <div className="flex flex-col space-y-1 mb-2 mt-2">
          <div className="font-bold">{author.name}</div>
          <time
            dateTime={date}
            className="block text-xs text-gray-600 font-ui-monospace mt-1"
          >
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
        </div>
        {/*  <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: body.html }}
      /> */}
      </div>
    </div>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="">
      <NextSeo
        title="The OpenQ Blog - Updates, ideas and inspiration from OpenQ to enhance developer relations."
        description="Latest insights, strategies, and inspiration from OpenQ for enhancing developer relations, accelerating your community's growth, and boosting engagement effectively."
        canonical="https://openq.dev/blog"
        openGraph={{
          url: "https://openq.dev/blog",
          title:
            "The OpenQ Blog - Updates, ideas and inspiration from OpenQ to enhance developer relations.",
          description:
            "Harness the power of a CRM that helps you to better engage, understand and grow your developer community.",
          images: [
            {
              url: "https://openq.dev/openq-website-thumbnail.png",
              width: 1200,
              height: 630,
              alt: "OpenQ",
              type: "image/png",
            },
          ],
          siteName: "OpenQ",
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
          title:
            "The OpenQ Blog - Updates, ideas and inspiration from OpenQ to enhance developer relations.",
          description:
            "Latest insights, strategies, and inspiration from OpenQ for enhancing developer relations, accelerating your community's growth, and boosting engagement effectively.",
          image: "https://openq.dev/openq-website-thumbnail.png",
        }}
      />
      <div className="sticky top-0 z-10 border-b border-gray-300 bg-[#FBFBFB]">
        <Nav />
      </div>
      <div className="flex flex-col md:flex-row  px-content-padding pt-10 space-x-0 md:space-x-10">
        <div className="">
          {posts.slice(0, 1).map((post, idx) => (
            <PostCardHighlight key={idx} {...post} />
          ))}
        </div>
        <div className="flex flex-col space-y-3 -mt-7">
          <div className="">
            {posts.slice(1, 3).map((post, idx) => (
              <PostCard key={idx + 4} {...post} />
            ))}
          </div>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
}
