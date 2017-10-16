import moment from 'moment';
import md5 from 'js-md5';
import { API_PUBLIC, API_PRIVATE } from '../constants/ApiEndPoint';

export const FORMAT_TIMESTAMP = 'x';

export const convertDateToTimeStamp = function (date) {
  let dateConverted = moment(date).format(FORMAT_TIMESTAMP);
  return dateConverted;
}

export const creatHash = function (timeStamp) {
  let hash = "";
  hash = timeStamp + API_PRIVATE + API_PUBLIC  ; 
  hash = md5(hash);
  return hash;
}

