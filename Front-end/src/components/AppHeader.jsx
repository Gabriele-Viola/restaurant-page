import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="mb-5">
            <div className="m-auto w-4/5 grid grid-cols-2">

                <NavLink to={'/'} className="logo p-4 basis-1/4">logo</NavLink>
                <div className='flex text-end'>

                    <NavLink to={'/menu'} className='p-4 basis-1/3'>menu</NavLink>
                    <div className='p-4 basis-1/3'>contatti</div>
                    <div className='p-4 basis-1/3'>prenota</div>
                </div>
            </div>

        </header>
    )
}