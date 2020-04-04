const courseField = document.querySelector("#course_name");
const ratingField = document.querySelector("#course_rating");
const addBtn = document.querySelector("#add_btn");
const courses = document.querySelector("#courses");

addBtn.addEventListener('click', () => {
    console.log("in clickEventHandler");
    const courseName = courseField.value;
    const courseRanking = ratingField.value;

    if (courseName.trim().length <= 0 || courseRanking <= 0 || courseRanking > 5) {
        let customAlert = document.createElement('ion-alert');
        customAlert.header = "Invalid Value";
        customAlert.message = "Course Name or Course Ranking not proper";
        customAlert.buttons = ['Ok'];
        document.body.append(customAlert);
        customAlert.present();
        return;
    }

    let courseLine = document.createElement('ion-label');
    courseLine.textContent = courseName + courseRanking;
    courses.appendChild(courseLine);
}
)
