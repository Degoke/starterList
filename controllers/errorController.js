module.exports = {
    resNoResourceFound: (req,res)=>{
        let errorObj = {
            status: 404,
            message: "Not Found",
            data: null
        };
        res.status(404).json(errorObj);
    },

    resInternalServerError: (error,req,res,next)=>{
        console.log(`ERROR occurred: ${error.stack}`);
        let errorObject;
        if(error){
            errorObject = {
                status: 500,
                message: error.message,
                data: null
            };
        } else {
            errorObject = {
                status: 500,
                message: "Unknown Error.",
                data: null
            };
        }
        res.status(500).json(errorObject);
    }
};