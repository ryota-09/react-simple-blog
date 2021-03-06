/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentArticle } from "../../hooks/useCurrentArticle";

type Props = {
  canShow: boolean;
  setCanShow: Dispatch<SetStateAction<boolean>>;
}

export const EditArea: FC<Props> = (props) => {
  const { canShow, setCanShow } = props;

  const [articleh1tag, setArticleh1tag] = useState("");
  const [articleLead, setArticleLead] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleh2tag1, setArticleh2tag1] = useState("");
  const [articleText1, setArticleText1] = useState("");
  const [articleh2tag2, setArticleh2tag2] = useState("");
  const [articleText2, setArticleText2] = useState("");
  const { currentArticle, getArticleById } = useCurrentArticle();

  const history = useHistory();

  const params: { id: string } = useParams();

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

  useEffect(() => {
    getArticleById(params.id);
  }, []);
  useEffect(() => {
    setArticleh1tag(currentArticle?.h1tag as string);
    setArticleLead(currentArticle?.lead as string);
    setArticleCategory(currentArticle?.category as string);
    setArticleh2tag1(currentArticle?.body[0].h2tag as string);
    setArticleText1(currentArticle?.body[0].h2tag as string);
    setArticleh2tag2(currentArticle?.body[1].h2tag as string);
    setArticleText2(currentArticle?.body[1].text as string);
  }, [currentArticle]);

  const updateArticle = async () => {
    const response = await axios.patch(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles/" +
        currentArticle?.id,
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
    setCanShow(!canShow);
  };

  const deleteArticle = async () => {
    const response = await axios.delete(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles/" +
        currentArticle?.id
    );
    console.log(response.data);
    history.push("/");
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
        <FormControl>
          <Center>
            <Heading>Edit Area</Heading>
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
          <Button colorScheme="teal" m={5} onClick={updateArticle}>
            ??????
          </Button>
          <Button colorScheme="red" m={5} onClick={deleteArticle}>
            ??????
          </Button>
          </Center>
        </FormControl>
      </Box>
    </>
  );
};
