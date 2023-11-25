module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended"
    ],
    "overrides": [],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "react-hooks", "jsx-ally"],
    "rules": {
        "react/react-in-jsx-scope": "off" 
    },
    "settings": {
      "react": { version: "detect" },
    },
  };