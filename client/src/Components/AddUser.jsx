import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { addUser } from "../Services/Api";
import { useNavigate } from "react-router-dom";
// Styling
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 1.25rem;
  }
`;

// Default Object for Usestate
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  // UseState
  const [user, setUser] = useState(defaultValue);

  // useNavigate
  const navigate = useNavigate();

  const onvaluechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // AddUser Details
  const adduserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Add a New User
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onvaluechange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onvaluechange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onvaluechange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone No</InputLabel>
        <Input onChange={(e) => onvaluechange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={adduserDetails}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
