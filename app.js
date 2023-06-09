const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.json({message:"What are you doing here... "})
})

app.post('/message-bot', (req, res) => {
	let {name, email} = req.body
    try {
        let url = "https://hooks.slack.com/YOUR_CHANNEL_URL"

        axios.post(url, {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: `Name: *${name}*\n\n Email: *${email}*`,
					},
				},
			],
		})
        .then(() => {
			res.json({message : 'Form submitted'})
		})
		.catch(() => {
			res.json({message : 'Failed !'})
		})

    } catch (error) {
        console.log("err")
        console.error(error);
    }
});

app.listen(4060, () => {
	console.log('Slack Apps listening on port 4060!')
})