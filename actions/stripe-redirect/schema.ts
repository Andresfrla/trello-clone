import { z } from "zod"

export const StripeRedirect = z.object({
    id: z.string(),
    boardId: z.string(),
})