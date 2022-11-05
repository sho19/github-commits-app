import './TokenProvider.css';
import {useState} from 'react'

function TokenProvider() {
    const [token, setToken] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${token}`)
    }

    return (
        <div className="TokenProvider">
            <form onSubmit={handleSubmit}>
                <label className='input-label'>Enter your token:
                    <input
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default TokenProvider;
