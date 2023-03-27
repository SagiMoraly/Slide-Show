import {
  NOT_LOGED_LOGIN,
  NOT_LOGED_SIGNUP,
  LOGED_IN_CREATE_PIC,
  LOGED_IN_SIGNOUT,
  LOG_OUT,
} from "../services/domService.js";
import PAGES from "../routes/pageModel.js";
import { onChangePage } from "../routes/router.js";

export const accessHandle = () => {
  LOGED_IN_CREATE_PIC.classList.remove("d-none");
  LOGED_IN_SIGNOUT.classList.remove("d-none");
  LOGED_IN_CREATE_PIC.classList.add("d-block");
  LOGED_IN_SIGNOUT.classList.add("d-block");

  NOT_LOGED_SIGNUP.classList.remove("d-block");
  NOT_LOGED_LOGIN.classList.remove("d-block");
  NOT_LOGED_SIGNUP.classList.add("d-none");
  NOT_LOGED_LOGIN.classList.add("d-none");
};

LOG_OUT.addEventListener("click", () => {
  LOGED_IN_CREATE_PIC.classList.remove("d-block");
  LOGED_IN_SIGNOUT.classList.remove("d-block");
  LOGED_IN_CREATE_PIC.classList.add("d-none");
  LOGED_IN_SIGNOUT.classList.add("d-none");

  NOT_LOGED_SIGNUP.classList.remove("d-none");
  NOT_LOGED_LOGIN.classList.remove("d-none");
  NOT_LOGED_SIGNUP.classList.add("d-block");
  NOT_LOGED_LOGIN.classList.add("d-block");

  //remove the exis user
  localStorage.removeItem("user");
  onChangePage(PAGES.HOME);
});
