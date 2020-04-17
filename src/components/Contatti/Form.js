import React from "react";
import styled from "styled-components";

import * as translate from "../../utils/translate.json";

const Form = ({ language }) => {
  const {
    formName,
    formEmail,
    formMessage,
    formMessagePlaceholder,
    formButton,
  } = translate.default.contact;
  return (
    <StyledForm className="form">
      <form name="Museo Form" method="POST" data-netlify="true">
        <input type="hidden" name="Museo Form" value="Museo Form" />
        <div className="flex-rev">
          <input type="text" placeholder="Marco Rossi" name="name" id="name" />
          <label htmlFor="name">{formName[`${language}`]}</label>
        </div>
        <div className="flex-rev">
          <input
            type="email"
            placeholder="marcorossi@email.com"
            name="email"
            id="email"
          />
          <label htmlFor="email">{formEmail[`${language}`]}</label>
        </div>
        <div class="flex-rev">
          <textarea
            placeholder={formMessagePlaceholder[`${language}`]}
            name="message"
            id="message"
          ></textarea>
          <label htmlFor="message">{formMessage[`${language}`]}</label>
        </div>
        <button type="submit" id="sendBtn">
          {formButton[`${language}`]}
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.bsl};

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
  }

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${props => props.theme.black};
    opacity: 0.8;
  }
  .flex-rev {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 8px;
    width: 100%;

    input,
    textarea {
      border: none;
      background-color: #e6e6e6;
      padding: 12px 10px;
      font-size: 0.9rem;
      resize: none;
      margin-top: 7px;
      margin-bottom: 16px;
      border-radius: 5px;
      color: #243342;
      outline-color: #243342;
      outline-width: thin;
      -webkit-appearance: none;
    }

    textarea {
      height: 150px;
    }
  }

  button {
    display: inline-block;
    padding: 14px 30px;
    text-decoration: none;
    color: #fff;
    background: ${props => props.theme.primaryColor};
    letter-spacing: 1px;
    font-size: 1rem;
    border-radius: 5px;
    margin-right: 20px;
    transition: 0.15s ease-in-out;
    border: none;
    opacity: 0.9;
  }

  button:hover {
    cursor: pointer;
    color: #fff;
    opacity: 1;
  }

  button {
    -webkit-appearance: none;
    margin-right: 0;
  }
`;
