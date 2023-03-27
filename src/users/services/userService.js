import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import {
  LOGIN_EMAIL_FIELD,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD_FIELD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
  LOGIN_WRONG_ERROR,
} from "../../services/domService.js";
import useForm from "./../../forms/useForm.js";
import { accessHandle } from "../../logedIn/access.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";

export const login = () => {
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: "email",
    password: "password",
  };

  const LOGIN_INPUTS_ARRAY = [LOGIN_EMAIL_FIELD, LOGIN_PASSWORD_FIELD];
  const LOGIN_ERROR_ARRAY = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];

  const handleLoginSubmit = (data) => {
    const theUser = searchForDataUser(data, users);

    if (theUser == -1) {
      LOGIN_WRONG_ERROR.innerHTML = "user email or password is incorrect";
    } else {
      accessHandle();
      let toLocalStorage = users[theUser];
      toLocalStorage = JSON.stringify(toLocalStorage);

      localStorage.setItem("user", toLocalStorage);

      onChangePage(PAGES.HOME);

      onReset(
        LOGIN_INPUTS_ARRAY,
        LOGIN_ERROR_ARRAY,
        LOGIN_SUBMIT_BTN,
        form.handleReset
      );
    }

    // creating token - payload?
    // set token in localStorage?
    // set global variable user?
    // clear form field and errors
  };

  const form = useForm(INITIAL_LOGIN_FORM, LOGIN_SCHEMA, handleLoginSubmit);

  LOGIN_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_SUBMIT_BTN.addEventListener("click", form.onSubmit);
};

const searchForDataUser = (data, users) => {
  const user = users.findIndex((user) => user.email === data.email);
  if (user !== -1 && users[user].password === data.password) return user;

  return -1;
};
