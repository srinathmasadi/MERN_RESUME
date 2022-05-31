const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    email:{
        type:String
    },
    linkedIn:{
        type:String
    },
    github:{
        type:String
    },
    phone:{
        type:Number
    },
    education:[{
        studyProgram:{
            type:String
        },
        institution:{
            type:String
        },
        startDate:{
            type:Date
        },
        endDate:{
            type:Date
        }
    }],
    projects:[{
       projectName:{
           type:String
       },
       description:{
           type:String
       } 
    }],
    experience:[{
        position:{
            type:String
        },
        companyName:{
            type:String
        },
        startDateC:{
            type:Date
        },
        endDateC:{
            type:Date
        },
        responsibility:{
            type:String
        }
       
    }],
    skills:[
        
    ],
    achievements:[

    ],
    certificates:[{
        cName:{
            type:String
        },
        cDescription:{
            type:String
        }
    }],
    languages:[

    ],
    intrests:[

    ]

});

const Resume = new mongoose.model("Resume", resumeSchema);

module.exports = Resume;