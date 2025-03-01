class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }

    ucWords(str) {
        return str.split(" ").map(word => this.ucFirst(word)).join(" ");
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'