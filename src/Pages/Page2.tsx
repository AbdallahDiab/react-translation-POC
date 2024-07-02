import i18next from "i18next";
import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <h1>Page2</h1>
      <p>{i18next.t("auth:auth", { context: "key2" })} </p>
    </div>
  );
}
