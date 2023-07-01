export default {

    register: async (formData) => {
        if (formData.password != formData.passwordAgain) throw new Error("Password missmatch");
        const registerResult = await fetch("http://localhost:8080/auth/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log(registerResult)
        return registerResult
    },

    login: async (formData) => {

        if (formData.email === "" || formData.password === "") return
        const loginResponse = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (loginResponse.ok) {
            return loginResponse.json()
        }




    }

}