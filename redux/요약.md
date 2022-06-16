* single source of Truth
* 데이터를 state에 쓰고 싶다 : dispatch, reducer로만 가능
* 데이터를 state가져갈 때에도 : store.getState()로!
    * 콘솔로 찍어보세요!
* 구독을 통해서 변경된 것을 모두에게 전파!
    ```js
    store.subscribe(함수이름);
    ```
* 예기치 않게 변경되는 것을 X
* 철저하게 통제
* 시점을 돌아가는 것이 가능, 시간여행 가능!