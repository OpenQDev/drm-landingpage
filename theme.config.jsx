// Assuming this file is a .js or .jsx file that supports JSX syntax
import Image from "next/image";
import Footer from "@/components/sales/footer";
import CustomSidebarTitle from "@/components/sales/custom-sidebar-title";
import { NextSeo } from "next-seo";

const themeConfig = {
  logo: (
    <Image
      src="/logo.png"
      alt="OpenQ"
      width={125} // Original width of the image
      height={75} // Original height of the image
    />
  ),
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
    return (
      <NextSeo
        title="OpenQ"
        description="Your help center that guides you through OpenQ."
      />
    );
  },
  darkMode: false,
};

export default themeConfig;
