function showCourses() {
    fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((data) => {
        const dataTable = document.getElementById("coursetable");

        data.forEach((course) => {
            const row = `<tr>
                <td>${course.courseId}</td>
                <td>${course.name}</td>
                <td>${course.trainer}</td>
                <td>${course.durationInWeeks}</td>
            </tr>`;
            dataTable.innerHTML += row;
        });
    }); // <- This was missing
}

function showEnrolledStudents(){
    fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable");

        students.forEach((student) => {
            const row = `<tr>
                <td>${student.name}</td>
                <td>${student.emailId}</td>
                <td>${student.courseName}</td>
            </tr>`;
            dataTable.innerHTML += row;
        });
    });

}