import styled from "styled-components";

const ContentSection = styled.div`
    margin: 40px;
`;

const ContentTitle = styled.h2`
    color :${(props) => (props.name === 'hello' ? 'red' : 'black')};
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;

function App() {
    return (
        <ContentSection>
            <ContentTitle name='hello'>hello world</ContentTitle>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium facere hic praesentium odio tempora debitis sint reprehenderit, facilis optio reiciendis sed explicabo voluptatem consequuntur quis fugiat animi. Corporis!</p>
        </ContentSection>
    );
}

export default App;