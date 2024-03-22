
import Banner from "./Banner";
import Feature from "./Feature";
import Form from "./Form";
import Pricing from "./Pricing";
import Question from "./Question";
import WhatClientSays from "./WhatClientSays";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Pricing />
      <Question />
      <WhatClientSays />
      <Form />
    </div>
  );
};

export default Home;