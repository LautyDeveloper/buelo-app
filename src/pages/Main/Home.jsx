import Layout from "../../components/Layout/Layout";
import ElderlyPerson from "./components/Elderly-Person/ElderlyPerson";
import "./home.css";

export default function Home() {
  return (
    <Layout page={"DashBoard"}>
      <ElderlyPerson />
    </Layout>
  );
}
