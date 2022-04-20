import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "../../types/article";

type Props = {
  id: string;
  h1tag: string;
  lead: string;
  imgPath: string;
  category: string;
  date: string;
};

export const ArticleCard: FC<Props> = (props) => {
  const { id, h1tag, lead , imgPath, category, date } = props;
  return (
    <>
      <Box
        h="500px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        display={{ md: "flex" }}
        m={5}
      >
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text fontWeight="thin" color="gray.500">
            {date}
          </Text>
          <Link to={"/articleDetail/" + id}>
            <Text fontWeight="extrabold" fontSize={30}>{h1tag}</Text>
          </Link>
          <Text fontWeight="normal">{lead}</Text>
        </Box>
        <Spacer />
        <Box flexShrink={0}>
          <Image
            src={imgPath}
            width={{ sm: 200 }}
            borderRadius="lg"
          />
        </Box>
      </Box>
    </>
  );
};
