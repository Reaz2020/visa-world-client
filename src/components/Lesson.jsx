import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/Network';

const Lesson = () => {
    const { lesson_no } = useParams();
    const navigate = useNavigate();
    const { swedishData, user } = useContext(AuthContext);
    const [lessonData, setLessonData] = useState([]);
    const [selectedWord, setSelectedWord] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate('/login'); // Redirect to login if not authenticated
        } else if (swedishData) {
            const matchedLessons = swedishData.filter(lesson => lesson.Lesson_no === parseInt(lesson_no));
            setLessonData(matchedLessons);
        }
    }, [lesson_no, swedishData, user, navigate]);

    // Function to pronounce the word in Swedish
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'sv-SE'; // Set language to Swedish (sv-SE)
        speechSynthesis.speak(utterance);
    };

    // Open modal and pronounce the word
    const openModal = (wordData) => {
        setSelectedWord(wordData);
        document.getElementById('my_modal_4').showModal();
    };

    // Handle card click to speak the word
    const handleCardClick = (word) => {
        pronounceWord(word);
    };

    // Style cards based on difficulty
    const getCardStyle = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-green-100 border-green-400';
            case 'medium':
                return 'bg-yellow-100 border-yellow-400';
            case 'hard':
                return 'bg-red-100 border-red-400';
            default:
                return 'bg-gray-100 border-gray-400';
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Lesson {lesson_no}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessonData.map((lesson, index) => (
                    <div
                        key={index}
                        className={`p-4 border rounded-lg shadow-md ${getCardStyle(lesson.difficulty)}`}
                        onClick={() => handleCardClick(lesson.word)} // Add onClick to speak the word
                    >
                        <h2 className="text-2xl font-semibold">{lesson.word}</h2>
                        <p><strong>Meaning:</strong> {lesson.meaning}</p>
                        <p><strong>Pronunciation:</strong> {lesson.pronunciation}</p>
                        <p><strong>Part of Speech:</strong> {lesson.part_of_speech}</p>
                        
                        <button
                            className="mt-4 text-blue-500 hover:text-blue-700"
                            onClick={() => openModal(lesson)}
                        >
                            When to Say
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <button
                    className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg"
                    onClick={() => navigate('/start-learning')}
                >
                    Back to Lesson
                </button>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {selectedWord && (
                        <>
                            <h3 className="font-bold text-lg">{selectedWord.word}</h3>
                            <p className="py-2"><strong>Meaning:</strong> {selectedWord.meaning}</p>
                            <p className="py-2"><strong>When to Say:</strong> {selectedWord.when_to_say}</p>
                            <p className="py-2"><strong>Example:</strong> {selectedWord.example}</p>
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Lesson;
