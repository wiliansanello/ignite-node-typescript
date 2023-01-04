import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

 export function createCourse(request: Request, response: Response){
    CreateCourseService.execute({
      name: "React",
      duration: 2,
      educator: "Diego Fernandes"
   });

   CreateCourseService.execute({
      name: "NodeJS",
      duration: 8,      
   });

    return response.send();
 }