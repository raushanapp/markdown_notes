import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNotes } from "./Components/NewNotes";
function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNotes/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </Container>
  );
}

export default App;
