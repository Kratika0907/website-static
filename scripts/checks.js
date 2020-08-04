const core = require('@actions/core');
const github = require('@actions/github');


async function run() {
    try {
        if (github.context.eventName === 'push') {
            const pushPayload = github.context.payload
            core.info(pushPayload)
    } 
    } catch (error) {
      core.setFailed(error.message);
    }

}

run();

