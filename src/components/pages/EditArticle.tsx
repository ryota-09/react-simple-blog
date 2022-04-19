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
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleBody, setArticleBody] = useState("");

  const history = useHistory();

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleTitle(event.target.value);
  };

  const onChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleCategory(event.target.value);
  };

  const onChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleBody(event.target.value);
  };

  const postArticle = async () => {
    console.log(articleTitle, articleCategory, articleBody)
    const response = await axios.post(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles",
      {
        title: articleTitle,
        category: articleCategory,
        body: articleBody,
      }
    );
  };
  const backToList = () => {
    history.push("/")
  }
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="titlelabel">Article Title</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeTitle} />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel htmlFor="titlelabel">Category</FormLabel>
        <Input id="titlelabel" type="text" onChange={onChangeCategory} />
        <Text mb="8px">Body:</Text>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Textarea
          placeholder="Here is a sample placeholder"
          onChange={onChangeBody}
        />
        <Button colorScheme="green" onClick={postArticle}>
          投稿
        </Button>
        <Button onClick={backToList} colorScheme="blue">一覧に戻る</Button>
      </FormControl>
    </>
  );
};
