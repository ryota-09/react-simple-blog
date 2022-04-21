/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useArticleList } from "../../hooks/useArticleList";

import { ArticleCard } from "../organisms/ArticleCard";

export const ArticleList = () => {
  const { articleList, getArticleList } = useArticleList();
  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={1} />
        <GridItem w="100%" colSpan={7}>
          {articleList.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              h1tag={article.h1tag}
              lead={article.lead}
              category={article.category}
              imgPath={article.imgPath}
              date={article.date}
            />
          ))}
        </GridItem>
        <GridItem w="100%" colSpan={3}>
        <Input bg="white" />
        <Button colorScheme="teal" mt={2}>検索</Button>
        </GridItem>
        <GridItem w="100%" colSpan={1} />
      </Grid>
    </>
  );
};
