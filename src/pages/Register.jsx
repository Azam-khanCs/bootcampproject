import styled from "styled-components";
import { mobile } from "../responsive";
import { Button, TextField } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px 0px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
  
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 50px;
  text-align:center;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
          style={{ width: 400 }}
            label="First Name"
            variant="outlined"
            required
          />
          <Input
          style={{ width: 400 }}
            label="Last Name"
            variant="outlined"
            required
          />
          <Input
          style={{ width: 400 }}
            label="User Name"
            variant="outlined"
            required
          />
          <Input
          style={{ width: 400 }}
            label="Email"
            variant="outlined"
            required
          />
          <Input
          style={{ width: 400 }}
            label="Password"
            variant="outlined"
            required
          />
          <Input
          style={{ width: 400 }}
            label="Confirmed Password"
            variant="outlined"
            required
          />
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <SubmitButton type="submit" variant="contained">
        Signup
      </SubmitButton>        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;