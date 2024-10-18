import { User, UserInterface } from "./models/user";

export class UserManager {

    public async addUser(name: string, email: string, phone: number): Promise<UserInterface> {
        const user = new User({name, email, phone});
        return await user.save()
    }

    public async updateUser(id: string, name: string, email:string, phone: number): Promise<UserInterface| null> {
        const updatedUser = await User.findByIdAndUpdate(id, 
            { name, email, phone },
            { new: true}
        );

        return updatedUser
    }

    public async getUsers(): Promise<UserInterface[]> {
        return await User.find()
    }

    public async deleteUser(id: string): Promise<UserInterface | null> {
        return await User.findByIdAndDelete(id)
    }
}