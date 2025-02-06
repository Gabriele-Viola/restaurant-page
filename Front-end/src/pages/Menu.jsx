import { useEffect, useState } from "react"
import { GiFlour, GiLindenLeaf } from 'react-icons/gi'

export default function Menu() {
    const [menu, setMenu] = useState([])
    const [antipasti, setAntipasti] = useState([])
    const [primi, setPrimi] = useState([])
    const [secondi, setSecondi] = useState([])
    const [desserts, setDesserts] = useState([])
    const [error, setError] = useState('')

    const urlIndexMenu = `${import.meta.env.VITE_API_URL}/menu`

    async function fetchData(urlIndexMenu) {
        try {
            const resp = await fetch(urlIndexMenu)
            if (!resp.ok) {
                throw new Error('fail fetch')
            }
            const data = await resp.json()
            setMenu(data.data)
            setAntipasti(data.data?.filter(piatto => piatto.tipologia_portata === 'Antipasto'))
            setPrimi(data.data?.filter(piatto => piatto.tipologia_portata === 'Primo'))
            setSecondi(data.data?.filter(piatto => piatto.tipologia_portata === 'Secondo'))
            setDesserts(data.data?.filter(piatto => piatto.tipologia_portata === 'Dessert'))

        } catch (err) {
            setError(err.message)
        }

    }
    useEffect(() => {
        fetchData(urlIndexMenu)
    }, [])
    console.log({ menu, antipasti, primi, secondi, desserts });


    return (
        <div className="bodyMenu w-4/5 m-auto text-center bg-[var(--color-honey)] mb-10 p-5">
            <h1 className="capitalize text-3xl mb-10">il menu propone</h1>
            <div className="entrè mb-20">
                <h3 className="capitalize text-2xl mb-10">antipasti</h3>
                <div className="grid grid-cols-2 gap-y-8">
                    {antipasti?.length !== 0 ? antipasti.filter(antipasto => antipasto.tipologia !== 'Mare').map(antipasto => (
                        <div className="p-2 flex flex-col content-between" key={antipasto?.id}>
                            <h6 className="mb-3">{antipasto?.nome_piatto}</h6>
                            <div className="mb-3" >{antipasto?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {antipasto.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {antipasto.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}
                            </div>
                        </div>
                    )) : <h2>no antipasti</h2>}
                    {antipasti?.length !== 0 ? antipasti.filter(antipasto => antipasto.tipologia === 'Mare').map(antipasto => (
                        <div className="p-2 flex flex-col content-between" key={antipasto?.id}>
                            <h6 className="mb-3">{antipasto?.nome_piatto}</h6>
                            <div className="mb-3" >{antipasto?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {antipasto.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {antipasto.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}
                            </div>
                        </div>
                    )) : <h2>no antipasti</h2>}


                </div>
            </div>
            <div className="mainDish mb-20">
                <h3 className="capitalize text-2xl mb-10">primi piatti</h3>
                <div className="grid grid-cols-2 gap-y-8">
                    {primi?.length !== 0 ? primi.filter(primo => primo.tipologia !== 'Mare').map(primo => (
                        <div className="p-2 flex flex-col content-between" key={primo?.id}>
                            <h6 className="mb-3">{primo?.nome_piatto}</h6>
                            <div className="mb-3" >{primo?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {primo.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {primo.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no primi</h2>}
                    {primi?.length !== 0 ? primi.filter(primo => primo.tipologia === 'Mare').map(primo => (
                        <div className="p-2 flex flex-col content-between" key={primo?.id}>
                            <h6 className="mb-3">{primo?.nome_piatto}</h6>
                            <div className="mb-3" >{primo?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {primo.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {primo.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no primi</h2>}


                </div>
            </div>
            <div className="second mb-20">
                <h3 className="capitalize text-2xl mb-10">secondi piatti</h3>
                <div className="grid grid-cols-2 gap-y-8">
                    {secondi?.length !== 0 ? secondi.filter(secondo => secondo.tipologia !== 'Mare').map(secondo => (
                        <div className="p-2 flex flex-col content-between" key={secondo?.id}>
                            <h6 className="mb-3">{secondo?.nome_piatto}</h6>
                            <div className="mb-3" >{secondo?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {secondo.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {secondo.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no secondi</h2>}
                    {secondi?.length !== 0 ? secondi.filter(secondo => secondo.tipologia === 'Mare').map(secondo => (
                        <div className="p-2 flex flex-col content-between" key={secondo?.id}>
                            <h6 className="mb-3">{secondo?.nome_piatto}</h6>
                            <div className="mb-3" >{secondo?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {secondo.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {secondo.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no secondi</h2>}


                </div>
            </div>
            <div className="dessert mb-20">
                <h3 className="capitalize text-2xl mb-10">desserts</h3>
                <div className="grid grid-cols-2 gap-y-8">
                    {desserts?.length !== 0 ? desserts.filter(dessert => dessert.tipologia !== 'Mare').map(dessert => (
                        <div className="p-2 flex flex-col content-between" key={dessert?.id}>
                            <h6 className="mb-3">{dessert?.nome_piatto}</h6>
                            <div className="mb-3" >{dessert?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {dessert.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {dessert.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no desserts</h2>}
                    {desserts?.length !== 0 ? desserts.filter(dessert => dessert.tipologia === 'Mare').map(dessert => (
                        <div className="p-2 flex flex-col content-between" key={dessert?.id}>
                            <h6 className="mb-3">{dessert?.nome_piatto}</h6>
                            <div className="mb-3" >{dessert?.descrizione_piatto}</div>
                            <div className="w-3/5 m-auto flex justify-evenly mb-3 pb-6 border-b-2 border-double">
                                {dessert.glutenfree ? <GiFlour className="text-green-700" /> : <GiFlour className="text-red-700" />}
                                {dessert.vegano ? <GiLindenLeaf className="text-green-700" /> : <GiLindenLeaf className="text-red-700" />}

                            </div>
                        </div>
                    )) : <h2>no desserts</h2>}


                </div>
            </div>
            <div>** Puoi comunicarci qualsiasi intolleranza o modifica sul piatto scelto **</div>
        </div>
    )
}