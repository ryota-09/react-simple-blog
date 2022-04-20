import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentArticle } from "../../hooks/useCurrentArticle";

export const ArticleDetail = () => {
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
  };

  const deleteArticle = async () => {
    const response = await axios.delete(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles/" +
        currentArticle?.id
    );
    console.log(response.data);
    history.push("/");
  };

  const backToList = () => {
    history.push("/");
  };
  return (
    <>
      <Button colorScheme="green">記事を編集する</Button>
      <FormControl>
        <FormLabel htmlFor="titlelabel">Article Title</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh1tag} value={articleh1tag}/>
        <FormLabel htmlFor="titlelabel">Category</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeCategory} value={articleCategory}/>
        <FormLabel htmlFor="titlelabel">Lead Sentence</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeLead} value={articleLead}/>
        <FormLabel htmlFor="titlelabel">SubTitle</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh2tag1} value={articleh2tag1}/>
        <Text mb="8px">Body:</Text>
        <Textarea onChange={onChangeText1} value={articleText1}/>
        <FormLabel htmlFor="titlelabel">SubTitle</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh2tag2} value={articleh2tag2} />
        <Text mb="8px">Body:</Text>
        <Textarea onChange={onChangeText2} value={articleText2} />
        <Button colorScheme="green" onClick={updateArticle}>
          更新
        </Button>
        <Button onClick={backToList} colorScheme="blue">
          一覧に戻る
        </Button>
        <Button colorScheme="red" onClick={deleteArticle}>
          削除
        </Button>
      </FormControl>
    </>
  );
};
