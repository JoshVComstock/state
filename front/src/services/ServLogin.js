
const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const setUsuarios = async () => {
    try {
        const response = await fetch(`${baseUrl}registeruser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const deleteusuarios = async (id, callback) => {
  
    const response = await fetch(`${baseUrl}registeruser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },

    })
    if (response.ok) {
        callback();
    }
};
export const updateusuarios = async (usersactual,callback) => {
  
    const response = await fetch(`${baseUrl}registeruser/${usersactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:usersactual.nombre,
        usuario:usersactual.usuario,
        apellido:usersactual.apellido,
        rol:usersactual.rol,
        password:usersactual.password,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postusuarios = async (nombre,usuario,apellido,rol,password,password_confirmation,callback) => {
    const response = await fetch(`http://127.0.0.1:8000/api/registeruser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre:nombre,
        usuario:usuario,
        apellido:apellido,
        rol:rol,
        password:password,
        password_confirmation:password_confirmation,
    })});
    if(response.ok){
      callback();
    }
  }