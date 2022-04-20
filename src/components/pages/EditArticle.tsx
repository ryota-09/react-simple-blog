import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Text,
  Button,
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
    setArticleh1tag("タイトル");
    setArticleLead("リード文");
    setArticleCategory("カテゴリー");
    setArticleh2tag1("サブタイトル１");
    setArticleText1("ボディー１");
    setArticleh2tag2("サブタイトル2");
    setArticleText2("ボディー2");
  };
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="titlelabel">Article Title</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh1tag} />
        <FormLabel htmlFor="titlelabel">Category</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeCategory} />
        <FormLabel htmlFor="titlelabel">Lead Sentence</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeLead} />
        <FormLabel htmlFor="titlelabel">SubTitle</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh2tag1} />
        <Text mb="8px">Body:</Text>
        <Textarea onChange={onChangeText1} />
        <FormLabel htmlFor="titlelabel">SubTitle</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeh2tag2} />
        <Text mb="8px">Body:</Text>
        <Textarea onChange={onChangeText2} />
        <Button colorScheme="green" onClick={postArticle}>
          投稿
        </Button>
        <Button onClick={backToList} colorScheme="blue">
          一覧に戻る
        </Button>
        <Button onClick={setTest} colorScheme="pink">
          テストボタン
        </Button>
      </FormControl>
    </>
  );
};
