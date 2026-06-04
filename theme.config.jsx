import Image from "next/legacy/image";
import Footer from "@/components/sales/footer";
import CustomSidebarTitle from "@/components/sales/custom-sidebar-title";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";

// Define a component for the dynamic logo
const DynamicLogo = () => {
  const { resolvedTheme } = useTheme();
  // Assume you have logo-light.png for light mode and logo-dark.png for dark mode
  // Adjust the src paths as necessary
  const logoSrc =
    resolvedTheme === "dark" ? "/openq-logo-white.png" : "/logo.png";

  return (
    <Image
      src={logoSrc}
      alt="OpenQ"
      width={125} // Original width of the image
      height={30} // Original height of the image
      objectFit="contain"
    />
  );
};

const themeConfig = {
  logo: DynamicLogo,
  footer: {
    component: <Footer />,
  },
  sidebar: {
    defaultMenuCollapseLevel: "1",
    titleComponent: CustomSidebarTitle,
  },
  editLink: {
    component: null,
  },
  docsRepositoryBase: "https://github.com/OpenQDev/openq-feedback",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | OpenQ Help Center",
      description:
        "Documentation and guides for OpenQ open source observability, including GitHub adoption tracking, dependency monitoring, developer data, and community analytics.",
      canonical: "https://openq.dev/help",
      additionalMetaTags: [
        {
          name: "twitter:title",
          content: "OpenQ Help Center - Open Source Observability Docs",
        },
        {
          name: "twitter:description",
          content:
            "Documentation and guides for OpenQ open source observability, including GitHub adoption tracking, dependency monitoring, developer data, and community analytics.",
        },
        {
          name: "twitter:image",
          content: "https://openq.dev/openq-website-thumbnail.png",
        },
      ],
      openGraph: {
        url: "https://openq.dev/help",
        title: "OpenQ Help Center - Open Source Observability Docs",
        description:
          "Documentation and guides for OpenQ open source observability, including GitHub adoption tracking, dependency monitoring, developer data, and community analytics.",
        images: [
          {
            url: "https://openq.dev/openq-website-thumbnail.png",
            width: 1200,
            height: 630,
            alt: "OpenQ Help Center",
            type: "image/png",
          },
        ],
        siteName: "OpenQ",
      },
      twitter: {
        handle: "@openqlabs",
        site: "@openqlabs",
        cardType: "summary_large_image",
        title: "OpenQ Help Center - Open Source Observability Docs",
        description:
          "Documentation and guides for OpenQ open source observability, including GitHub adoption tracking, dependency monitoring, developer data, and community analytics.",
        image: "https://openq.dev/openq-website-thumbnail.png",
      },
    };
  },
  head: null,
};

export default themeConfig;
