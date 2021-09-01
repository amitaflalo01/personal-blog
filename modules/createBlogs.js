
// modules/createBlogs.js

// load node fs module
const fs = require('fs')

const blogsAdd = function(req, res) {

    const dataExp = fs.readFileSync('./data.json', 'utf8')

    let dataToFile;
    if (!dataExp) {
        console.log('no data available')
        let data = {}
        data.blogs = []

        const newBlogTitle = req.body.title
        const newBlogAuthor = req.body.author
        const newBlogDate = req.body.date
        const newBlogId = 1

        const newBlog = {
            title: newBlogTitle,
            author: newBlogAuthor,
            date: newBlogDate,
            id: newBlogId
        }

        data.blogs.push(newBlog)

        dataToFile = JSON.stringify(data)

        fs.writeFile('./data.json', dataToFile, function (err) {
            if (err) throw err;
            console.log('Intial Blog created');
        });

    } else {
        const data = JSON.parse(dataExp)

        if (!data.blogs) {
            console.log('no blog are available')
            data.blogs = []

            const newBlogTitle = req.body.title
            const newBlogAuthor = req.body.author
            const newBlogDate = req.body.date
            const newBlogId = 1

            const newBlog = {
                title: newBlogTitle,
                author: newBlogAuthor,
                date: newBlogDate,
                id: newBlogId
            }

            data.blogs.push(newBlog)

            dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json', dataToFile, function (err) {
                if (err) throw err;
                console.log('Intial blog created');
            });

        } else {
            console.log('blogs are available');
            let newID
            let minID = data.blogs[0].id

            for (let i = 0; i < data.blogs.length; i++) {
                if (data.blogs[i].id >= minID) {
                    newID = data.blogs[i].id + 1
                }
            }

            const newBlogTitle = req.body.title
            const newBlogAuthor = req.body.author
            const newBlogDate = req.body.date
            const newBlogId = newID

            const newBlog = {
                title: newBlogTitle,
                author: newBlogAuthor,
                date: newBlogDate,
                id: newBlogId
            }

            data.blogs.push(newBlog)

            dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json', dataToFile, function (err) {
                if (err) throw err;
                console.log('blog added');
            });
        }
    }
}

module.exports = blogsAdd;
