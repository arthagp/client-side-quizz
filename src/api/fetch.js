import { instance } from "./axios"

const userRegister = async (username, password) => {
    try {
        const response = await instance.post(`/register`, { username, password })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const userLogin = async (username, password) => {
    try {
        const response = await instance.post(`/login`, { username, password })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const getAllQuiz = async () => {
    try {
        const response = await instance.get('/all-quiz')
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const getAllQuestion = async (quizId) => {
    try {
        const response = await instance.get(`/get-detail/${quizId}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

module.exports = { userRegister, userLogin, getAllQuiz, getAllQuestion }