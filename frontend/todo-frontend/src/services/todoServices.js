
export default {
    getAllTodos: async (userData) => {
        if (!userData.userid) return
        const response = await fetch(`http://localhost:8080/todo/getall/${userData.userid}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${userData.token}`,
                "Content-type": "application/json"

            }


        })
        return response.json()
    },

    sendTodo: async (formData, userData) => {
        const response = await fetch(`http://localhost:8080/todo/newtodo/${userData.userid}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${userData.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        return response.json()
    }

}