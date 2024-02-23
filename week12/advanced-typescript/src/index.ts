import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
type userProfileType = z.infer<typeof userProfileSchema> 

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: userProfileType = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);


//interface User {
//    id: string;
//    name: string;
//    age: number;
//    email: string;
//    password: string;
//};
//
//interface ReadOnlyConfig {
//    readonly endPoint: string;
//    readonly apiKey: string;
//}
//
//interface Config {
//    endPoint: string;
//    apiKey: string;
//}
//
//const dbConfig: Readonly<Config> = {
//    endPoint: 'mydatabase.com',
//    apiKey: "this is an secret key"
//}
//
////type Users = { [key: string]: User }; 
//// ------ or -------
//type Users = Record<string, User>;
//
//const users: Users = {
//    "mohit": {
//        id: "akldj", name: "akldj", age: 23, email: "akld@aklsjd.com", password: "alaksdj" 
//    },
//    "khatri": {
//        id: "akl", name: "akldj", age: 23, email: "akld@aklsjd.com", password: "alaksdj" 
//    }
//}
//
////can't do this mofo
////dbConfig.apiKey = "hehe"
//
//type UpdateUserProfile = Partial<User>;
//
//function updateUser(user: UpdateUserProfile): void {
//    console.log('updated :)');
//    console.log(user);
//}
//
//updateUser({ name: "MOhit", age: 19});
//
////type UserProfile = Pick<User, 'name' | 'age'>;
////
////function sumOfAge(user1: UserProfile, user2: UserProfile) : number{
////    return user1.age + user2.age;
////}
////
////const age = sumOfAge({name: "Mohit",  age: 19}, {name: "Khatri", age: 20 });
////console.log(age);
//
//
//// ------ Exclude --------
////
//type Events = "scroll" | "click" | "mousemove";
//type ExcludeEvent = Exclude<Events, "scroll">;
//function handleEvent(event: ExcludeEvent) {
//    console.log(event); 
//}
//
//handleEvent("click");

