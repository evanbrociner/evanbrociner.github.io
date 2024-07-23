let chart;

function formatNumber(number) {
  return Number(number).toLocaleString(); // Format number with commas
}

function calculateMetrics() {
  const patientPool = document.getElementById("patientPool").value;
  const numPatients = document.getElementById("numPatients").value;
  const isHighRisk = document.getElementById("isHighRisk").value === "yes";

  if (!patientPool || !numPatients) {
    alert("Please fill in all fields");
    return;
  }

  let highRiskPMPM;
  let lowRiskPMPM;
  let operatingCostPerPatient;

  switch (patientPool) {
    case "medicaid":
      highRiskPMPM = 1500;
      lowRiskPMPM = 200;
      operatingCostPerPatient = 150;
      break;
    case "medicare":
      highRiskPMPM = 700;
      lowRiskPMPM = 200;
      operatingCostPerPatient = 200;
      break;
    case "commercial":
      highRiskPMPM = 1000;
      lowRiskPMPM = 400;
      operatingCostPerPatient = 250;
      break;
    default:
      alert("Invalid patient pool selected");
      return;
  }

  const PMPM = isHighRisk
    ? highRiskPMPM
    : lowRiskPMPM;
  const totalRevenue = numPatients * PMPM;
  const patientsPerClinician = 1500;
  const numClinicians = Math.ceil(numPatients / patientsPerClinician);
  const clinicianCostPerYear = 250000;
  const totalClinicianCost = numClinicians * clinicianCostPerYear;

  // Updated operating expenses
  const headcountCostPerMonth = 113750;
  const rentPerMonth = 240000;
  const emrTechPerMonth = 1000;
  const insurancePerMonth = 3333.33;
  const clinicBuildUpkeepPerMonth = 50000;

  const totalMonthlyOperatingCost = headcountCostPerMonth + rentPerMonth + emrTechPerMonth + insurancePerMonth + clinicBuildUpkeepPerMonth;
  const totalAnnualOperatingCost = totalMonthlyOperatingCost * 12;

  const totalOperatingCost = numPatients * operatingCostPerPatient + totalClinicianCost + totalMonthlyOperatingCost;
  const margin = totalRevenue - totalOperatingCost;

  // Determine the color for the margin based on its value
  const marginColor = margin >= 0
    ? "green"
    : "red";

  // Display results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <div class="card result-card">
      <div class="card-body">
        <h5 class="card-title">Metrics</h5>
        <div class="card-text">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Total Revenue</h6>
                  <p class="card-text">$${formatNumber(totalRevenue.toFixed(2))}</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">PMPM</h6>
                  <p class="card-text">$${formatNumber(PMPM.toFixed(2))}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Total Operating Cost</h6>
                  <p class="card-text">$${formatNumber(totalOperatingCost.toFixed(2))}</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Margin</h6>
                  <p class="card-text" style="color: ${marginColor};">$${formatNumber(margin.toFixed(2))}</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Number of Clinicians Needed</h6>
                  <p class="card-text">${numClinicians}</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Total Clinician Cost</h6>
                  <p class="card-text">$${formatNumber(totalClinicianCost.toFixed(2))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Create or update the bar chart
  const ctx = document.getElementById("metricsChart").getContext("2d");

  if (chart) {
    chart.destroy(); // Destroy the old chart instance if it exists
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Metrics"],
      datasets: [
        {
          label: "Total Revenue",
          data: [totalRevenue],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }, {
          label: "Total Operating Cost",
          data: [totalOperatingCost],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        }, {
          label: "Margin",
          data: [margin],
          backgroundColor: margin >= 0
            ? "rgba(75, 192, 75, 0.2)"
            : "rgba(255, 99, 132, 0.2)",
          borderColor: margin >= 0
            ? "rgba(75, 192, 75, 1)"
            : "rgba(255, 99, 132, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Create the operating costs table with collapsible rows
  const operatingCostsTable = document.getElementById("operatingCostsTable");
  operatingCostsTable.innerHTML = `
    <h5>Operating Costs Breakdown</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Category</th>
          <th>Monthly Cost</th>
          <th>Annual Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr class="collapsible">
          <td>Headcount (11 total staff)</td>
          <td>$${formatNumber(headcountCostPerMonth.toFixed(2))}</td>
          <td>$${formatNumber((headcountCostPerMonth * 12).toFixed(2))}</td>
        </tr>
        <tr class="collapsible-content">
          <td>Rent (6,000 sq ft clinic)</td>
          <td>$${formatNumber(rentPerMonth.toFixed(2))}</td>
          <td>$${formatNumber((rentPerMonth * 12).toFixed(2))}</td>
        </tr>
        <tr class="collapsible-content">
          <td>EMR/Tech</td>
          <td>$${formatNumber(emrTechPerMonth.toFixed(2))}</td>
          <td>$${formatNumber((emrTechPerMonth * 12).toFixed(2))}</td>
        </tr>
        <tr class="collapsible-content">
          <td>Insurance</td>
          <td>$${formatNumber(insurancePerMonth.toFixed(2))}</td>
          <td>$${formatNumber((insurancePerMonth * 12).toFixed(2))}</td>
        </tr>
        <tr class="collapsible-content">
          <td>Clinic Build/Upkeep / General</td>
          <td>$${formatNumber(clinicBuildUpkeepPerMonth.toFixed(2))}</td>
          <td>$${formatNumber((clinicBuildUpkeepPerMonth * 12).toFixed(2))}</td>
        </tr>
      </tbody>
    </table>
  `;

  // Add click event listener to collapsible rows
  const collapsibleRows = document.querySelectorAll(".collapsible");
  collapsibleRows.forEach(row => {
    row.addEventListener("click", () => {
      const content = row.nextElementSibling;
      content.style.display = content.style.display === "none"
        ? "table-row"
        : "none";
    });
  });
}

// Add event listener to the calculate button
document.getElementById("calculateButton").addEventListener("click", calculateMetrics);
