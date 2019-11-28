import axios from "axios";
import { getErrorMessages } from './errorMessageParser'
import _ from 'lodash'

export const request = async (config) => {

  let requestData = {
    ...config
  };

  let response;
  try {
    response = await axios.request(requestData);
  } catch (error) {
    return createResponseFromAxiosError(error);
  }

  return createResponseFromAxiosResponse(response);
};

function createResponseFromAxiosError(error) {
  // handle  error
  let status, message, data;

  if (error.response) {
    status = error.response.status;
    message = error.message;
    data = error.response.data;

  } else if (error.request) {
    status = 0;
    message = error.message;

  } else {
    status = -1;
    message = error.message;
  }

  if (data.statusCode === 412) {
    data.message = getErrorMessages(data.message)
  }

  if(data.message && _.has(data.message,'message')){
    data.message = data.message.message
  }

  return { success: false, data, error: { status, message } };
}

function createResponseFromAxiosResponse(response) {
  return { success: true, data: response.data };
}
