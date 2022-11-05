import './TokenProvider.css';
import { useState } from 'react'

function TokenProvider(props) {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input) {
            sessionStorage['input'] = input;
            props.setToken(input)
        }
    }

    return (
        <div className="token-provider">
            <form onSubmit={handleSubmit}>
                <label className='input-label'>Enter your input:
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default TokenProvider;
