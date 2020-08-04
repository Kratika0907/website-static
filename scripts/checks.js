const core = require('@actions/core');
const github = require('@actions/github');


async function run() {
    try {
        if (github.context.eventName === 'push') {
            const pushPayload = github.context.payload
            console.log(pushPayload)
    } 
    } catch (error) {
      core.setFailed(error.message);
    }

}

run();

