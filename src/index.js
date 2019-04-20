import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Router from "./routes";

axios.defaults.baseURL = process.env.API_URL;

render(<Router />, document.getElementById("root"));
