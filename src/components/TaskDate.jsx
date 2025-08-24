import moment from 'moment';

export const TaskDate = ({dateString}) => {
  
  const date = moment(dateString);
  const today = moment().startOf("day");
  const tomorrow = moment().add(1, "day").startOf("day");

  let color = '';
  let txtColor = '';
  let text = '';

  if(date.isSame(today)){
    color = 'bg-red-200'; 
    txtColor = 'text-red-900';
    text = 'Today';
  } else if (date.isSame(tomorrow)){
    color = 'bg-amber-200'; 
    txtColor = 'text-amber-900';
    text = 'Tomorrow';
  } else {
    color = 'bg-green-200';
    txtColor = 'text-green-900';
    if(date.hour() === 0 && date.minute() === 0){
      text = date.format("ddd, MMM D");
    } else {
      text = date.format("ddd, MMM D • HH:mm");
    }
  }

  return <p className={`p-1 pl-3 pr-3 ${color} ${txtColor} rounded mr-2 sm:mr-6`}>{text}</p>
}
