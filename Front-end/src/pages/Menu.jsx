import { useEffect, useState } from "react"

export default function Menu() {
    const [menu, setMenu] = useState([])
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
        } catch (err) {
            setError(err.message)
        }

    }
    useEffect(() => {
        fetchData(urlIndexMenu)
    }, [])
    console.log(menu);


    return (
        <div className="bodyMenu">
            <h1>il menu propone</h1>
            <div className="entrè">
                <h3>antipasti</h3>
                <h6>nome antipasto</h6>
                <div>descrizione antipasto</div>
            </div>
            <div className="mainDish">
                <h3>primi</h3>
                <h6>nome antipasto</h6>
                <div>descrizione antipasto</div>
            </div>
            <div className="second">
                <h3>secondi</h3>
                <h6>nome antipasto</h6>
                <div>descrizione antipasto</div>
            </div>
            <div className="dessert">
                <h3>dessert</h3>
                <h6>nome antipasto</h6>
                <div>descrizione antipasto</div>
            </div>
        </div>
    )
}