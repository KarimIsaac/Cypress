import MenyLink from "./MenyLink";
import { LoginContext } from "../../contexts/loginContext";
import { useContext } from "react";

export default function LoginMeny({ _class }) {
  const {userObj} = useContext(LoginContext)
  return (
    <div className={_class}>
      <MenyLink
        _tag={"/login"}
        _innerText={"login"}
        _divClass={"login-meny-link"}
      />

      {userObj.user !== null 
      ? <MenyLink
        _tag={"/my-page"}
        _innerText={userObj.user}
        _divClass={"login-meny-link"}
      />
    : <a></a>}
      
    </div>
  );
}

LoginMeny.defaultProps = {
  _class: "login-meny",
};
