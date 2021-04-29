import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';

import QuestionCard from './components/QuestionCard';

import { QuestionState, Difficulty } from './API';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUerAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(questions);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		console.log(nextQuestion);

		setQuestions(newQuestions);
		setScore(0);
		setUerAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className='App'>
			<h1>React Quiz</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className='start' onClick={startTrivia}>
					Start
				</button>
			) : null}
			{!gameOver && <p className='score'>Score: {score}</p>}
			{loading && <p className='loading_question'>Loading Questions...</p>}
			{!loading && !gameOver && (
				<QuestionCard
					questionNumber={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className='next_question' onClick={nextQuestion}>
					Next Question
				</button>
			) : null}
		</div>
	);
};

export default App;
