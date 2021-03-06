import React, {useEffect, useState} from 'react'
import "../../styles.scss"
import "./Components/themes.css"
import StarsIcon from '@mui/icons-material/Stars'
import axios from 'axios'

export default function Navbar() {

    const [nombre, setNombre] = useState('')
    const rol = localStorage.getItem('rol')

    async function getNombre(){
        const {data} = await axios.get('http://localhost:5000/api/configuracion/getTemasEs'+`/${rol}`)
        setNombre(data.logo)
    }

    useEffect(() =>{
        getNombre()
    }, [])

    return (
        <div className='navbar'>
            <div className="navbar-wrapper">
                    <StarsIcon className="nav-icon"/>
                    <span className="logo">{nombre}</span>
            </div>
        </div>
    )
}
