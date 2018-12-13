import { combineReducers } from 'redux';
import {QUESTION_ANSWER} from "./actions";
import {CHANGE_QUESTION} from "./actions"
import {SUBMIT} from "./actions";
import {INIT_QUESTIONS} from "./actions";

function score(state = 0, action = {}) {
    switch(action.type){
        case SUBMIT:
            return action.payload.questions.map((question, i) => {
                return question.answer === question.userAnswer
            }).filter((s) => {return s}).length
        default:
            return state;
    }
}

function finished(state = false, action = {}){
    switch(action.type){
        case SUBMIT:
            return true;
        case INIT_QUESTIONS:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}){
    switch(action.type){
        case CHANGE_QUESTION:
            return action.payload.index;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}){
    switch(action.type){
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        case INIT_QUESTIONS:
            return action.payload.questions;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;