import {
  faArrowDownUpLock,
  faArrowRotateBack,
  faBell,
  faBook,
  faBullseye,
  faCheckDouble,
  faDatabase,
  faFileShield,
  faFingerprint,
  faFolderOpen,
  faGavel,
  faKey,
  faLaptopFile,
  faLink,
  faLock,
  faMagnifyingGlassChart,
  faMagnifyingGlassDollar,
  faMicrochip,
  faNetworkWired,
  faSliders,
  faToolbox,
  faUserSecret,
  faUserShield,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TCategories = "interactie" | "proces" | "integratie" | "services" | "data";

export const categories = {
  interactie: [
    { title: "Procesondersteuning", icon: <FontAwesomeIcon icon={faMicrochip} /> },
    { title: "Regie op gegevens", icon: <FontAwesomeIcon icon={faFileShield} /> },
    { title: "Aanvragen en meldingen", icon: <FontAwesomeIcon icon={faBell} /> },
    { title: "Eindgebruiker authenticatie", icon: <FontAwesomeIcon icon={faUserShield} /> },
  ],
  proces: [
    { title: "Procesinrichting en uitvoering", icon: <FontAwesomeIcon icon={faMicrochip} /> },
    { title: "Bedrijfsregels", icon: <FontAwesomeIcon icon={faGavel} /> },
    { title: "Data analyse ondersteuning", icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} /> },
    { title: "Functie autorisatie", icon: <FontAwesomeIcon icon={faLock} /> },
    { title: "Doel en groendslag", icon: <FontAwesomeIcon icon={faBullseye} /> },
    { title: "Audit logging", icon: <FontAwesomeIcon icon={faMagnifyingGlassDollar} /> },
  ],
  integratie: [
    { title: "Netwerk", icon: <FontAwesomeIcon icon={faNetworkWired} /> },
    { title: "Netwerk beveiliging", icon: <FontAwesomeIcon icon={faKey} /> },
    { title: "Verbinden", icon: <FontAwesomeIcon icon={faLink} /> },
    { title: "Dienstencatalogus", icon: <FontAwesomeIcon icon={faBook} /> },
  ],
  services: [
    { title: "Organisatie authenticatie", icon: <FontAwesomeIcon icon={faFingerprint} /> },
    { title: "Diensten autorisatie", icon: <FontAwesomeIcon icon={faArrowDownUpLock} /> },
    { title: "Diensten", icon: <FontAwesomeIcon icon={faToolbox} /> },
    { title: "Terugmelden", icon: <FontAwesomeIcon icon={faArrowRotateBack} /> },
    { title: "Abonneren en notificeren", icon: <FontAwesomeIcon icon={faCheckDouble} /> },
    { title: "Audit logging", icon: <FontAwesomeIcon icon={faMagnifyingGlassDollar} /> },
    { title: "Transformatie", icon: <FontAwesomeIcon icon={faSliders} /> },
    { title: "Integratie", icon: <FontAwesomeIcon icon={faWrench} /> },
    { title: "Pseudonimisering en anonimisering", icon: <FontAwesomeIcon icon={faUserSecret} /> },
  ],
  data: [
    { title: "Bijhouding gegevens", icon: <FontAwesomeIcon icon={faDatabase} /> },
    { title: "Historie en metadatering", icon: <FontAwesomeIcon icon={faFolderOpen} /> },
    { title: "Protocollering", icon: <FontAwesomeIcon icon={faLaptopFile} /> },
  ],
};
