import https from 'https'
import chalk from 'chalk'

const getjoke = () => {
    const url='https://official-joke-api.appspot.com/random_joke'

    //get method is used to get data from api
    https.get(url, (response) => {
        //jo call back function h uske andar ek parameter milta h jo incoming medssage hota h
        let data = ""
        response.on('data', (chunk) => {
            data += chunk
        })
        response.on('end', () => {
            const joke = JSON.parse(data)
            console.log(`Here is a random ${joke.type} joke:`)
            console.log(chalk.red(`${joke.setup}`))
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
        })
        response.on(`error`,(err)=>{
            console.log(`Error fetching the joke,${err.message}`)

        })
    })
}
getjoke()


