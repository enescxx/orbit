import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import WorkspaceLayout from "./layouts/WorkspaceLayout";

import DashboardPage from "./pages/DashboardPage";
import ChatPage from "./pages/ChatPage";
import CalendarPage from "./pages/CalendarPage";
import TasksPage from "./pages/TasksPage";
import NotesPage from "./pages/NotesPage";
import SettingsPage from "./pages/SettingsPage";

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
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route element={<WorkspaceLayout />}>
                        <Route
                            path="/channels/:workspaceId/:channelId"
                            element={<ChatPage />}
                        />
                    </Route>
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/notes" element={<NotesPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
