function sortStudent(name, callback) {
    console.log(`Sorting ${name} into...`);
    console.log(callback());
}


sortStudent("Harry", () => "Gryffindor");
