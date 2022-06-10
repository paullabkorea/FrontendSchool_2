import styled from "styled-components";

const AA = styled.div`
    margin: 40px;
`;

const BB = styled.h2`
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;

const UnicornAfter = styled.div`
    &:after {
    content: " ??";
}`

function App() {
    return (
        <AA>
            <BB>hello world</BB>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium facere hic praesentium odio tempora debitis sint reprehenderit, facilis optio reiciendis sed explicabo voluptatem consequuntur quis fugiat animi. Corporis!</p>
        </AA>
    );
}

export default App;