import "./App.css";

import FeatureFlags from "./feature-flag/context/FeatureFlags";
import FeatureFlagGlobalState from "./feature-flag/context/FeatureFlagGlobalState";

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
