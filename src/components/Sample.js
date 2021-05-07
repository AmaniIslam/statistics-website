import React, { Component } from "react";
import * as Papa from "papaparse";
import { render } from "react-dom";

function Sample() {
  let SHEET_ID = "1KGfMxWw54q_tN-22SlaQpamz8jrrWj0K77Sash81WHU"; // Get this from the main sheet URL (not the copied Publish URL with '2PACX' in it).
  let API_KEY = "AIzaSyAY2Aau_KglJjDxRsRpdua6kIDPH3Lcvkc";

  function fetchSheet({ spreadsheetId, sheetName, apiKey, complete }) {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    return fetch(url).then((response) =>
      response.json().then((result) => {
        let data = Papa.parse(Papa.unparse(result.values), { header: true });
        complete(data);
      })
    );
  }

  function init() {
    fetchSheet({
      spreadsheetId: "1KGfMxWw54q_tN-22SlaQpamz8jrrWj0K77Sash81WHU",
      sheetName: "Sheet1",
      apiKey: "AIzaSyAY2Aau_KglJjDxRsRpdua6kIDPH3Lcvkc",
      complete: function (data) {
        console.log(data);
      },
    });
  }

  return <>{init()}</>;
}

export default Sample;
