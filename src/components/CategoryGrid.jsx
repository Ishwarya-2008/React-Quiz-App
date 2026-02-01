import jsImg from "../images/js.png";
import javaImg from "../images/java.png";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import puzzleImg from "../images/puzzles.png";

function CategoryGrid({ onSelect }) {
    const subjects = ["javascript", "java", "html", "css", "puzzles"];
    const subImage = [jsImg, javaImg, htmlImg, cssImg, puzzleImg];


    return (
        <div className="category-grid">
            <h1 style={{ textAlign: "center" ,fontSize:"2.2rem"}}>Select a Category</h1>
            <div className="grid">
                {subjects.map((subject) => (
                    <div
                        key={subject}
                        className="card"
                        onClick={() => onSelect(subject)}>
                        <img
                            src={subImage[subjects.indexOf(subject)]}
                            alt={subject}
                            width="250px"
                            height="250px"
                        />
                        <h2>{subject.toUpperCase()}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryGrid;