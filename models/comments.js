const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    bd_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', index: true},
    ut: { type: Date, default: Date.now},
    ip: { type: Date, default: ''},
    id: { type: String, default: ''},
    content: { type: String, default: ''},
    cntLike: { type: Number, default: 0}
})

module.exports = mongoose.model('Comment', commentSchema)