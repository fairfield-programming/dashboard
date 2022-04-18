import '../styles/topbar.css';
  
export default function Topbar() {

    return (
        <div className="topbar">
            <header>
                <div className='left'>
                    <a href="https://fairfieldprogramming.org/learn" >
                        Learning
                    </a>
                    <a href="https://fairfieldprogramming.org/questions" >
                        Questions
                    </a>
                </div>
                <div className='center'>
                    <a href="https://fairfieldprogramming.org/" title="Home">
                        <img
                            alt="FPA Logo"
                            height={50}
                            src="/logo.svg"
                        />
                    </a>
                </div>
                <div className='right'>
                    <a href="https://fairfieldprogramming.org/about" >
                        About
                    </a>
                    <a href="https://fairfieldprogramming.org/login" >
                        Log In
                    </a>
                </div>
            </header>
        </div>
    );

}