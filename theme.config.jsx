// Assuming this file is a .js or .jsx file that supports JSX syntax
import Image from "next/image";

const themeConfig = {
  logo: (
    <Image
      src="/logo.png"
      alt="OpenQ"
      width={125} // Original width of the image
      height={75} // Original height of the image
    />
  ),

  // ... other theme options
};

export default themeConfig;
