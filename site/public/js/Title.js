'use strict';

function Title() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "a",
            { href: "index.html", style: { overflow: "hidden" } },
            React.createElement("img", { src: "../../images/NotingButNetLogoDone.png", alt: "logo", style: {
                    width: "300px",
                    height: "233px",
                    border: "0px",
                    overflow: "hidden" }, className: "center", id: "logo" })
        )
    );
}

ReactDOM.render(React.createElement(Title, null), document.getElementById('root'));

export default Title;