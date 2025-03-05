document.getElementById('mentalHealthForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user inputs
  const mood = document.getElementById('mood').value;
  const sleep = parseInt(document.getElementById('sleep').value);
  const financial = document.getElementById('financial').value;
  const support = document.getElementById('support').value;

  // Generate advice based on inputs
  let advice = generateAdvice(mood, sleep, financial, support);

  // Display advice
  document.getElementById('adviceText').textContent = advice;
  document.getElementById('adviceResult').classList.remove('hidden');
});

function generateAdvice(mood, sleep, financial, support) {
  let advice = "";

  // Mood-based advice
  if (mood === "sad") {
      advice += "It sounds like you're feeling down. Try reaching out to a friend or engaging in a hobby you enjoy. ";
  } else if (mood === "anxious") {
      advice += "Anxiety can be tough. Practice deep breathing or mindfulness exercises. ";
  } else if (mood === "stressed") {
      advice += "Stress is challenging. Consider breaking tasks into smaller steps and taking breaks. ";
  }

  // Sleep-based advice
  if (sleep < 7) {
      advice += "You might not be getting enough sleep. Aim for 7-9 hours per night. ";
  }

  // Financial-based advice
  if (financial === "struggling") {
      advice += "Financial struggles can be overwhelming. Consider creating a budget or seeking financial counseling. ";
  }

  // Support-based advice
  if (support === "no") {
      advice += "It’s important to have a support system. Consider joining a community group or seeking professional help. ";
  }

  return advice || "You're doing great! Keep taking care of yourself.";
}



