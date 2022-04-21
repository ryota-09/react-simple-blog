/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Text, Center } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCurrentArticle } from "../../hooks/useCurrentArticle";

export const ContentArea: FC = () => {
  const { currentArticle, getArticleById } = useCurrentArticle();
  const params: { id: string } = useParams();

  useEffect(() => {
    getArticleById(params.id);
  }, []);
  return (
    <>
      <Box
        p={7}
        pb={30}
        display={{ md: "flex" }}
        bg="white"
        borderRadius={10}
        mb={4}
      >
        <Stack>
          <Center>
            <Text
              mt={1}
              display="block"
              fontSize="x-large"
              fontWeight="semibold"
            >
              {currentArticle?.h1tag}
            </Text>
          </Center>
          <Box>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="gray.500"
            >
              {currentArticle?.date}
            </Text>
          </Box>
          <Box>
            <Text>{currentArticle?.lead}</Text>
          </Box>
          {currentArticle?.body.map((bodyEle, index) => (
            <Box key={index}>
              <Text
                m={5}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="md"
                letterSpacing="wide"
                color="teal"
              >
                {bodyEle.h2tag}
              </Text>
              <Text>{bodyEle.text}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};
