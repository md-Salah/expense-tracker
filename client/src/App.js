import { ChakraProvider } from "@chakra-ui/react";
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./pages";

function App() {
  return (
    <GlobalProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </GlobalProvider>
  );
}

export default App;
