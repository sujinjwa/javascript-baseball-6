import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = Object.freeze('숫자를 입력해주세요 : ');
const RETRY_MESSAGE = Object.freeze(
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
);

const InputView = {
  async readNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    return numbers;
  },

  async readRetry() {
    const answer = await MissionUtils.Console.readLineAsync(RETRY_MESSAGE);

    return answer;
  },
};

export default InputView;
