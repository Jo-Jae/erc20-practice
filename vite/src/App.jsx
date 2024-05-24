import { useEffect, useState } from "react";
import MetamaskButton from "./components/MetamaskButton";

const App = () => {
  const [signer, setSigner] = useState();

  useEffect(() => {
    console.log(signer);
  }, [signer]);

  return (
    <div className="min-h-screen flex flex-col justify-start items-center py-16">
      <MetamaskButton signer={signer} setSigner={setSigner} />
    </div>
  );
};

export default App;
