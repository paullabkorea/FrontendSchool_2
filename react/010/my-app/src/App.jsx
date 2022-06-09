function App() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  return (
    <>
      {productList.products.map((item, idx) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
          }}
        >
            <h2>
              {idx + 1} {item.title}
            </h2>
            <span>{`${item.price}원`}</span>
        </li>
      ))}
    </>
  );
}

export default App;