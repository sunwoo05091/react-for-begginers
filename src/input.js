import { useState } from "react";

function Input() {
  const [info, setInfo] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = info;

  const onChange = (e) => {
    const { value, name } = e.target; // value = 이벤트값 name 태그 name값
    console.log("value", name);
    setInfo({
      ...info, // info 객체 복사 {name, nickName}
      [name]: value, //name 키를 가진 값 value 설정
    });
  };

  const onReset = () => {
    setInfo({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      ></input>
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
      ></input>
      <button onClick={onReset}>초기화</button>
      <b>입력 값</b>
      {name}({nickName})
    </div>
  );
}

export default Input;
