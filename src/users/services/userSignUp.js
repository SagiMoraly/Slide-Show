import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import User from "../../users/models/User.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  JOIN_FIRST_FIELD,
  JOIN_FIRST_ERROR,
  JOIN_SECOND_FIELD,
  JOIN_SECOND_ERROR,
  JOIN_STATE_FIELD,
  JOIN_STATE_ERROR,
  JOIN_STREET_FIELD,
  JOIN_STREET_ERROR,
  JOIN_HOUSENUM_FIELD,
  JOIN_HOUSENUM_ERROR,
  JOIN_COUNTRY_FIELD,
  JOIN_COUNTRY_ERROR,
  JOIN_CITY_FIELD,
  JOIN_CITY_ERROR,
  JOIN_ZIP_FIELD,
  JOIN_ZIP_ERROR,
  JOIN_EMAIL_FIELD,
  JOIN_EMAIL_ERROR,
  JOIN_PHONE_FIELD,
  JOIN_PHONE_ERROR,
  JOIN_PASSWORD_FIELD,
  JOIN_PASSWORD_ERROR,
  JOIN_REPASSWORD_FIELD,
  JOIN_REPASSWORD_ERROR,
  JOIN_BUSNESS_CHECK,
  JOIN_SUBMIT_BTN,
  JOIN_CANSEL_BTN,
  SAME_EMAIL_ERROR,
} from "../../services/domService.js";
import useForm from "./../../forms/useForm.js";

export const signUp = () => {
  const INITIAL_SIGNUP_FORM = {
    first: "",
    second: "",
    state: "",
    street: "",
    houseNum: "",
    country: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    password: "",
  };

  const SIGNUP_SCHEMA = {
    first: "mustPlace",
    second: "mustPlace",
    state: "noneMustPlace",
    street: "noneMustPlace",
    houseNum: "noneMustNumber",
    country: "noneMustPlace",
    city: "noneMustPlace",
    zip: "noneMustNumber",
    email: "email",
    phone: "noneMustPhone",
    password: "password",
    /*     business: "boolean", */
  };

  const SIGNUP_INPUTS_ARRAY = [
    JOIN_FIRST_FIELD,
    JOIN_SECOND_FIELD,
    JOIN_STATE_FIELD,
    JOIN_STREET_FIELD,
    JOIN_HOUSENUM_FIELD,
    JOIN_COUNTRY_FIELD,
    JOIN_CITY_FIELD,
    JOIN_ZIP_FIELD,
    JOIN_EMAIL_FIELD,
    JOIN_PHONE_FIELD,
    JOIN_PASSWORD_FIELD,
    JOIN_REPASSWORD_FIELD,
  ];
  const SIGNUP_ERROR_ARRAY = [
    JOIN_FIRST_ERROR,
    JOIN_SECOND_ERROR,
    JOIN_STATE_ERROR,
    JOIN_STREET_ERROR,
    JOIN_HOUSENUM_ERROR,
    JOIN_COUNTRY_ERROR,
    JOIN_CITY_ERROR,
    JOIN_ZIP_ERROR,
    JOIN_EMAIL_ERROR,
    JOIN_PHONE_ERROR,
    JOIN_PASSWORD_ERROR,
    JOIN_REPASSWORD_ERROR,
  ];

  const handleSignUpinSubmit = (data) => {
    try {
      let {
        email,
        password,
        state,
        country,
        city,
        street,
        houseNum,
        zip,
        phone,
        first,
        second,
      } = data;

      /* all of there are not must so 
      if user didn't enter nothing do
      string to none
      number to 0123456789 */

      state = state ? state : "none";
      country = country ? country : "none";
      city = city ? city : "none";
      street = street ? street : "none";
      houseNum = houseNum ? houseNum : "0123456789";
      zip = zip ? zip : "0123456789";
      phone = phone ? phone : "0123456789";

      const newData = {
        email: email,
        password: password,
        isBusiness: JOIN_BUSNESS_CHECK.checked,
        address: {
          state: state,
          country: country,
          city: city,
          street: street,
          houseNumber: +houseNum,
          zip: +zip,
        },
        phone: phone,
        name: {
          first: first,
          last: second,
        },
      };

      const thisUser = new User(newData, users);
      users.push(thisUser);

      onReset(
        SIGNUP_INPUTS_ARRAY,
        SIGNUP_ERROR_ARRAY,
        JOIN_CANSEL_BTN,
        form.handleReset
      );
      onChangePage(PAGES.HOME);
    } catch (error) {
      if (error.message == "User is already registered!") {
        SAME_EMAIL_ERROR.innerHTML =
          "This email have been used befor try to enter your user or use other email please";
      }
    } /* /error */
  }; /* /function for submi */

  const form = useForm(
    INITIAL_SIGNUP_FORM,
    SIGNUP_SCHEMA,
    handleSignUpinSubmit,
    ["state", "country", "city", "street", "houseNum", "zip", "phone"]
  );

  JOIN_FIRST_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_FIRST_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_SECOND_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_SECOND_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_STATE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_STATE_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_STREET_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_STREET_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_HOUSENUM_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_HOUSENUM_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_COUNTRY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_COUNTRY_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_CITY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_CITY_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_ZIP_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_ZIP_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_EMAIL_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_PHONE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_PHONE_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  JOIN_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      JOIN_PASSWORD_ERROR,
      JOIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
    if (!(JOIN_REPASSWORD_FIELD.value === JOIN_PASSWORD_FIELD.value)) {
      JOIN_REPASSWORD_ERROR.innerHTML =
        "Password must be the same the password you allready enterd";
      JOIN_SUBMIT_BTN.setAttribute("disabled", "disabled");
    }
  });

  JOIN_REPASSWORD_FIELD.addEventListener("input", (event) => {
    if (!(JOIN_REPASSWORD_FIELD.value === JOIN_PASSWORD_FIELD.value)) {
      JOIN_REPASSWORD_ERROR.innerHTML =
        "Password must be the same the password you allready enterd";
      JOIN_SUBMIT_BTN.setAttribute("disabled", "disabled");
    }
    if (JOIN_REPASSWORD_FIELD.value === JOIN_PASSWORD_FIELD.value) {
      JOIN_REPASSWORD_ERROR.innerHTML = null;
      if (!form.handleDisableSubmitBtn())
        JOIN_SUBMIT_BTN.removeAttribute("disabled");
    }
  });

  /************** buttons **************/

  JOIN_CANSEL_BTN.addEventListener("click", () => {
    onReset(
      SIGNUP_INPUTS_ARRAY,
      SIGNUP_ERROR_ARRAY,
      JOIN_SUBMIT_BTN,
      form.handleReset
    );
    JOIN_BUSNESS_CHECK.checked = false;
  });

  JOIN_SUBMIT_BTN.addEventListener("click", form.onSubmit);
};
