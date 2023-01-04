interface Course {
    name: string; 
    duration: number; 
    educator?: string;
}

class CreateCourseService {
    execute({duration, educator = "Rodrigo Gonçalves", name} : Course ){
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService;