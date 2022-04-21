import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { ContentArea } from "../organisms/ContentArea";
import { EditArea } from "../organisms/EditArea";

export const ArticleDetail = () => {
  const [canShow, setCanShow] = useState(false);

  const showEditArea = () => {
    setCanShow(!canShow);
  };
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={1} />
        <GridItem w="100%" colSpan={10}>
          <Button colorScheme="teal" onClick={showEditArea}>
            { canShow ? "編集画面を閉じる" : "記事を編集する" }
          </Button>
          {canShow ? (
            <Box mt={5}>
              <EditArea  canShow={canShow} setCanShow={setCanShow} />
            </Box>
          ) : (
            <Box mt={5}>
              <ContentArea />
            </Box>
          )}
        </GridItem>
        <GridItem w="100%" colSpan={1} />
      </Grid>
    </>
  );
};
