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

const deleteScoreBoard = async (quizId) => {
    try {
        const response = await instance.delete(`/scoreboard/${quizId}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const getAlreadyScoreBoard = async (quizId) => {
    try {
        const response = await instance.get(`/scoreboard/${quizId}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const deleteUserResponseAnswer = async (quizId) => {
    try {
        const response = await instance.delete(`/response-user/${quizId}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const getAllQuizByUserId = async () => {
    try {
        const response = await instance.get(`my-quizz`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}


const createQuizz = async (title, description) => {
    try {
        const response = await instance.post(`/create-quiz`, { title, description })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const deleteQuizById = async (quizId) => {
    try {
        const response = await instance.delete(`/delete-quiz/${quizId}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const editQuizId = async (quizId, title, description) => {
    try {
        const response = await instance.put(`/edit-quiz/${quizId}`, { title, description })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

// Question
const addQuestionsByQuizId = async (quizId, questionText) => {
    try {
        const response = await instance.post(`/add-question/${quizId}`, { questionText })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const editQuestion = async (questionId, questionText) => {
    try {
        const response = await instance.put(`/edit-question/${questionId}`, { questionText })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

// 

// answer
const editAnswer = async (answerId, answerText) => {
    try {
        const response = await instance.put(`/questions/${answerId}/answers`, { answerText })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

const addAnswerQuestion = async (questionId, answerText) => {
    try {
        const response = await instance.post(`/questions/${questionId}/answers`, { answerText })
    } catch (error) {
        throw new Error(error.response.data.message || 'Something Went Wrong')
    }
}

// 


module.exports = { userRegister, userLogin, getAllQuiz, getAllQuestion, userResponseAnswer, calculateScoreBoard, deleteScoreBoard, getAlreadyScoreBoard, deleteUserResponseAnswer, getAllQuizByUserId, addQuestionsByQuizId, addAnswerQuestion, createQuizz, deleteQuizById, editQuizId, editQuestion, editAnswer }