import { useRouter } from "next/router";
import { useEffect } from "react";

const DrmPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return null; // or some loading indicator
};

export default DrmPage;
