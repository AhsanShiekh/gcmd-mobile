import axios from "axios";

const getReportsLink = (s, patientID, partyID, fromDate, toDate) => {
  if (s === "81") {
    return `http://erp.genomelabs.com.pk:91/api/ERP/DIMS/PatientReport?PatientId=${patientID}&PartyLocationId=${partyID}&fromDate=${fromDate}&toDate=${toDate}`;
  }
  return `http://eerp.genomelabs.com.pk/api/ERP/DIMS/PatientReport?PatientId=${patientID}&PartyLocationId=${partyID}&fromDate=${fromDate}&toDate=${toDate}`;
};

export const getReports = async (
  software,
  patientID,
  partyID,
  fromDate,
  toDate
) => {
  try {
    if (software === "81") {
      const res = await axios.get(
        getReportsLink("81", patientID, partyID, fromDate, toDate)
      );
      return res.data;
    }
    const res = await axios.get(
      getReportsLink("82", patientID, partyID, fromDate, toDate)
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getPDF = async (id) => {
  return;
};

/*Object {
        "Age": "15 Year(s)",
        "CNIC": "",
        "CreatedOn": "11/23/2021",
        "Email": "",
        "FatherName": "",
        "Gender": "Male",
        "Mobile1": "",
        "Mobile2": "",
        "NetBalance": 0,
        "PatientId": 800302522,
        "PatientName": "RAMAHAT ULLA  ",
        "PatientNo": "AD8211113073",
        "PatientOrderDetails": Array [
          Object {
            "NetworkIP": "192.168.15.254\\Files",
            "PATH": null,
            "PatientOrderId": 821114499,
            "ProfilePrefix": "REVERT",
            "ReportDateTime": "2021-11-24T14:00:03.93Z",
            "STATUSDate": "11/23/2021 5:21:10 PM",
            "ServiceName": "TSH(thyroid-stimulating hormone)",
            "Status": "Reverfied",
            "UploadFilePath": "\\Upload\\LIMS\\PatientReport",
            "WANIP": "42.201.170.174",
          },*/
