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
    },

    deleteTodo: async (userData, todoId) => {
        if (!userData || !todoId) return
        const deleteResponse = await fetch(`http://localhost:8080/todo/delete/${userData.userid}/${todoId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${userData.token}`,
                "Content-type": "application/json"
            },
        });
        return deleteResponse.json();
    },

    updateTodo: async (userData, todoId, updateData) => {
        const updateResponse = await fetch(`http://localhost:8080/todo/patch/${userData.userid}/${todoId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${userData.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        } 
        );
        return await updateResponse.json();

    }

}