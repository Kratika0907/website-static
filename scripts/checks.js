const core = require('@actions/core');
const github = require('@actions/github');

try {
    if (github.context.eventName === 'pull_request') {
        const pushPayload = github.context.payload
        console.log(pushPayload)
} 
} catch (error) {
  core.setFailed(error.message);
}