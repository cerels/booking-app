// in src/Dashboard.tsx
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Link } from "react-admin"; // Import the Link component from react-admin

export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the Booking App Administration" />
    <CardContent>
      <Typography variant="body1">
        Manage all your appointments, customers, services, and providers from one place.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "1em" }}>
        Quick Links:
      </Typography>
      <ul>
        <li>
          <Link to="/appointments">View upcoming appointments</Link>
        </li>
        <li>
          <Link to="/customers">Manage customer information</Link>
        </li>
        <li>
          <Link to="/services">Update services and pricing</Link>
        </li>
        <li>
          <Link to="/providers">View and manage providers</Link>
        </li>
      </ul>
    </CardContent>
  </Card>
);
