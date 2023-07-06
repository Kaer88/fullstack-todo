export default {
    addTopic: async (userData, topicName) => {
        const response = await fetch(`http://localhost:8080/topics/newtopic/${userData.userid}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userData.token}`,
            },
            body: JSON.stringify({ name: topicName })
        })
        return response.json()
    }
}