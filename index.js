<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sauna Heater Sizing Tool</title>
    <style>
        body {
            background-color: #f8f8f8;
            color: #333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .calculator-container {
            max-width: 600px;
            margin: auto;
            padding: 30px;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        h2, h3 {
            text-align: center;
            color: #222;
        }
        .calc-section {
            margin-bottom: 25px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }
        .input-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            width: 100%;
            margin-bottom: 15px;
        }
        input[type="number"] {
            width: 45%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
        }
        .full-width {
            width: 100%;
        }
        .full-width input {
            width: 100%;
        }
        .results-section {
            background: #eef;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            display: none;
        }
        .topture-button {
            display: block;
            width: 100%;
            padding: 10px;
            background: #007BFF;
            color: white;
            font-size: 18px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
        }
        .topture-button:hover {
            background: #0056b3;
        }
        .brand-selection {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 10px;
        }
        .help-text {
            text-align: center;
            font-size: 14px;
            color: #555;
        }
        .backlink {
            text-align: center;
            margin-top: 20px;
            font-size: 16px;
        }
        .backlink a {
            color: #007BFF;
            text-decoration: none;
            font-weight: bold;
        }
        .backlink a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div class="calculator-container">
    <h2>Sauna Heater Size Calculator</h2>
    
    <div class="calc-section">
        <h3>1. Enter Sauna Dimensions</h3>
        <div class="input-row">
            <label>Depth:</label> 
            <input placeholder="ft" id="depth-ft" type="number" min="0"> 
            <input placeholder="in" id="depth-in" type="number" min="0">
        </div>
        <div class="input-row">
            <label>Width:</label> 
            <input placeholder="ft" id="width-ft" type="number" min="0"> 
            <input placeholder="in" id="width-in" type="number" min="0">
        </div>
        <div class="input-row">
            <label>Height:</label> 
            <input placeholder="ft" id="height-ft" type="number" min="0"> 
            <input placeholder="in" id="height-in" type="number" min="0">
        </div>
        <div class="or-divider">OR</div>
        <div class="input-row full-width">
            <label>Total Volume (cu. ft):</label> 
            <input placeholder="cu. ft" id="total-volume" type="number" min="0">
        </div>
        <p class="help-text">Enter dimensions in feet & inches, or input total volume directly.</p>
    </div>

    <div class="calc-section">
        <h3>2. Cold Surface Area</h3>
        <div class="input-row full-width">
            <label>Cold Surfaces (Glass, Stone, etc.) (sq. ft):</label> 
            <input placeholder="sq. ft" id="cold-surfaces" type="number" min="0">
        </div>
        <p class="help-text">Cold surfaces absorb heat, requiring a stronger heater. Exclude the floor.</p>
    </div>

    <div class="calc-section">
        <h3>3. Preferred Brand</h3>
        <div class="brand-selection">
            <label><input type="radio" name="brand" value="HUUM" checked> HUUM</label>
            <label><input type="radio" name="brand" value="Harvia"> Harvia</label>
        </div>
    </div>

    <button class="topture-button" onclick="calculateHeaterSize()">Calculate</button>

    <div id="results" class="results-section">
        <h3>Results</h3>
        <p><strong>Total Sauna Volume:</strong> <span id="result-volume"></span> cu. ft.</p>
        <p><strong>Adjusted Sauna Volume:</strong> <span id="result-adjusted"></span> cu. ft.</p>
        <p><strong>Recommended Heater Size:</strong> <span id="result-heater"></span> kW</p>
    </div>

    <div class="backlink">
        <p>Looking for a sauna heater? <a href="https://topture.com/collections/sauna-heaters" target="_blank">Browse our collection</a></p>
    </div>
</div>

<script>
    function calculateHeaterSize() {
        let depthFt = parseFloat(document.getElementById("depth-ft").value) || 0;
        let depthIn = parseFloat(document.getElementById("depth-in").value) || 0;
        let widthFt = parseFloat(document.getElementById("width-ft").value) || 0;
        let widthIn = parseFloat(document.getElementById("width-in").value) || 0;
        let heightFt = parseFloat(document.getElementById("height-ft").value) || 0;
        let heightIn = parseFloat(document.getElementById("height-in").value) || 0;
        let totalVolume = parseFloat(document.getElementById("total-volume").value) || null;
        let coldSurfaces = parseFloat(document.getElementById("cold-surfaces").value) || 0;
        let saunaVolume = totalVolume || (((depthFt + depthIn / 12) * (widthFt + widthIn / 12) * (heightFt + heightIn / 12)));
        let adjustedVolume = saunaVolume + (coldSurfaces * 50);
        let heaterSize = (adjustedVolume / 1.2).toFixed(1);
        document.getElementById("result-volume").textContent = saunaVolume.toFixed(1);
        document.getElementById("result-adjusted").textContent = adjustedVolume.toFixed(1);
        document.getElementById("result-heater").textContent = heaterSize;
        document.getElementById("results").style.display = "block";
    }
</script>

</body>
</html>
