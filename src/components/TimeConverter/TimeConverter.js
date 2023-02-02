import styles from './TimeConverter.module.scss';

const TimeConverter = (props) => {
  const convertMs = (miliseconds) => {
    let ms = Math.floor(miliseconds % 1000);
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    //hours = hours < 10 ? '0' + hours : hours;
    //minutes = minutes < 10 ? '0' + minutes : minutes;
    //seconds = seconds < 10 ? '0' + seconds : seconds;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(miliseconds).padStart(3, '0')

    return `${hours}:${minutes}:${seconds}.${ms}`;
    // return hours + ':' + minutes + ':' + seconds + '.' + ms;
    //return `${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}.${ms.padStart(3,'0')}`;
  };

  return <div className={styles.timeConverter}>{convertMs(props.time)}</div>;
};

export default TimeConverter;
