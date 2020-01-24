const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    author: { type: String, required: true },
    publishedOn: { type: Date, default: Date.now },
    published: { type: Boolean, default: true },
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
