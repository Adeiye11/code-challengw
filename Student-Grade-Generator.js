// Prompt the user to input student marks
const studentMarks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

// Check if input is within the valid range
if (studentMarks >= 0 && studentMarks <= 100) {
    let grade;

    // Determine the grade based on the marks
    if (studentMarks > 79) {
        grade = 'A';
    } else if (studentMarks >= 60) {
        grade = 'B';
    } else if (studentMarks >= 50) {
        grade = 'C';
    } else if (studentMarks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`Student grade: ${grade}`);
} else {
    console.log("Invalid input. Marks should be between 0 and 100.");
}