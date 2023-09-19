// Sample patient data
const patientData = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  medicalHistory: ["Hypertension", "Diabetes"],
  testReports: ["Blood Test", "X-Ray"],
};

// Function to display patient information
function displayPatientInfo() {
  const patientInfo = document.getElementById("patient-info");
  patientInfo.innerHTML = `
        <p><strong>Name:</strong> ${patientData.firstName} ${patientData.lastName}</p>
        <p><strong>Age:</strong> ${patientData.age}</p>
    `;
}

// Function to display medical history
function displayMedicalHistory() {
  const historyList = document.getElementById("history-list");
  patientData.medicalHistory.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

// Function to display test reports
function displayTestReports() {
  const reportsList = document.getElementById("reports-list");
  patientData.testReports.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    reportsList.appendChild(listItem);
  });
}

// Call functions to populate data
displayPatientInfo();
displayMedicalHistory();
displayTestReports();
