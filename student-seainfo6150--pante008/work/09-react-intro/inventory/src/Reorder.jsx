import  './App.css'

function Reorder({onReorder}){
        return (
          <span className="btn-container">
            <button className="reorder-btn" onClick = {onReorder}> ReOrder</button>
          </span>
        );
}

export default Reorder;