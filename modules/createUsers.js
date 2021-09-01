const fs = require('fs')

const usersAdd = function(req, res) {

    const dataExp = fs.readFileSync('./data.json', 'utf8')

    let dataToFile;
    if (!dataExp) {
        console.log('no data available');
        let data = {}
        data.users = []

        const newUserName = req.body.name
        const newUserLastname = req.body.lastname
        const newUserEmail = req.body.email
        const newUserId = 100

        const newUser = {
            name: newUserName,
            lastname: newUserLastname,
            email: newUserEmail,
            id: newUserId
        }

        data.users.push(newUser)

        dataToFile = JSON.stringify(data)

        fs.writeFile('./data.json', dataToFile, function (err) {
            if (err) throw err;
            console.log('Intial User created');
        });

    } else {
        const data = JSON.parse(dataExp)

        if (!data.users) {
            console.log('no users are available')
            data.users = []

            const newUserName = req.body.name
            const newUserLastname = req.body.lastname
            const newUserEmail = req.body.email
            const newUserId = 100

            const newUser = {
                name: newUserName,
                lastname: newUserLastname,
                email: newUserEmail,
                id: newUserId
            }

            data.users.push(newUser)

            dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json', dataToFile, function (err) {
                if (err) throw err;
                console.log('Intial User created');
            });

        } else {
            console.log('users are available')
            let newID
            const minID = data.users[0].id

            for (let i = 0; i < data.users.length; i++) {
                if (data.users[i].id >= minID) {
                    newID = data.users[i].id + 100
                }
            }

            const newUserName = req.body.name
            const newUserLastname = req.body.lastname
            const newUserEmail = req.body.email
            const newUserId = newID

            const newUser = {
                name: newUserName,
                lastname: newUserLastname,
                email: newUserEmail,
                id: newUserId
            }

            data.users.push(newUser)

            dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json', dataToFile, function (err) {
                if (err) throw err;
                console.log('User added');
            });
        }
    }
}

module.exports = usersAdd;
