import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComponent from "../components/TextFieldComponent";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const { response, error, loading }: any = useAxios({
    url: "/api_category.php",
  });
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong
      </Typography>
    );
  }
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choices" },
    { id: "boolean", name: "True/False" },
  ];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <>
      <h1>Quiz App</h1>
      <form onSubmit={handleSubmit}>
        <SelectField options={response?.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldComponent />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Settings;
