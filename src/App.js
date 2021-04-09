import { Footer } from "./components";
import { HeaderContainer } from "./containers";
import { PollBoard } from "./pages";
import { PollStore, StoreProvider } from "./store";

const store = new PollStore();

function App() {
  return (
    <StoreProvider store={store}>
      <HeaderContainer />
      <PollBoard />
      <Footer />
    </StoreProvider>
  );
}

export default App;
