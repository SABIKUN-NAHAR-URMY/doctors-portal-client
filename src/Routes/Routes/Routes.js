import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Main from '../../Layouts/Main';
import Appointment from '../../pages/Appointment/Appointment/Appointment';
import AddDoctor from '../../pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../pages/Dashboard/Dashboard';
import ManageDoctor from '../../pages/Dashboard/ManageDoctor/ManageDoctor';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import MyAppointment from '../../pages/MyAppointment/MyAppointment';
import Signup from '../../pages/Signup/Signup';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
        ]
    }
])