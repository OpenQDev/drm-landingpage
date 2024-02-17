import { format, parseISO } from "date-fns";
import { allDocs } from "contentlayer/generated";
import Nav from "@/components/sales/nav";
import Footer from "@/components/sales/footer";
import FooterBanner from "@/components/sales/footer-banner";
import Image from "next/image";
import Head from "next/head";

// This function determines which paths will be pre-rendered.
export async function getStaticPaths() {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc._raw.flattenedPath },
  }));

  return { paths, fallback: false };
}

// This function gets the data for each pre-rendered page based on the slug.
export async function getStaticProps({ params }) {
  const doc = allDocs.find((p) => p._raw.flattenedPath === params.slug);

  if (!doc) {
    return { notFound: true };
  }

  return { props: { doc } };
}

// Your page component now directly receives the post object.
const DocLayout = ({ doc }) => {
  if (!doc) {
    return <p>Doc not found</p>;
  }

  return (
    <div>
      <Head>
        <title>{doc.title}</title>
        <meta name="description" content={doc.subtitle} />
        <meta property="og:title" content={doc.title} />
        <meta property="og:description" content={doc.subtitle} />
        <meta property="og:image" content={doc.docImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={doc.title} />
        <meta property="twitter:description" content={doc.subtitle} />
        <meta
          property="twitter:image"
          content={`https://openq.dev${doc.docImage}`}
        />
        {console.log("doc: ", doc.docImage)}
        {/* Additional meta tags as needed */}
      </Head>
      <Nav />
      <article className="font-custom px-content-padding-blog py-8 pt-20">
        <div className="flex flex-col max-w-3xl justify-center mb-8">
          <h1 className="text-5xl font-extrabold">{doc.title}</h1>
          <h2 className="text-xl font-semibold pt-5 text-[#424242]">
            {doc.subtitle}
          </h2>
        </div>

        {console.log("doc: ", doc)}

        {/* Image (Assuming you have a doc.image property) */}
        {doc.docImage && <img src={doc.docImage} alt="Doc image" />}

        {/* Author Information */}
        <div className="flex flex-col space-y-4 py-6 border-b border-gray-800">
          <span className="text-gray-400 font-ui-monospace">Author</span>

          {/* Author Image (Assuming you have a doc.author.image property) */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              {doc.author && doc.author.image && (
                <div className="w-10 h-10 rounded-full mr-2 overflow-hidden">
                  <Image
                    src={doc.author.image}
                    alt={"rick"}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-2 overflow-hidden"
                  />
                </div>
              )}
              {/* Author Name */}
              {doc.author && (
                <span className="font-semibold">{doc.author.name}</span>
              )}
            </div>
            <div>
              <time
                dateTime={doc.date}
                className="mt-10 mb-1 text-sm text-gray-500 font-ui-monospace"
              >
                {format(parseISO(doc.date), "LLLL d, yyyy")}
              </time>
            </div>
          </div>
        </div>

        {/* doc Body */}
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0 markdown text-left text-lg pt-4"
          dangerouslySetInnerHTML={{ __html: doc.body.html }}
        />
      </article>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default DocLayout;
