// Assuming this file is a .js or .jsx file that supports JSX syntax
import Image from "next/image";
import Footer from "@/components/sales/footer";
import CustomSidebarTitle from "@/components/sales/custom-sidebar-title";

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

  // ... other theme options
};

export default themeConfig;
