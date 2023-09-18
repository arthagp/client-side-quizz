import React from 'react'
import AddQuestion from '@/components/AddQuestion'
import Navbar from '@/components/Navbar'

const AddQuestionsPage = ({ params }) => {
    console.log(params.slug)
    return (
        <>
            <Navbar />
            <AddQuestion quizId={params.slug} />
        </>
    )
}

export default AddQuestionsPage