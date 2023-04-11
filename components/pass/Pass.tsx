import { useRouter } from "next/router";
import { ThrowCurtain } from "@/components/curtain/Curtain";

const CustomLink = (prop: { href: any; children: any }) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    const curtainCallback = () => {
      router.push(prop.href);
    };

    ThrowCurtain(curtainCallback);
  };

  return <div onClick={handleClick}>{prop.children}</div>;
};

export default CustomLink;
