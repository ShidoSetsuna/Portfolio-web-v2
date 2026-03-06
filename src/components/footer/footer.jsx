import { useLanguage } from "../../store/languageStore.jsx";
import "./footer.scss";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <p className="footer__text">{t.footer.rights}</p>
    </footer>
  );
}
