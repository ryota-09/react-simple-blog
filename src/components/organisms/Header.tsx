import { Box, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const toEditPage = () => {
    history.push("/editArticle");
  };
  return (
    <>
      <Box h={10}>
        <Button colorScheme="green" onClick={toEditPage}>新規作成</Button>
      </Box>
    </>
  );
};
