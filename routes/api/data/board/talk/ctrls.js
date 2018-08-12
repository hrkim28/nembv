const mongoose = require('mongoose')
const Board = require('../../../../../models/boards')
const Comment = require('../../../../../models/comments')

const boardSchema = Board.schema.obj
const commentSchema = Comment.schema.obj

boardSchema.cmt_ids = [{ type: mongoose.Schema.Types.ObjectId, ref: 'TalkComment' }]
commentSchema.bd_id = { type: mongoose.Schema.Types.ObjectId, ref: 'Talk', index: true, required: true }

const Talk = mongoose.model('Talk', boardSchema)
const TalkComment = mongoose.model('TalkComment', commentSchema)

exports.list 