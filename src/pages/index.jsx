
import Home_V5 from "./homes/home-v5/index.jsx";
import Wrapper from "./layout-wrapper/wrapper";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Home v1 || Homez - Real Estate ReactJS Template",
};

export default function Mainpage() {
  return (
    <Wrapper>
      <MetaData meta={metaInformation} />
      <Home_V5 />
    </Wrapper>
  );
}
