'use client'
import React, { useEffect, useState } from 'react'
import Quizz from '@/components/Quizz'
import Navbar from '@/components/Navbar'
import ModalScore from '@/components/ModalScore'
import { getAllQuestion, userResponseAnswer, calculateScoreBoard } from '@/api/fetch'

const QuizzPage = ({ params }) => {
    const [userResponse, setUserResponse] = useState('')
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [scores, setScores] = useState();
    const [showScore, setShowScore] = useState(false)


    const handleResponseChange = (e) => {
        return setUserResponse(e.target.value)
    }


    const handleAnswerUser = async () => {
        try {
            console.log(currentQuestionIndex, 'current')
            // mendapatkan id dari questions -> questions[0].id example 
            const questionId = questions[currentQuestionIndex].id;
    
            const response = await userResponseAnswer({ questionId, userAnswer: userResponse });
            console.log(response, '<><><><>')
            if (response) {
                goToNextQuestion();
                setUserResponse('');
            }
        } catch (error) {
            console.log(error);
        }
    }
    

    const fetchQuestions = async () => {
        try {
            const response = await getAllQuestion(params.slug)
            setQuestions(response.data.Questions)
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(questions, '<><><><')

    useEffect(() => {
        fetchQuestions()
    }, [])

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const calculateScore = async () => {

        try {
            await handleAnswerUser()
            const response = await calculateScoreBoard(params.slug) // masukan id dari quiz_id
            if (response) { 
                setScores(response.data)
                setShowScore(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        return setShowScore(false)
    }
    return (
        <>
            <Navbar />
            {questions.length > 0 && (
                <Quizz
                    key={questions[currentQuestionIndex].id}
                    question={questions[currentQuestionIndex].questions_text}
                    currentQuestionIndex={currentQuestionIndex}
                    onComplete={calculateScore}
                    // onNextAndAnswer={goToNextQuestion}
                    submitAnswer={handleAnswerUser}
                    userResponse={userResponse}
                    handleResponseChange={handleResponseChange}
                    lists={questions}
                />
            )}
            {showScore && (
                <ModalScore score={scores} closeModal={handleClose}/>
            )}
        </>
    )
}

export default QuizzPage
