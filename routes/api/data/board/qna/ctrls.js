const mongoose = require('mongoose')
const Board = require('../../../../../models/boards')
const Comment = require('../../../../../models/comments')

const boardSchema = Board.schema.obj
const commentSchema = Comment.schema.obj

boardSchema.cmt_ids = [{ type: mongoose.Schema.Types.ObjectId, ref: 'QnAComment' }]
commentSchema.bd_id = { type: mongoose.Schema.Types.ObjectId, ref: 'QnA', index: true, required: true }

const QnA = mongoose.model('QnA', boardSchema)
const QnAComment = mongoose.model('QnAComment', commentSchema)