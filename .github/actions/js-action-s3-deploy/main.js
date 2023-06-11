const github = require("@actions/core")
const core = require("@actions/core")
const exec = require("@actions/exec")

const run = () => {
    // 1. get variables from action
    const bucket = core.getInput("bucket", {required: true})
    const bucketRegion = core.getInput("bucket-region", {required: true})
    const distFolder = core.getInput("dist-folder", {required: true})

    // 2. sync dist folder with s3 bucket
    // Note that this is possible to do coz github action runners ships with aws s3 client by default
    // Note that aws commands won't be run directly. aws first checks for configuration i.e access token before executing commands
    // AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    //@actions/github can be used to retrieve github context object or Octokit for github features

    // 3. get website url
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
    core.setOutput("website-url", websiteUrl) //this is equivalent to "cache='${{ inputs.caching }}'" >> $GITHUB_OUTPUT
}

run();