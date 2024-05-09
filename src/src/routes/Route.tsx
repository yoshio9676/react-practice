import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Sample from '../pages/Sample';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sample",
        element: <Sample />
    }
]);

export default router