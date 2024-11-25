import parent from "../eslint.config.js";
import ts from "typescript-eslint";


export default ts.config(
    parent,
    {
        rules: {
            "no-console": "off",
        }
    }
);