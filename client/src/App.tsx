import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Chat-App is running...</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
