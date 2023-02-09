import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { setGender } from "../../redux/usersSlice";
import "./Gender.scss";

const Gender: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  

  const genderButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setGender(e.currentTarget.innerText.toLowerCase()));
    navigate('/users', {
        state: e.currentTarget.innerText
    })
  }

  return (
    <div className="main">
      <div className="hero">
        <h1 className="glavniNaslov">Welcome to Random User Picker</h1>
        <h3 className="podnaslov">
          This is the Tinder-ish like app where you will see other users and you
          can choose if you like them or not.
        </h3>
      </div>
      <div className="buttonContainer">
        <p className="genderInfo">
          Please select the gender that you are looking for:
        </p>
        <div className="buttons">
          <button className="femaleButton" onClick={genderButtonHandler}>Female</button>
          <button className="maleButton" onClick={genderButtonHandler}>Male</button>
        </div>
      </div>
    </div>
  );
};

export default Gender;
