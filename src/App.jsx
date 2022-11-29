import { Heading, Center } from "@chakra-ui/react";

import "./App.css";
import MoviesList from "./MoviesList";

function App() {
  return (
    <div className="App">
      <Center p="3" >
        <Heading p="3" size="md">ALTERNATIVE GNULA</Heading>
        <div className="siteInfo">
            Frontend alternativo de Gnula.nu 
        </div>
      </Center>
      <MoviesList />
    </div>
  );
}

export default App;
