import '.././styles/header.css'

export default function Header() {
    return (
        
        <div className='headerContainer'>
            <h1 className='headerTitle'>Shape-shifter chess</h1>
                  <p> The game consists of a red piece which can only move to occupied squares according to the conventional rules of chess <br></br>
When it takes a piece, it shifts into it.<br></br>
You have to capture all of the pieces on the board.<br></br>
Note: pieces can jump over other pieces like Knights.                  </p>
                </div>
    );
}
