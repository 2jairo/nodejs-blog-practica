import fs from "fs"

const getOutcome = () => {
    console.log(process.argv[2])
    if(process.argv[2] === 'success') { // node script.js <arg2>
        return 'success-green'
    } else if(process.argv[2] === 'failure') {
        return 'failure-red'
    } else if(process.argv[2] === 'skipped') {
        return 'skipped-yellow'
    } else {
        return 'cancelled-yellow'
    }
}

const readme = "README.md"
const marker = "<!--BADGE_CYPRESS-WORKFLOW-OUTCOME-->"
const outcome = `![outcome](https://img.shields.io/badge/test-${getOutcome()})`

const content = fs.readFileSync(readme).toString()
const lines = content.split("\n")
const badgeIdx = lines.findIndex(line => line.includes(marker))

lines[badgeIdx +1] = outcome 
fs.writeFileSync(readme, lines.join("\n"))