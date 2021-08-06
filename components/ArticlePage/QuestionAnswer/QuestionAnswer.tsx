import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './QuestionAnswer.module.scss';
import { questionAnswerIProps } from './types';

const QuestionAnswer = (props: questionAnswerIProps) => {
  return (
    <Container className={styles.questionAnswer}>
      <p className={styles.question}>{props.question}</p>
      <p className={styles.answer}>{props.answer}</p>
    </Container>
  );
};

export default QuestionAnswer;
