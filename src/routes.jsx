import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Content from './components/Content'
import ContentDetail from './components/ContentDetail'
const router = createBrowserRouter([
    {

        path: '/',
        element: (<>
            <NavBar />
            <MainContent />
        </>),
        children: [
            {
            index: true,
            element: <Content />

            },
            {
                path: 'details',
                element: <ContentDetail />
            }
        ]
    }
])

export default router