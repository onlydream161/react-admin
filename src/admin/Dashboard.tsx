import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";

const Dashboard = () => {
  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>Вы находитесь в админке</CardContent>
    </Card>
  );
};

export default Dashboard;
