import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function FormUsuario() {

    const ctx = useContext(UserContext)

    const { agregarUsuario } = ctx

    const [usuario, setUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
    })

    const handleChange = (e) => {
        setUser({
            ...usuario,
            [e.target.name]: e.target.value,
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        agregarUsuario(usuario);
    }


    return (
        <>
            <h3>Nuevo Usuario</h3>
            <form onSubmit={(event) => { enviarDatos(event) }}>
                <input type="text" name='nombre' placeholder="Nombre" onChange={(event) => { handleChange(event) }} />
                <input type="text" name='apellido' placeholder="Apellido" onChange={(event) => { handleChange(event) }} />
                <input type="email" name='email' placeholder="Email" onChange={(event) => { handleChange(event) }} />
                <button>Guardar</button>
            </form>
        </>
    )
}
