import { User } from "./models/user";
import { IUser, IUserService } from "./inerfaces";

export class UserServices implements IUserService {

    public async addUser(user: IUser): Promise<IUser> {
        const newUser = new User(user);
        return await newUser.save()
    }

    public async updateUser(id: string, user: IUser): Promise<IUser| null> {
        return await User.findByIdAndUpdate(id, user,
            { new: true}
        );
    }

    public async getUsers(): Promise<IUser[]> {
        return await User.find()
    }

    public async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id)
    }

    public async getUser(id: string): Promise<IUser | null> {
        return await User.findById(id)
    }
}