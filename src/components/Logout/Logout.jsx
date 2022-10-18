import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import { Button } from "./Logout.styled";

function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.removeItem("chat-app-user");
    navigate("/login");
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

export default Logout;
