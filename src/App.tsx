import { Suspense } from "react";
import Loading from "./components/loading";
import Home from "./HomePage";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}

export default App;
