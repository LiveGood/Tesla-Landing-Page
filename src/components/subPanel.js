import React from 'react'
import styled from "styled-components"

const OuterPanel = styled.div`
  width: 50%;
  text-align: center;
  padding: 50px 0;
  background-color: white;

  /* TODO: Find a better way to do this. */
  @media screen and (max-width: 1300px) {
    position: absolute;
    width: 100%;
    top: 430px;
  }

  @media screen and (max-width: 960px) {
    top: 1718px
  }
`;

const InnerPanel = styled.div`
  width: 70%;
  display: inline-block;
  text-align: left;

  @media screen and (max-width: 415px) {
    width: 80%;
  }
`;

const SubInfo = styled.div`
  padding: 30px 0;
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const SubInput = styled.input`
  height: 44px;
  max-width: 250px;
  width: 65%;
  border-top: 1px solid #0A64DF;
  border-right: 1px solid #6484B3;
  border-bottom: 1px solid #8FB0D1;;
  font-size: 1rem;
  padding-left: 10px;

  @media screen and (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

const SubButton = styled.button`
  position: absolute;
  background-color: #0A64DF;
  color: white;
  height: 47.5px;
  width: 70px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0.9rem;
  padding-bottom: 2px;
  cursor: pointer;
`;

function Subpanel({ heading, content }) {
  return (
    <OuterPanel>
      <InnerPanel>
        <h4>{heading}</h4> 
        <SubInfo>{content}</SubInfo>
        <Label>Email</Label>
        <InputContainer>
          <SubInput placeholder="example@impact.com"></SubInput>
          <SubButton>OK</SubButton>
        </InputContainer>
      </InnerPanel>
    </OuterPanel>
  )
}

export default Subpanel