import mongoose from "mongoose";

export async function connect(conexion) {
    try {
        console.log("<<< db conneting")

        await mongoose.connect("mongodb://localhost:27017/graphqlcourse", {
            useNewUrlParser: true
        })

        console.log("<<< db connected")
    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}
