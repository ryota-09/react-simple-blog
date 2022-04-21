import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const toEditPage = () => {
    history.push("/editArticle");
  };
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} pb={5} pt={5}>
        <GridItem w="100%" colSpan={1} />
        <GridItem w="100%" colSpan={10}>
          <Flex>
            <Box p="2">
              <Heading size="md">Raku Blog with NestJS, React</Heading>
            </Box>
            <Spacer />
            <Stack isInline spacing={10}>
                <Text> List </Text>
                <Text> About </Text>
                <Text> Contact </Text>
                <Box h={10}>
                  <Button colorScheme="teal" onClick={toEditPage}>
                    新規作成
                  </Button>
                </Box>
            </Stack>
          </Flex>
        </GridItem>
        <GridItem w="100%" colSpan={1} />
      </Grid>
    </>
  );
};
