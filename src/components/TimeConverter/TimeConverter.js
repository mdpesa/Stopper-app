import styles from './TimeConverter.module.scss';

const TimeConverter = (props) => {
  const convertMs = (miliseconds) => {
    let milliseconds = Math.floor(miliseconds % 1000);
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };

  return <div className={styles.timeConverter}>{convertMs(props.time)}</div>;
};

export default TimeConverter;
