import { Request, Response } from "express"
import { db } from "../../../db"
import { teamTable } from "../../../db/teamSchema"
import { eq } from "drizzle-orm"

export const getTeamsList = async (req: Request, res: Response) => {
    try {
        const teams = await db.select().from(teamTable)

        res.status(200).send(teams)
    } catch (e) {
        res.status(500).send(e)

    }
}

export const getTeamById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const [team] = await db.select().from(teamTable).where(eq(teamTable.id, id))
        if (team)
            res.status(200).json(team)
        else
            res.status(404).send({ message: "Team was not find!" })
    } catch (e) {
        res.status(500).send(e)

    }
}

export const createTeam = async (req: Request, res: Response) => {
    try {
        const [createdTeam] = await db.insert(teamTable).values(req.body).returning()

        res.status(201).json(createdTeam)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const deleteTeam = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const [team] = await db.delete(teamTable).where(eq(teamTable.id, id)).returning()
        if (team)
            res.status(204).send()
        else
            res.status(404).send({ message: "Team was not find!" })
    } catch (e) {
        res.status(500).send(e)

    }
}

export const updeateTeam = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const [team] = await db.update(teamTable).set(req.body).where(eq(teamTable.id, id)).returning()
        if (team)
            res.status(200).json(team)
        else
            res.status(404).send({ message: "Team was not find!" })
    } catch (e) {
        res.status(500).send(e)

    }
}
