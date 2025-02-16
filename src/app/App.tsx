import FormWizard from "../components/FormWizard";
import { config } from "../testConfig/config.tsx";

function App() {
  return (
    <>
      <FormWizard {...{ config: config() }} />
    </>
  );
}

export default App;
