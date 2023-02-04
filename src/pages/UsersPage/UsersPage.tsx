import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useLocation } from "react-router-dom";
import "./UsersPage.scss";
import { usersFetch } from "../../redux/usersSlice";
import { saveUsers } from "../../redux/usersSlice";

const UsersPage: FC = () => {
  const location = useLocation();
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(usersFetch());
    let filteredUsers = users.filter((user:any) => {
      return user.gender === location.state.toLowerCase();
    });
    dispatch(saveUsers(filteredUsers));
  }, []);

  console.log(users);
  return (
    <div className="main">
      <div className="card"></div>
    </div>
  );
};

export default UsersPage;
