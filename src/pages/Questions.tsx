import { Button, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/actions";

const getRandomNumber = (max: any) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function Questions() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  console.log(options);

  const {
    questionCategory,
    questionDifficulty,
    questionType,
    amountOfQuestion,
    score,
  }: any = useSelector((state) => state);
  console.log(questionCategory, questionDifficulty);
  let apiUrl = `/api.php?amount=${amountOfQuestion}`;
  if (questionCategory) {
    apiUrl = apiUrl.concat(`&category=${questionCategory}`);
  }
  if (questionDifficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
  }
  if (questionType) {
    apiUrl = apiUrl.concat(`&type=${questionType}`);
  }

  const { response, loading }: any = useAxios({ url: apiUrl });
  useEffect(() => {
    if (response?.results.length) {
      const question = response?.results[questionIndex];
      let answers: any = [...question?.incorrect_answers];
      answers.splice(
        getRandomNumber(question?.incorrect_answers.length),
        0,
        question?.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e: any) => {
    const question = response?.results[questionIndex];
    if (e.target.textContent === question?.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response?.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography mt={5}>
          {decode(response?.results[questionIndex]?.question)}
        </Typography>
        {options?.map((data, id): any => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">
              {data}
            </Button>
          </Box>
        ))}
        <Box mt={5}>
          Score: {score}/{response?.results.length}
        </Box>
      </Box>
    </>
  );
}

export default Questions;
