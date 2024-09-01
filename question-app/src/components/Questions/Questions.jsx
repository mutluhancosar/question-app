/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { data } from "../../questions";
import "./question.css";
import QuestionHeader from "../QuestionHeader/QuestionHeader";
import QuestionBody from "../QuestionBody/QuestionBody";
import Options from "../Options/Options";
import QuizAppText from "../QuizAppText/QuizAppText";
import ResultList from "../ResultList/ResultList";

function Questions() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [media, setMedia] = useState("");
  const [optionIsVisible, setOptionIsVisible] = useState(false);
  const [questionOption, setQuestionOption] = useState([]);
  const [answer, setAnswer] = useState(""); // kullanılıyor
  const [counter, setCounter] = useState(30);
  const [userResultList, setUserResultList] = useState([]);
  const [isQuizEnd, setIsQuizEnd] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);


  function emptyChecker(param1){
        if(param1.length > 0){
          return false;
        }else {
          return true;
        }
  }
  function optionToAnswer(option){
    option = option.split("");
    for(let i = 0; i < 3; i++){
      option.shift();
    }
    option = option.join("");
    return option;
  }

  function isEquals(param1 , param2) {
    if(param1 == param2){
      return true
    }else {
      return false
    }
  }

  const handleClickOption = (e) => {
    setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 100);
    
    let userAnswer = e.target.textContent;
    setUserAnswer(optionToAnswer(userAnswer));
  };

  useEffect(() => {
    if(index == data.length){
      setCounter(0);
      setIsQuizEnd(true);
    }else{
      setQuestion(data[index].question);
      setMedia(data[index].media);
      setQuestionOption(data[index].options);
      setAnswer(data[index].answer);
      setOptionIsVisible(false);
      setUserAnswer("");
      setTimeout(() => {
        setOptionIsVisible(true);
      }, 4000);  
      setCounter(30);
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 30000); 
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    setIsTrue(false);
    setUserResultList((prev) => [
      ...prev,{
        question:question,
        userAnswer: userAnswer,
        answer:answer,
        isTrue: isEquals(answer,userAnswer), 
        isEmpty: emptyChecker(userAnswer)
      }
    ])
  },[index])


  useEffect(() => {
    const timer = setInterval(() => setCounter((prev) => prev - 1), 1000);
    if (counter === 0) clearInterval(timer);
    return () => clearInterval(timer);
  }, [counter]);


  if (!isQuizEnd) {
    return (
      <>
        <QuizAppText />
        <QuestionHeader index={index} />
        <div className="question-area">
          <QuestionBody counter={counter} media={media} question={question} />
          <Options
            optionIsVisible={optionIsVisible}
            handleClickOption={handleClickOption}
            questionOption={questionOption}
          />
        </div>
      </>
    );
  } else {
    return <ResultList userResultList={userResultList} />; 
  }
}

export default Questions;