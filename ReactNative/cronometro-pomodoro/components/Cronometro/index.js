import { View, Text } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import styles from './styles';

import constants from './constants';
import { useCronometro } from '../hooks/useCronometro';
import { vibrate } from '../../utils';


const mintoSec = (minutes) => minutes * 60;
const padZero = (num) => num < 10 ? `0${num}` : num;

export default () => {
  const { isRunning, isWorking, setIsWorking } = useCronometro();
  const [remainingTime, setRemainingTime] = useState(mintoSec(constants.WORK_TIME));

  const interval = useRef(null);




  useEffect(() => {
    console.log('isRunning', isRunning);
    if (isRunning) {
      console.log('remainingTime', remainingTime);
      interval.current = setInterval(() => {
        setRemainingTime(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval.current);
    } else {
      clearInterval(interval.current);
    }
  }, [isRunning]);

  useEffect(() => {
    if (remainingTime <= 0) {
      vibrate();
      console.log('vibrate!!!!!');

      setRemainingTime(mintoSec(isWorking ? constants.BREAK_TIME : constants.WORK_TIME));
      setIsWorking(prev => !prev);
    }
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);

  return (
    <>
      <Text style={styles.title}>{isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso'}</Text>
      <View>
        <Text style={styles.timeText}>{padZero(minutes)}:{padZero(seconds)}</Text>
      </View>
    </>

  )
}