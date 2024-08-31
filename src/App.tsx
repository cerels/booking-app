import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { CustomerList } from "./costumers";
import { AppointmentList } from "./appointments";
import { ServiceList } from "./services";
import { ProviderList } from "./providers";
import { authProvider } from "./authProvider";

// Import icons from Material UI
import AppointmentIcon from "@mui/icons-material/Event";
import CustomerIcon from "@mui/icons-material/People";
import ServiceIcon from "@mui/icons-material/Build";
import ProviderIcon from "@mui/icons-material/LocalHospital";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="appointments" list={AppointmentList} icon={AppointmentIcon} />
    <Resource name="customers" list={CustomerList} icon={CustomerIcon} />
    <Resource name="services" list={ServiceList} icon={ServiceIcon} />
    <Resource name="providers" list={ProviderList} icon={ProviderIcon} />
  </Admin>
);