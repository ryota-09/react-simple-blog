import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link, useHistory } from "react-router-dom";

type Props = {
  id: string;
  h1tag: string;
  lead: string;
  imgPath: string;
  category: string;
  date: string;
};

export const ArticleCard: FC<Props> = (props) => {
  const { id, h1tag, lead, imgPath, category, date } = props;

  const history = useHistory();

  const toDetailPage = () => {
    history.push("/articleDetail/" + id);
  };
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
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 40 }}
            src={imgPath}
            alt="Woman paying for a purchase"
            onClick={toDetailPage}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Stack spacing={3}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="gray.500"
            >
              {date}
            </Text>
            <Text
              mt={1}
              display="block"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ cursor: "pointer", opacity: 0.8 , color: "teal"}}
            >
              <Link to={"/articleDetail/" + id}>{h1tag}</Link>
            </Text>
            <Text mt={2} color="gray.500">
              {lead}
            </Text>
            <SimpleGrid columns={2} spacing={20}>
              <Box></Box>
              <Box>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="md"
                  p={0}
                  fontSize="md"
                  padding={5}
                  onClick={toDetailPage}
                >
                  続きを読む
                </Button>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
