import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";

function App() {
  return (
    <main className="h-screen">
    <Container>
      <Sidebar />
      <HomePage />
    </Container>  
    </main>
  );
}

export default App;
