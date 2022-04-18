import "../styles/article.css";

export default function Article({ title, course, author, thumbnail }) {

    return (
        <div className="article">
            <img src={ thumbnail } alt={ `Thumbnail for '${title}'` } />
            <p className="title">{ title }</p>
            <p className="subtitle">{ course } • { author }</p>
        </div>
    );

}