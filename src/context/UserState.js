import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import clientAxios from "../config/axios";

const UserState = (props) => {

    const initilState = {
        usuarios: []
    }

    const [globalState, dispatch] = useReducer(UserReducer, initilState)

    const agregarUsuario = async (data) => {
        const { nombre, apellido, email } = data
        try {
            const res = await clientAxios.post('/users', {
                nombre,
                apellido,
                email
            });
            dispatch({
                type: "AGREGAR_USUARIO",
                payload: res.data,
            })
        } catch (error) {
            console.log("ERROR AL CARGAR USUARIO", error)
        }
    }

    const listarUsuarios = async () => {
        try {
            const res = await clientAxios.get('/users');
            dispatch({
                type: 'LISTAR_USUARIOS',
                payload: res.data,
            })
        } catch (error) {
            console.log("ERROR AL LEER USUARIOS", error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                usuarios: globalState.usuarios,
                listarUsuarios: listarUsuarios,
                agregarUsuario: agregarUsuario,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;