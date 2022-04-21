import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Button,
  Center,
  Box,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export const EditArticle = () => {
  const [articleh1tag, setArticleh1tag] = useState("");
  const [articleLead, setArticleLead] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleh2tag1, setArticleh2tag1] = useState("");
  const [articleText1, setArticleText1] = useState("");
  const [articleh2tag2, setArticleh2tag2] = useState("");
  const [articleText2, setArticleText2] = useState("");

  const history = useHistory();

  const onChangeh1tag = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleh1tag(event.target.value);
  };

  const onChangeLead = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleLead(event.target.value);
  };

  const onChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleCategory(event.target.value);
  };

  const onChangeh2tag1 = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleh2tag1(event.target.value);
  };

  const onChangeText1 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleText1(event.target.value);
  };

  const onChangeh2tag2 = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleh2tag2(event.target.value);
  };

  const onChangeText2 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleText2(event.target.value);
  };

  const postArticle = async () => {
    const response = await axios.post(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles",
      {
        h1tag: articleh1tag,
        lead: articleLead,
        body: [
          { h2tag: articleh2tag1, text: articleText1 },
          { h2tag: articleh2tag2, text: articleText2 },
        ],
        imgPath: "",
        category: articleCategory,
      }
    );
    console.log(response.data);
  };
  const backToList = () => {
    history.push("/");
  };
  const setTest = () => {
    setArticleh1tag(
      "プログラミング言語の選び方と今学習すべきおすすめ言語ランキング【最新】"
    );
    setArticleLead(
      "この記事では、これからプログラミング言語を学ぼうと考えている“初心者のITエンジニア”に向けて、知っておきたいログラミング言語の基本を解説します。"
    );
    setArticleCategory("カテゴリー");
    setArticleh2tag1("そもそもプログラミング言語とは？");
    setArticleText1(
      "プログラミング言語を説明する前に、プログラムについて確認しておきましょう。プログラムとは、日本語訳すると「物事を行う手順」のことです。IT業界で使われるプログラムとは「コンピュータがするべき仕事の手順や内容が書いてあるもの」と理解しておきましょう。"
    );
    setArticleh2tag2("初心者におすすめ・比較的簡単な言語ランキングTOP3");
    setArticleText2(
      "需要があるとはいえ、いきなり初心者が難易度の高い言語を学び始めると挫折の原因になってしまいます。ここでは初心者にもおすすめできるプログラミング言語トップ3を見ていきましょう。"
    );
  };
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={1} />
        <GridItem w="100%" colSpan={10}>
          <Box
            p={7}
            pb={30}
            display={{ md: "flex" }}
            bg="white"
            borderRadius={10}
            mb={4}
          >
            <FormControl>
              <Center>
                <Heading>Create Ariticle</Heading>
              </Center>
              <FormLabel mt={5} htmlFor="titlelabel">
                Article Title
              </FormLabel>
              <Input
                id="titlelabel"
                type="text"
                onChange={onChangeh1tag}
                value={articleh1tag}
              />
              <FormLabel htmlFor="titlelabel" mt={5}>
                Category
              </FormLabel>
              <Input
                id="titlelabel"
                type="text"
                onChange={onChangeCategory}
                value={articleCategory}
              />
              <FormLabel htmlFor="titlelabel" mt={5}>
                Lead Sentence
              </FormLabel>
              <Input
                id="titlelabel"
                type="text"
                onChange={onChangeLead}
                value={articleLead}
              />
              <FormLabel htmlFor="titlelabel" mt={5}>
                SubTitle
              </FormLabel>
              <Input
                id="titlelabel"
                type="text"
                onChange={onChangeh2tag1}
                value={articleh2tag1}
              />
              <Text mb="8px" mt={5}>
                Body:
              </Text>
              <Textarea onChange={onChangeText1} value={articleText1} />
              <FormLabel htmlFor="titlelabel" mt={5}>
                SubTitle
              </FormLabel>
              <Input
                id="titlelabel"
                type="text"
                onChange={onChangeh2tag2}
                value={articleh2tag2}
              />
              <Text mb="8px" mt={5}>
                Body:
              </Text>
              <Textarea onChange={onChangeText2} value={articleText2} />
              <Center>
                <Button colorScheme="green" onClick={postArticle} m={5}>
                  投稿
                </Button>
                <Button onClick={backToList} m={5} colorScheme="blue">
                  一覧に戻る
                </Button>
                <Button onClick={setTest} m={5} colorScheme="pink">
                  テストボタン
                </Button>
              </Center>
            </FormControl>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={1} />
      </Grid>
    </>
  );
};
