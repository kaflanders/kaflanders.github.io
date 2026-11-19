addCourse();

function calculateFinal() {

    const current = Number(document.getElementById("currentGrade").value);
    const weight = Number(document.getElementById("finalWeight").value);
    const desired = Number(document.getElementById("desiredGrade").value);

    const result = document.getElementById("finalResult");

    if (
        current < 0 || current > 100 ||
        weight <= 0 || weight > 100 ||
        desired < 0 || desired > 100
    ) {
        result.textContent = "Please enter valid percentages.";
        return;
    }

    const needed =
        (desired - current * (1 - weight / 100))
        / (weight / 100);

    result.textContent =
        `You need ${needed.toFixed(2)}% on your final exam.`;
}

function addCourse() {

    const container = document.getElementById("courseContainer");

    const div = document.createElement("div");
    div.className = "course";

    div.innerHTML = `
        <label>Course Name</label>
        <input type="text">

        <label>Credit Hours</label>
        <input type="number" class="credits">

        <label>Letter Grade</label>
        <select class="grade">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
        </select>
    `;

    container.appendChild(div);
}

function calculateGPA() {

    const grades = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        F: 0
    };

    let totalPoints = 0;
    let totalCredits = 0;

    document.querySelectorAll(".course").forEach(course => {

        const credits =
            Number(course.querySelector(".credits").value);

        const grade =
            course.querySelector(".grade").value;

        totalCredits += credits;
        totalPoints += credits * grades[grade];

    });

    const result = document.getElementById("gpaResult");

    if (totalCredits === 0) {
        result.textContent =
            "Please enter course information.";
        return;
    }

    result.textContent =
        `Estimated GPA: ${(totalPoints / totalCredits).toFixed(2)}`;
}
