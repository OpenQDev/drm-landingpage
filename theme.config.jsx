import Image from "next/image";
import Footer from "@/components/sales/footer";
import CustomSidebarTitle from "@/components/sales/custom-sidebar-title";
import { NextSeo } from "next-seo";

const themeConfig = {
  logo: <Image src="/logo.png" alt="OpenQ" width={125} height={75} />,
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
        "Discover comprehensive support and in-depth guides on OpenQ - your CRM for developer relations. Whether you're looking for feature references, detailed tutorials, or answers to FAQs, our Help Page offers everything you need to maximize your OpenQ experience.",
      canonical: "https://www.openq.dev/help",
      openGraph: {
        url: "https://www.openq.dev/help",
        title: "How can we help? | OpenQ Help Center",
        description:
          "Discover comprehensive support and in-depth guides on OpenQ - your CRM for developer relations. Whether you're looking for feature references, detailed tutorials, or answers to FAQs, our Help Page offers everything you need to maximize your OpenQ experience.",
        images: [
          {
            url: "https://www.openq.dev/openq-website-thumbnail.png",
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
      },
    };
  },
  darkMode: false,
};

export default themeConfig;
