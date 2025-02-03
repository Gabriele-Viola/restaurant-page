export default function AppHeader() {
    return (
        <header className="bg-(--color-lion)">
            <div className="m-auto w-4/5 grid grid-cols-2">

                <div className="logo p-4 basis-1/4">logo</div>
                <div className='flex text-end'>

                    <div className='p-4 basis-1/3'>menu</div>
                    <div className='p-4 basis-1/3'>contatti</div>
                    <div className='p-4 basis-1/3'>prenota</div>
                </div>
            </div>

        </header>
    )
}