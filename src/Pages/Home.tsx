import i18next from "i18next";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <h1>Home</h1>
      <p>{i18next.t("auth:auth", { context: "user_name" })} </p>
    </div>
  );
}
