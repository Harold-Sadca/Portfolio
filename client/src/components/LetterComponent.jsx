import './lettercomponents.css';
import '../App.css';

const LetterComponent = ({ letterClass, strArray, idx }) => {
  return (
    <>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </>
  );
};

export default LetterComponent;
