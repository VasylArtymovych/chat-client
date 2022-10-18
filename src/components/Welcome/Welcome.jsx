import { Container } from "./Welcome.styled";
import Robot from "../../assets/robot.gif";

function Welcome({ currentUser }) {
  return (
    <>
      {currentUser && (
        <Container>
          <img src={Robot} alt="Robot" />
          <h2>
            Welcome <span>{currentUser.username}</span>
          </h2>
          <h3>Please select a chat to Start Messaging</h3>
        </Container>
      )}
    </>
  );
}

export default Welcome;
