import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.es2022 } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      eqeqeq: "error", // sử dụng === thay vì ==
      "no-eval": "error", // không sử dụng eval
      "consistent-return": "error", // nhất quán khi sử dụng return
      "no-duplicate-imports": "error", // sử dụng import 1 lần
      //variables
      "no-shadow": "error", // Ngăn chặn việc khai báo biến có cùng tên với các biến trong phạm vi ngoài.
      "no-redeclare": "error", // không khai báo lại biến
      //styles
      indent: ["error", 2], // 2 khoảng trắng
      semi: ["error", "always"], // bắt buộc đặt dấu ;
      quotes: ["error", "double"], // sử dụng "
      "comma-dangle": ["error", "always-multiline"],
      "max-len": ["error", { code: 120 }],
      "arrow-parens": ["error", "as-needed"],
      //typescript
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ], // bắt buộc dùng kiểu trả về
    },
  },
];
