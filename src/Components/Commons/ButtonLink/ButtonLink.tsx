import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

interface PropTypes {
  href: string;
  children: React.ReactNode;
}

const ButtonLink = (props: PropTypes) => {
  const { href, children } = props;

  return (
    <Link href={`${href}`} className={`cursor-pointer`}>
      <Button
        variant="outline"
        size="sm"
        className={`text-[11px] border-black/20 shadow-md`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
