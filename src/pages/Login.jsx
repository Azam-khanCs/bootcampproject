import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align:center;
`;

const Form = styled.form`  
width:100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled(TextField)`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  && {
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #2196f3;
    color: white;

    &:hover {
      background-color: #0d8be0;
    }
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input
          style={{ width: 400 }}
            label="User Name"
            variant="outlined"
            required
          />
           <Input
          style={{ width: 400 }}
            label="Password"
            variant="outlined"
            required
          />
          <SubmitButton type="submit" variant="contained">
        Signup
      </SubmitButton> 
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;