import { useState, createContext } from "react";

export const LoginContext = createContext({
  user: null,
  key: null,
  logedIn: false
});

// export function LoginProvider() {
//   const [user, setUser] = useState("test");
// }
