function readingStatus(books) {
    const nowTime = Date.now();

    for (let i = 0; i < books.length; i++) {
        const author = books[i].author;
        const title = books[i].title;
        const haveRead = books[i].haveRead;
        let daysAgo;
        if (!isNaN(books[i].dateOfRead)) {
            daysAgo = nowTime - books[i].dateOfRead.valueOf();
            daysAgo = daysAgo / 1000;
            daysAgo = daysAgo / 60;
            daysAgo = daysAgo / 60;
            daysAgo = daysAgo / 24;
            daysAgo = Math.floor(daysAgo);
        }

        if (haveRead) {
            console.log(author + " has read " + title + " book " + daysAgo + " days ago");
        } else {
            console.log(author + " hasn't read " + title + " book yet");
        }
    }
}
// author isn't the author. author is someone who read the book(wtf?)
let Books = [
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games',
        haveRead: false,
        dateOfRead: NaN
    }
];
readingStatus(Books);