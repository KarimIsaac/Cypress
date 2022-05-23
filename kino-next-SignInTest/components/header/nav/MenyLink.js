import Link from "next/link";

export default function MenyLink({ _tag, _divClass, _class, _innerText }) {
  return (
    <div className={_divClass}>
      <Link href={_tag}>
        <a className={_class}> {_innerText} </a>
      </Link>
    </div>
  );
}

MenyLink.defaultProps = {
  _tag: "/#",
  _class: "meny-link",
  _divClass: "menu-dropdown",
};
