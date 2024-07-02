import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Page1() {
  const { t } = useTranslation("auth");

  return (
    <div>
      <Link to="/home">Home</Link>
      <h1>Page1</h1>
      <p>{t("auth", { context: "key1" })} </p>
      <p>{t("auth", { context: "user_name" })} </p>
    </div>
  );
}
