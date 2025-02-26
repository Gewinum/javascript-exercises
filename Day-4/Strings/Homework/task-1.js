function rmHtmlTags(html) {
    if (typeof html !== 'string') {
        throw new TypeError('html must be a string');
    }
    const regex = /<\/?[^>]+(>|$)/g;
    return html.replace(regex, "");
}

console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'));