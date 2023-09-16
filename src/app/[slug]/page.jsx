'use client'
import React, { useEffect, useState } from 'react'
import Quizz from '@/components/Quizz'
import Navbar from '@/components/Navbar'
import { getAllQuestion, userResponseAnswer } from '@/api/fetch'

const QuizzPage = ({ params }) => {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const fetchQuestions = async () => {
        try {
            const response = await getAllQuestion(params.slug)
            setQuestions(response.data.Questions)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    // API untuk user menjawab pertanyaan brdasarkan id : userResponseAnswer
    // 
    const calculateScore = () => {

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
                    onNext={goToNextQuestion}
                    onPrevious={goToPreviousQuestion}
                    lists={questions}
                />
            )}
        </>
    )
}

export default QuizzPage
