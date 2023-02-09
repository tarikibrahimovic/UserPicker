import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import "./UsersPage.scss";
import { usersFetch } from "../../redux/usersSlice";

const UsersPage: FC = () => {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersFetch());
  }, []);

  console.log(users);
  return (
    <div className="main">
      <div className="card">
        {users.map((user: any) => {
          return <h1>{user.gender}</h1>;
        })}
      </div>
    </div>
  );
};

export default UsersPage;
