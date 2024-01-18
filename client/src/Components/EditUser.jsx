import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { editUser, loadUser } from "../Services/Api";
import { useNavigate, useParams } from "react-router-dom";
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

const EditUser = () => {
  // UseState
  const [user, setUser] = useState(defaultValue);

  // useNavigate
  const navigate = useNavigate();

  // Params
  const { id } = useParams();

  // useEffect for Loading the filledup details
  useEffect(() => {
    loadUserDetails();
  }, []);

  //=====================================================================
  const onvaluechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // AddUser Details
  const edituserDetails = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  // Load userDetails
  const loadUserDetails = async () => {
    const response = await loadUser(id);
    setUser(response.data);
  };

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Edit User
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onvaluechange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => onvaluechange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onvaluechange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone No</InputLabel>
        <Input
          onChange={(e) => onvaluechange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={edituserDetails}>
          Edit User{" "}
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
