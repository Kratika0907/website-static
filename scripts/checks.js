const core = require('@actions/core');
const github = require('@actions/github');



async function run() {
    try {
        if (github.context.eventName === 'push') {
            const payload = JSON.stringify(github.context.payload, undefined, 2)
            console.log(payload)
            // const {number : prNumber ,  action : prAction} = pullRequestPayload;
            // const myToken = core.getInput('myToken');
            // const octokitConfig = {
            //     auth : myToken,
            //     userAgent : 'rds-website-static v1.0.0',
            //     baseUrl : 'https://api.github.com',
            //     log: {
            //         debug: () => {},
            //         info: () => {},
            //         warn: console.warn,
            //         error: console.error
            //       },
            // }
            // const octokit = github.getOctokit(octokitConfig)
            // let pullRequestConfig = {
            //     owner : 'Real-Dev-Squad',
            //     repo : 'website-static',
            //     pull_number: prNumber,
            //     mediaType: {
            //         format: "diff",
            //       },
            // }
            // const {data : prMetaData} = await octokit.pulls.get({owner : 'Real-Dev-Squad',
            //                                                     repo : 'website-static',
            //                                                     pull_number: prNumber,});
            // const {data : prData} = await octokit.pulls.get(pullRequestConfig);
            // const extractDataFlag = await checkData(prData);
            // if (extractDataFlag && prMetaData.mergeable) {
            //     // merge the PR 
            //     const mergeConfig = {
            //         commit_title : 'Details for a new user',
            //         commit_message : `Details added for user ${prMetaData.head.user.login}`,
            //         sha : prMetaData.head.sha,
            //         merge_method : 'rebase'
            //     }
            //     const  mergePRStatus = await octokit.pulls.put(mergeConfig);
            //     if (mergePRStatus.Headers.status === 200) {
            //         console.log('PR successfully merged')
            //     }
            // }
            // else {
            //     // comment and revert back // create a comment on issue the number is same as pr number 
            //     const prCommentConfig = {
            //         owner : 'Real-Dev-Squad',
            //         repo : 'website-static',
            //         issues_number: prNumber,
            //         body : 'This PR has certain issues and cannot be merged please check readme and faq and resubmit'
            //     }
            //     const commentPR = await octokit.issues.createComment(prCommentConfig);
            //     console.log(commentPR);
            // }


            
    } 
    } catch (error) {
      core.setFailed(error.message);
    }

}

run();



