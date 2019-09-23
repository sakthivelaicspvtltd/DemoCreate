const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aics-databse', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const user = mongoose.model('user', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: Number,
    }, 
    fromDate: {
        type: Date,
        required: true,
    },
    toDate: {
        type: Date,
        required: true

    },
    leaveType: {
        type: String
    },
    reason: {
        type: String
    },
    CreateDate: {
        type: Date
    },
    status: {
        type: String
    },
})



