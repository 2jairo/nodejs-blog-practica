import core from '@actions/core'
import nodemailer from 'nodemailer'

try {
    const mailReciever = core.getInput('mail_reciever')
    const linterResult = core.getInput('linter_result')
    const cypressResult = core.getInput('cypress_result')
    const badgeResult = core.getInput('badge_result')
    const deployResult = core.getInput('deploy_result')

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('SMTP_USER or SMTP_PASS is missing')
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            pass: process.env.SMTP_PASS,
            user: process.env.SMTP_USER,
        },
    })
    await transporter.verify()

    const repoName = process.env.GITHUB_REPOSITORY
    const workflowName = process.env.GITHUB_WORKFLOW

    const html = `
        <h2>GitHub Actions</h2>
        <b>The workflow ${workflowName} from repository ${repoName} ended with results:</b>
        <ul>
            <li><strong>linter:</strong> ${linterResult}</li>
            <li><strong>cypress:</strong> ${cypressResult}</li>
            <li><strong>add_badge:</strong> ${badgeResult}</li>
            <li><strong>deploy:</strong> ${deployResult}</li>
        </ul>
    `
    
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: mailReciever,
        subject: `Github workflows result from ${repoName}`,
        html
    })

    core.info(`Email sent: ${info.messageId}`)
} catch (err) {
    core.error(`Error: ${err.message} -> ${err.stack}`)
}
