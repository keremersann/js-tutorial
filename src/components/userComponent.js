// default olmadıgı için ayrı ayrı süslü parantezde import ettik
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js"
// "default" keywordu sayesinde direk userService ve User classını import ettik
import User from "../modals/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger = new ElasticLogger()
let userService = new UserService(logger)


let user1 = new User(1,"İpek", 24)
let user2 = new User(2,"Salim", 12)

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))