import { Request, Response } from "express"

export const getTeamsList = (req: Request, res: Response) => {
    res.send('getTeamsList')
}
export const getTeamById = (req: Request, res: Response) => {
    res.send('getTeamById')
}
export const createTeam = (req: Request, res: Response) => {
    res.send('createTeam')
}
export const deleteTeam = (req: Request, res: Response) => {
    res.send('deleteTeam')
}
export const updeateTeam = (req: Request, res: Response) => {
    res.send('updeateTeam')
}