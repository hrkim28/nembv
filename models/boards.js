const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    ut: { type: Date, default: Date.now },
    ip: { type: Date, default: ''},
    id: { type: String, default: ''},
    title: { type: String, default: '제목 없음', index: true},
    contents: { type: String, default: ''},
    cntView: { type: Number, default: 0},
    cntLike: { type: Number, default: 0},
    cmt_ids: [{  type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Board', boardSchema)