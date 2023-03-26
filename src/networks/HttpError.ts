import MangoServerErrorResponse from "@/models/MangoServerError";
import { AxiosError } from "axios";

export default class HttpError {
  constructor(err: AxiosError<MangoServerErrorResponse>) {
    if (err) {
      const { response } = err;
      if (response) {
        const { data } = response;
        if (data) {
          const { statusCode, timestamp, message } = data;
          this.status = statusCode;
          this.timeStamp = timestamp;
          this.message = message;
        }
      }
    }
  }

  // Http status
  status = 1;

  // 오류 메시지
  message = "";

  // 오류 코드
  timeStamp = "";
}
