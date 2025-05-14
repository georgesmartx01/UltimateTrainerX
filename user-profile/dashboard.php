<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: ../user-login.php"); // Redirect to login if not logged in
    exit;
}

$username = $_SESSION['username'];

// Include your database connection file
include '../connectdb.php';

// Fetch user stats (start and end date if present)
$start = $_GET['start'] ?? '';
$end = $_GET['end'] ?? '';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cognitive Training Dashboard</title>

    <!-- Include your CSS files -->
    <link rel="stylesheet" href="../CSS/navbar.css" />
    <link rel="stylesheet" href="../CSS/dashboard.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>
    <!-- Include the navigation bar -->
    <?php include "../navbar.php"; ?>

    <div class="dashboard-container">
        <header>
            <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
            <a href="../logout.php" class="logout-button"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
        </header>

        <main>
            <section class="stats-section">
                <h2>Your Training Progress</h2>
                <form id="date-range-form" class="date-range-form">
                    <label for="start-date">Start Date:</label>
                    <input type="date" id="start-date" name="start" value="<?php echo $start; ?>" />
                    <label for="end-date">End Date:</label>
                    <input type="date" id="end-date" name="end" value="<?php echo $end; ?>" />
                    <button type="submit" class="btn-filter"><i class="fa-solid fa-filter"></i> Filter</button>
                </form>

                <div class="charts">
                    <canvas id="accuracyChart" width="400" height="200"></canvas>
                    <canvas id="reactionTimeChart" width="400" height="200"></canvas>
                    <canvas id="moodChart" width="400" height="200"></canvas>
                    <canvas id="focusChart" width="400" height="200"></canvas>
                </div>
            </section>

            <section id="user-stats">
                <h3>Your Stats</h3>
                <div>
                    <p>Streak: <span id="streak"></span></p>
                    <p>Sessions Completed: <span id="sessions"></span></p>
                    <p>Average Accuracy: <span id="average-accuracy"></span></p>
                </div>
            </section>
        </main>
    </div>

    <script>
        // Function to fetch user stats from the backend
        function fetchStats(startDate = '', endDate = '') {
            let url = `get-user-stats.php?start=${startDate}&end=${endDate}`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                        return;
                    }

                    let labels = data.map(item => item.date);
                    let accuracyData = data.map(item => item.accuracy);
                    let reactionTimeData = data.map(item => item.reaction_time);
                    let moodData = data.map(item => item.mood);
                    let focusData = data.map(item => item.focus);

                    // Update Stats
                    document.getElementById('streak').textContent = data.length; // Basic example
                    document.getElementById('sessions').textContent = data.length; // Example
                    document.getElementById('average-accuracy').textContent = (accuracyData.reduce((a, b) => a + b, 0) / accuracyData.length).toFixed(2) + '%';

                    // Create charts
                    createChart('accuracyChart', labels, accuracyData, 'Accuracy');
                    createChart('reactionTimeChart', labels, reactionTimeData, 'Reaction Time');
                    createChart('moodChart', labels, moodData, 'Mood');
                    createChart('focusChart', labels, focusData, 'Focus');
                })
                .catch(error => {
                    console.error("Error fetching stats:", error);
                });
        }

        // Chart creation function
        function createChart(canvasId, labels, data, label) {
            new Chart(document.getElementById(canvasId), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: data,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Handle date range filter form submission
        document.getElementById('date-range-form').addEventListener('submit', function (e) {
            e.preventDefault();
            let startDate = document.getElementById('start-date').value;
            let endDate = document.getElementById('end-date').value;
            fetchStats(startDate, endDate);
        });

        // Initial load
        fetchStats();
    </script>
</body>

</html>