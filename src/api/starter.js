import axios from "axios";

export const postData = (state) => {
  axios.post(
    `http://localhost:8080/tertir/public/register/user/starter?username=${state.username}&idBankNumber=${state.idBankNumber}&otherBankNumber=${state.otherBankNumber}&currentQrCodeId=${state.currentQrCodeId}`
  );
};

export const postDataContinuer = (state) => {
  axios.post(
    `http://localhost:8080/tertir/public/register/user/continuer?username=${state.username}&idBankNumber=${state.idBankNumber}&otherBankNumber=${state.otherBankNumber}&currentQrCodeId=${state.currentQrCodeId}&previousQrCodeId=${state.previousQrCodeId}`
  );
};
