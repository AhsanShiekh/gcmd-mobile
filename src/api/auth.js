import axios from "axios";

const LOGIN_81_API_URL = "http://erp.genomelabs.com.pk:91/api/erp/login/";
const LOGIN_82_API_URL = "http://eerp.genomelabs.com.pk/api/erp/login/";

const getLoginUrl = (s, username, password) => {
  if (s === "81") {
    return `http://erp.genomelabs.com.pk:91/api/erp/login?username=${username}&password=${password}`;
  }

  return `http://eerp.genomelabs.com.pk/api/erp/login?username=${username}&password=${password}`;
};

export const logIn = async (username, password) => {
  const res81 = await axios.get(getLoginUrl("81", username, password));
  if (res81.data.Status) {
    return {
      ...res81.data,
      software: "81",
    };
  }

  const res82 = await axios.get(getLoginUrl("82", username, password));
  if (res82.data.Status) {
    return {
      ...res82.data,
      software: "82",
    };
  }

  return res82.data;
};

/*{
    "Status": true,
    "Validate": true,
    "Message": "",
    "Data": {
        "UserId": 110100000008,
        "UserName": "PPCC BATKHELA",
        "UserShortName": "PPCC",
        "LoginName": "ppcc@gen.erp",
        "SecretQuestion": "1",
        "SecretAnswer": "1",
        "PictureFilePath": null,
        "PatientId": null,
        "PartyLocationId": 1100055001,
        "PartyLocationName": "PPCC - BATKHELA",
        "LocationName": "Abdalian Society - Head Office",
        "OrginizationId": 11,
        "LocationId": 8,
        "EmployeeId": null,
        "RolePrefix": "PTYROL",
        "RoleName": "Party Portal",
        "age": null,
        "gender": null,
        "phone": null
    }
}*/
