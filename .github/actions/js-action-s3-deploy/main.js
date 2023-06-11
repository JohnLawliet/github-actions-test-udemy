const github = require("@actions/core")
const core = require("@actions/core")
const exec = require("@actions/exec")

const run = () => {
    core.notice("Hello from javascript main actions")
}

run();