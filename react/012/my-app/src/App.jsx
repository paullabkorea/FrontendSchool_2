import styled from "styled-components";
import styles from "./app.module.css";
import Question from "./Components/Question";

const App = () => {
    return (
    <>
        <nav className={styles.box}>
            <ul>
            <li id="detail" className={styles.text}>
                상세정보
            </li>
            <li id="qa" className={styles.text}>
                Q&A
            </li>
            <li id="review" className={styles.text}>
                Review
            </li>
            </ul>
        </nav>
        <Question />
    </>
    );
};

export default App;