import MenyLink from "./MenyLink";
import LoginMeny from "./loginMeny";
export default function Navbar() {
  return (
    <>
      <section className="menu-container">
       <div className="utilites-container">
         <LoginMeny />
        </div>
        <nav>
          <MenyLink _tag={"/movies"} _innerText={"FILMER"} />
          <MenyLink _innerText={"LIVE PÅ BIO"} />
          <MenyLink _innerText={"BARNBIO"} />
          <MenyLink _innerText={"EVENEMANG"} />
          <MenyLink _innerText={"BILJETTER"} />
        </nav>


      </section>
    </>
  );
}
