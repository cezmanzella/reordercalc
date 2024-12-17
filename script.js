document.getElementById("ropForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var dailyUsage = parseFloat(document.getElementById("dailyUsage").value);
    var leadTime = parseFloat(document.getElementById("leadTime").value);
    var safetyStock = parseFloat(document.getElementById("safetyStock").value);
  
    // Reorder Point (ROP) formula: ROP = (Daily Usage × Lead Time) + Safety Stock
    var reorderPoint = (dailyUsage * leadTime) + safetyStock;
  
    document.getElementById("result").textContent = 
      "The Reorder Point is: " + reorderPoint.toFixed(2) + " units.";
  });
  