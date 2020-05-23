'use strict';

function Title() {
    return (
        <div>
        <a href="index.html" style={{overflow:"hidden"}}><img src="../../images/NotingButNetLogoDone.png" alt="logo" style={{
            width:"300px",
            height:"233px",
            border:"0px",
            overflow:"hidden"}} className="center" id="logo"></img></a>    
        </div>  
    );
}

ReactDOM.render(
    <Title />,
    document.getElementById('root')
  );

export default Title;