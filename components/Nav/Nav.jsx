import Link from "next/link";
import HeaderWrapper from "./HeaderWrapper";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Nav = () => (
  <HeaderWrapper>
    <MaxWidthWrapper>
      <Link href="/" passHref>
        <h2 className="pointer">@asimonv</h2>
      </Link>
    </MaxWidthWrapper>
  </HeaderWrapper>
);
export default Nav;
