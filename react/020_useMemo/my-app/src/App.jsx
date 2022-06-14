import { useState, useRef, useMemo } from "react";

const App = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  // 문제가 되는 코드
  // 문제1 : inputname창에서 글자 1개당 실행
  // 문제2 : inputid 창에서 글자 1개당 실행
	const getNum = (li) => {
	  console.log("렌더링");
	  return li.length;
	};

  const n = useMemo(() => getNum(userInfo), [userInfo]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // userInfo.push({});
    const newInfo = [...userInfo, { name: name, id: id }];
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-3");
  };

  const handleInputName = (e) => {
    setName(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-2");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </>
  );
};

export default App;