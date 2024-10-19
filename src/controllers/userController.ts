import { Request, Response } from "express";
import { IUser, IUserService } from "../inerfaces";

export class UserController {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }

    public addUser = async (req: Request, res: Response): Promise<void> => {
        const { name, email, phone } = req.body
        if(!name || !email || !phone) {
            res.status(400).json({
                success: false,
                messages: 'need minimum 3 required fields'
            });
        }
    
        try {
            const newUser: IUser = { name, email, phone}
            const user: IUser = await this.userService.addUser(newUser);
            if(user) {
                res.status(201).json({
                    user,
                    success: true
                });
            }else {
                res.status(500).json({
                    success: false,
                    message: 'failed to add user'
                });
            }
            
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An error occured while adding new User'
            });
        }
    }

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { name, email, phone } = req.body;
    
        if(!name || !email || !phone) {
            res.status(400).json({
                success: false,
                message: 'Failed to update user' 
            });
        }
        try {
            const updatedUser = await this.userService.updateUser(id, { name, phone, email });
            if(updatedUser) {
                res.status(200).json({
                    updatedUser,
                    success: true,
                });
            }else {
                res.status(400).json({
                    success: false,
                    messages: 'Failed to update user'
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An error occured while updating user'
            });
        }
    }

    public getUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getUsers()
    
            if(users) {
                res.render('users', {
                    users,
                })
            }else {
                res.status(400).json({
                    success: false,
                    message: 'Failed to fetch users'
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An error occured while fetching the list'
            });
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
    
        try {
            const deletedUser = await this.userService.deleteUser(id);
            if(deletedUser) {
                res.status(200).json({
                    deletedUser,
                    success: true
                });
            }else {
                res.status(400).json({
                    success: false,
                    message: 'Failed to delete user'
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An errore occured while deleting the user'
            });
        }
    }

    public getUser = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params;

        try {
            const user = await this.userService.getUser(id)
    
            if(user) {
                res.status(200).json({
                    user,
                    success: true
                })
            }else {
                res.status(400).json({
                    success: false,
                    message: 'Failed to fetch user'
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An error occured while fetching the user'
            });
        }
    }
}