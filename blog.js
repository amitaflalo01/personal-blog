import express from 'express';
import http from 'http';
import * as createUsers from './modules/createUsers';
import * as createBlogs from './modules/createBlogs';
import * as removeItems from './modules/removeItems';
import queryBlogs from "./modules/queryBlogs";

const app = express();
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello, this is my blog');
});

app.post('/create-users', (req, res) => {
    createUsers(req, res);
    res.send('User has been added successfully.');
})

app.post('/create-blogs', (req, res) => {
    createBlogs(req, res);
    res.send('Blog has been added successfully.');
})

app.post('/remove-items', (req, res) => {
    removeItems(req, res);
    res.send('Item has been successfully removed.');
})

app.get('/blog/:year?/:month?/:day?', (req, res) => {

    const url = req.url
    const year = req.params.year
    const month = req.params.month
    const day = req.params.day

    const allBlogs = queryBlogs.queryAllBlogs();

    if (url == '/blog') {
        if (allBlogs.length == 0) {
            res.send('no post found')
        } else {
            res.send(allBlogs)
        }
    }

    else if (url == '/blog/'+year) {

        const blogsYear = queryBlogs.queryBlogsYear(allBlogs, year)

        if(blogsYear.length == 0) {
            res.send('no post found for this year')
        } else {
            res.send(blogsYear)
        }

    }

    else if (url == '/blog/'+year+'/'+month) {

        const blogsYearMonth = queryBlogs.queryBlogsYearMonth(allBlogs, year, month)

        if(blogsYearMonth.length == 0) {
            res.send('no post found for this year and month')
        } else {
            res.send(blogsYearMonth)
        }

    }

    else if (url == '/blog/'+year+'/'+month+'/'+day) {

        const blogsYearMonthDay = queryBlogs.queryBlogsYearMonthDay(allBlogs, year, month, day)

        if(blogsYearMonthDay.length == 0) {
            res.send('no post found for this year and month and day')
        } else {
            res.send(blogsYearMonthDay)
        }

    }

    else {
        res.status(404).send('Not Found')
    }

})

const blog = http.createServer(app);
blog.listen(process.env.PORT);