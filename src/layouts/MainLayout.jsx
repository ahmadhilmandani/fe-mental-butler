import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <>
      <div className='bg-light dark:bg-dark w-full min-h-screen flex relative gap-5'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}