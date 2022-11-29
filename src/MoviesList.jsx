import React, { useState, useEffect } from "react";
import getUrls from "get-urls";
import parse from "html-react-parser";
import axios from "axios";
import {
  Box,
  Button,
  Image,
  Center,
  Heading,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const MoviesList = () => {
  const [pagination, setPagination] = useState(1);
  const [movies, setMovies] = useState([]);
  const url = `https://gnula.nu/wp-json/wp/v2/posts?per_page=5&page=${pagination}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data);
    });
  }, [pagination]);

  return (
    <div>
      <Center p="15px" className="navegation" bg="gray.50">
        <Button
          onClick={() => setPagination(pagination - 1)}
          colorScheme="teal"
          variant="outline"
        >
          Anterior
        </Button>
        <Button
          onClick={() => setPagination(pagination + 1)}
          colorScheme="teal"
          variant="outline"
        >
          Siguiente
        </Button>
      </Center>
      <div className="moviesList">
        <SimpleGrid
          minChildWidth='200px'
          bg="gray.50"
          spacing="4"
          p="15"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          {movies.map(function (ress, i) {
            const parsedItem = parse(ress.content.rendered);
            console.log(parsedItem[4].props.children);

            return i < 0 ? (
              <p>cargando...</p>
            ) : (
              <Box boxShadow="lg" p="6" rounded="md" bg="white">
                <div key={ress.id} className="movieItem">
                  <a href={ress.link}>
                    <Heading size="sm">{ress.title.rendered}</Heading>
                  </a>
                  <div className="movieImage">{parsedItem[0]}</div>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box size="sm" flex="1" textAlign="left">
                            Sinopsis
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="externalVideos">{parsedItem[2]}</div>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box size="sm" flex="1" textAlign="left">
                            Videos
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="externalVideos">{parsedItem[4]}</div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box size="sm" flex="1" textAlign="left">
                            Otros
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className="externalVideos">{parsedItem[5]}</div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Box>
            );
          })}
        </SimpleGrid>
      </div>
      <Center p="30px" bg="gray.50">
        <Button
          onClick={() => setPagination(pagination - 1)}
          colorScheme="teal"
          variant="outline"
        >
          Anterior
        </Button>
        <Button
          onClick={() => setPagination(pagination + 1)}
          colorScheme="teal"
          variant="outline"
        >
          Siguiente
        </Button>
      </Center>
    </div>
  );
};
export default MoviesList;
