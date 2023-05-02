import { useRouter } from "next/router";
import { ThrowCurtain } from "@/components/curtain/Curtain";

const passOrder = ["/", "/goals", "/contribute"]

const CustomLink = (prop: { href: any; children: any }) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    const curtainCallback = () => {
      router.push(prop.href);
    };
    
    if (router.pathname === prop.href) return;
    if (passOrder.includes(prop.href) && passOrder.includes(router.pathname)) {
      if (passOrder.indexOf(prop.href) > passOrder.indexOf(router.pathname)) {
        ThrowCurtain(curtainCallback, "right");
      } else if (passOrder.indexOf(prop.href) < passOrder.indexOf(router.pathname)) {
        ThrowCurtain(curtainCallback, "left");

      }
    }
  };

  return <div onClick={handleClick}>{prop.children}</div>;
};

export default CustomLink;
