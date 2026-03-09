const mongoose = require('mongoose');

const whiteboardNoteSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    course_id: {
      type: String,
      required: true,
      trim: true
    },
    slide_index: {
      type: Number,
      required: true,
      min: 1
    },
    snapshot: {
      objects: {
        type: [mongoose.Schema.Types.Mixed],
        default: []
      },
      stageScale: {
        type: Number,
        default: 0.75
      },
      stagePosition: {
        x: {
          type: Number,
          default: 60
        },
        y: {
          type: Number,
          default: 40
        }
      }
    }
  },
  {
    timestamps: true
  }
);

whiteboardNoteSchema.index(
  {
    user_id: 1,
    course_id: 1,
    slide_index: 1
  },
  {
    unique: true
  }
);

module.exports = mongoose.model('WhiteboardNote', whiteboardNoteSchema);
