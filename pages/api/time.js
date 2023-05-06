// https://dororongju.tistory.com/116 날짜,시간 관련 Date()사용법
export default function Time(요청, 응답) {
  var today = new Date();
  return 응답.status(200).json(today.toLocaleString());
}
