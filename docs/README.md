# 숫자 야구

## 구현할 기능 목록

### 1. 입력

- 서로 다른 3자리의 수 입력

  - 예외처리
    - [] 3자리 수가 아닌 경우 (더 적거나 큰 숫자 입력한 경우)
    - [] 숫자가 아닌 경우
    - [] 같은 숫자를 두 개 이상 입력한 경우

- 게임 종료 후 재시작 여부 입력
  - 예외처리
    - [] `1`, `2` 이외의 숫자/문자 입력한 경우

### 2. 상대방(컴퓨터)의 수 생성

- [] 1부터 9까지 서로 다른 임의의 수 3개로 이루어진 정답 생성

### 3. 입력 값과 상대방의 수 비교

- [] 볼에 해당하는 숫자와 스트라이크에 해당하는 숫자의 각 개수 계산
- [] 입력 값과 상대방의 수 같으면 게임 종료
- [] 입력 값과 상대방의 수 하나라도 다르면 힌트 출력 후 다시 사용자에게 입력 요구

### 4. 출력

- [] 게임 시작 문구 출력

  ```
  숫자 야구 게임을 시작합니다.
  ```

- [] 힌트 출력

  - 맞는 게 하나도 없는 경우

  ```
  낫싱
  ```

  - 정답인 경우

  ```
  3스트라이크
  3개의 숫자를 모두 맞히셨습니다! 게임 종료
  ```

  - 그 이외의 경우 볼, 스트라이크 개수 표시

  ```
    1볼 1스트라이크
  ```