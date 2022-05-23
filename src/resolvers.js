import { tasks } from "./sample"
import User from "./models/user"
import user from "./models/user"

export const resolvers = {
    Query: {
        hello: () => {
            return 'hello world with graphql'
        },
        greet(root, args, ctx) {
            console.log(ctx)
            console.log(args)
            return `hello ${args.name}`
        },
        tasks: task => {
            return tasks
        },
        async users() {
            return await User.find()
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length
            tasks.push(input) 
            return input
        },
        async createUser(_, {userinput}) {
            const newUser = new User(userinput)
            await newUser.save()
            console.log(newUser)
            return newUser
        },
        async deleteUser(_, {_id}){
           return await user.findByIdAndDelete(_id)
        }
    }
}