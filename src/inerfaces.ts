export interface IUser {
    id?: string;
    name: string;
    email: string;
    phone: number;
}

export interface IUserService {
    addUser (user: IUser): Promise<IUser>;
    updateUser(id: string, user: IUser): Promise<IUser | null>;
    deleteUser(id: string): Promise<IUser | null>;
    getUsers(): Promise<IUser[]>
    getUser(id: string): Promise<IUser | null>;
}