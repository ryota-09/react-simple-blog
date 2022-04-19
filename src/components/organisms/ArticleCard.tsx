import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  id: string;
  title: string;
  body: string;
  category: string;
  date: string;
};

export const ArticleCard: FC<Props> = (props) => {
  const { id, title, body, category, date } = props;
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
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="extrabold"
            href="#"
          >
            {title}
          </Link>
          <Text fontWeight="normal">{body}</Text>
        </Box>
        <Spacer />
        <Box flexShrink={0}>
          <Image
            src="/img_category/pc.jpg"
            width={{ sm: 200 }}
            borderRadius="lg"
          />
        </Box>
      </Box>
    </>
  );
};
