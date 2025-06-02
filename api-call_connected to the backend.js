async function getPredictedLabel(processed_t) {
  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",                 // Assuming your backend uses POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: processed_t }),  // Send data as JSON
    });

    if (!response.ok) {
      console.error("API call failed with status", response.status);
      return null;  // Return null to signal no prediction
    }

    const result = await response.json();

    // Assuming backend responds with JSON like: { "label": "up" }
    console.log("Predicted label:", result.label);
    return result.label || null; // Return label or null if missing
  } catch (error) {
    console.error("Error calling API:", error);
    return null;
  }
}
