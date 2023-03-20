import './App.css';

function App() {
    return (
        <div className="flex flex-row">
            <div>
                <img src="logo.png" alt="" className="h-16"></img>
            </div>
            <div className="h-16 py-4">
                <h1 className="font-averia-sans-libre hover:font-medium hover:subpixel-antialiased no-underline non-italic text-4xl text-current text-start tracking-tight uppercase whitespace-normal">
                    alpine sports club
                </h1>
            </div>
        </div>
    );
}

export default App;