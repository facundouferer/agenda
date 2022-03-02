import React, { useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function ListaUsuarios() {

    const context = useContext(UserContext)

    const { usuarios, listarUsuarios } = context

    useEffect(() => {
        const getResponse = async () => {
            await listarUsuarios()
            return
        }
        getResponse();
    }, [])

    return (
        <div>
            <h3>Usuarios</h3>
            {usuarios.map(user => (
                <div key={user.id}>
                    <hr />
                    <p>{user.id}) {user.nombre} {user.apellido} ({user.email})</p>
                </div>
            ))}
        </div>
    )
}
