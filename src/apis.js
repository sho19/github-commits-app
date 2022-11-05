import { Octokit } from "@octokit/core";

export async function fetchCommits(setCommits,token) {
    try {
        const octokit = new Octokit({
            auth: token
        })
        const response = await octokit.request('GET /repos/sho19/github-commits-app/commits', {
            owner: 'sho19',
            repo: 'github-commits-app'
        })

        const commits = response.data

        if (Array.isArray(commits) && commits.length > 0){
            const commitDetails = commits.map(item=>{
                const commitMessage = item.commit.message
                const {date, name} = item.commit.committer
                return {commitMessage:commitMessage,date:date,name:name}
            })
            setCommits(commitDetails)
        }
    }
    catch (e) {
        throw e
    }
}