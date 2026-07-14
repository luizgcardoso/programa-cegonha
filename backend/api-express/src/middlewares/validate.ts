import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-error";

export function validate(schema: z.ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {

        
    try {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                errors: result.error.flatten()
            });
        }


    } catch(error){
    if(error instanceof z.ZodError){
        error.issues; 
        /* [
        {
            expected: 'string',
            code: 'invalid_type',
            path: [ 'username' ],
            message: 'Invalid input: expected string'
        },
        {
            expected: 'number',
            code: 'invalid_type',
            path: [ 'xp' ],
            message: 'Invalid input: expected number'
        }
        ] */
    }
        
        req.body = result.data;

        next();
    };
}