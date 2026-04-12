import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ChatPage from "./pages/ChatPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Orbit is running...</h1>
                        </div>
                    }
                />
                <Route path="/channels" element={<MainLayout />}>
                    <Route
                        path=":workspaceId/:channelId"
                        element={<ChatPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
