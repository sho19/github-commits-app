import './UserCommits.css';
import { useEffect } from 'react'
import { fetchCommits } from '../apis';
import moment from "moment";

function UserCommits({ token, setCommits, commits }) {

    async function refershCommits() {
        console.log(commits)
        fetchCommits(setCommits, token);
    }

    useEffect(() => {
        const intervalId = setInterval(refershCommits, 30000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="commits">
            {commits.map((commit,index) => {
                return (
                    <div key={index} className="commit-container">
                        <div className="commit-message">
                            {commit.commitMessage}
                        </div>
                        <div className='commit-attributes-wrapper'>
                            <div className="commit-name">
                                {commit.name}
                            </div>
                            <div className="commit-date">
                                {moment(commit.date, "YYYYMMDD h:mm:ss").fromNow()}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default UserCommits;
