const reducer = (globalState, action) => {

    switch (action.type) {

        case "LISTAR_USUARIOS":

            return {
                ...globalState,
                usuarios: action.payload
            }

        case "AGREGAR_USUARIO":
            return {
                ...globalState,
                usuarios: [...globalState.usuarios, action.payload]
            }

    }

}

export default reducer