import CreateCourseService from './CreateCourseService.js';
export function createCourse(request, response) {
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
