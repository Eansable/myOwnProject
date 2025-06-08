import { Router } from "express";
import { createTeam, deleteTeam, getTeamById, getTeamsList, updeateTeam } from "./teamController";

const router = Router()

router.get('/', getTeamsList)

router.get('/:id', getTeamById)

router.post('/', createTeam)

router.delete('/:id', deleteTeam)

router.put('/:id', updeateTeam)

export default router