class CreateCourseService {
    execute({ duration, educator = "Rodrigo Gonçalves", name }) {
        console.log(name, duration, educator);
    }
}
export default new CreateCourseService;
