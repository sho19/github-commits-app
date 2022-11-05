import './UserCommits.css';
import { useEffect, useState } from 'react'
import { fetchCommits } from '../apis';

function UserCommits({ token, setCommits, commits }) {

    async function refershCommits() {
        console.log(commits)
        fetchCommits(setCommits,token);
    }

    useEffect(() => {
        const intervalId = setInterval(refershCommits, 30000);
        return () => clearInterval(intervalId);
    }, [])

    

    return (
        <div className="token-provider">
            
        </div>
    );
}

export default UserCommits;
