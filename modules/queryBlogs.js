const fs = require('fs')

module.exports = {

    queryAllBlogs: function() {

        const allBlogs = []

        const dataExp = fs.readFileSync('./data.json', 'utf8')
        const data = JSON.parse(dataExp)

        for( let i = 0; i < data.blogs.length; i++) {
            const dataSet = {
                title: data.blogs[i].title,
                author: data.blogs[i].author,
                date: data.blogs[i].date
            }
            allBlogs.push(dataSet)
        }
        return allBlogs
    },

    queryBlogsYear: function(allBlogs, year) {
        const yearBlogs = []
        let blogDate;
        let parsedBlogDate;
        let parsedBlogDateYear;
        for (let i = 0; i < allBlogs.length; i++) {

            blogDate = allBlogs[i].date
            parsedBlogDate = new Date(Date.parse(blogDate))
            parsedBlogDateYear = parsedBlogDate.getFullYear()

            if (year === parsedBlogDateYear) {
                const dataset = {
                    title: allBlogs[i].title,
                    author: allBlogs[i].author,
                    date: blogDate
                };
                yearBlogs.push(dataset)
            }
        }
        return yearBlogs
    },

    queryBlogsYearMonth: function(allBlogs, year, month) {
        const yearMonthBlogs = [];
        let blogDate;
        let parsedBlogDate;
        let parsedBlogDateMonth;
        let parsedBlogDateYear;
        for (i = 0; i < allBlogs.length; i++) {

            blogDate = allBlogs[i].date
            parsedBlogDate = new Date(Date.parse(blogDate))
            parsedBlogDateMonth = (parsedBlogDate.getMonth() + 1)
            parsedBlogDateYear = parsedBlogDate.getFullYear()

            if (year == parsedBlogDateYear && month == parsedBlogDateMonth) {
                var dataset = {
                    title: allBlogs[i].title,
                    author: allBlogs[i].author,
                    date: blogDate
                }
                yearMonthBlogs.push(dataset)
            }
        }
        return yearMonthBlogs
    },

    queryBlogsYearMonthDay: function(allBlogs, year, month, day) {
        const yearMonthDayBlogs = [];
        let blogDate;
        let parsedBlogDate;
        let parsedBlogDateDay;
        let parsedBlogDateMonth;
        let parsedBlogDateYear;
        for (let i = 0; i < allBlogs.length; i++) {

            blogDate = allBlogs[i].date
            parsedBlogDate = new Date(Date.parse(blogDate))
            parsedBlogDateDay = parsedBlogDate.getDate()
            parsedBlogDateMonth = (parsedBlogDate.getMonth() + 1)
            parsedBlogDateYear = parsedBlogDate.getFullYear()

            if (year == parsedBlogDateYear && month == parsedBlogDateMonth && day == parsedBlogDateDay) {
                const dataset = {
                    title: allBlogs[i].title,
                    author: allBlogs[i].author,
                    date: blogDate
                };
                yearMonthDayBlogs.push(dataset)
            }
        }
        return yearMonthDayBlogs
    }
}
