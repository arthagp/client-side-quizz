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

const userResponseAnswer = async ({ questionId, userAnswer }) => {
    try {
        const response = await instance.post(`/response-user/${questionId}`, { userAnswer })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const calculateScoreBoard = async (quizId) => {
    try {
        const response = await instance.get(`/quizzes/${quizId}/score`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

module.exports = { userRegister, userLogin, getAllQuiz, getAllQuestion, userResponseAnswer, calculateScoreBoard}