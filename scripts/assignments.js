const addAssignmentButtonElement = document.querySelector('.add-assignments-btn')
const addAssignmentMenuElement = document.querySelector('.add-assignment-menu')
const addAssignmentCloseElement = document.querySelector('.add-assignment-menu-close-btn')

const assignmentNameElement = document.getElementById('assignment-name')
const assignmentSubjectElement = document.getElementById('subject-input')
const assignmentDateElement = document.getElementById('due-date-input')
const assignmentStatusElement = document.getElementById('status-input')

let assignments = [];

function showAssignmentsMenu() {
    addAssignmentMenuElement.classList.add('visible')
}

function closeAssignmentsMenu() {
    addAssignmentMenuElement.classList.remove('visible')
}

function addAssignment() {
    const assignmentName = assignmentNameElement.value
    const subject = assignmentSubjectElement.value
    const dueDate = assignmentDateElement.value
    const status = assignmentStatusElement.value

    const newAssignment = {
        assignmentName: assignmentName,
        subject: subject,
        dueDate: dueDate,
        status: status
    }

    assignments.push(newAssignment)
    closeAssignmentsMenu()
}
