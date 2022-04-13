import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Input type="password" placeholder="Disease" />
        <Input type="password" placeholder="Address" />
        <Input type="password" placeholder="Mobile Number" />
    
  <div class="dropdown-menu" aria-labelledby="Blood Group">
    <a class="dropdown-item" href="#">A+</a>
    <a class="dropdown-item" href="#">A-</a>
    <a class="dropdown-item" href="#">B+</a>
    <a class="dropdown-item" href="#">B-</a>
    <a class="dropdown-item" href="#">O+</a>
    <a class="dropdown-item" href="#">O-</a>
    <a class="dropdown-item" href="#">AB+</a>
    <a class="dropdown-item" href="#">AB-</a>
  </div>    

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
