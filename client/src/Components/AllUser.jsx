import React, { useEffect, useState } from "react";
import { getUser, deleteUser } from "../Services/Api";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 85%;
  margin: 3rem auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 1rem;
  }
`;

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const data = await getUser();
    setUsers(data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  deleteUserDetails(user._id);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
