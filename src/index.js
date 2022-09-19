import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import App from "../src/App.js";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.store";

const root = createRoot(document.getElementById("root"));
root.render(
    // <StrictMode>
    
        <BrowserRouter>
            <App />
        </BrowserRouter>
    
    // </StrictMode>
);