const admin = require("./firebaseAdmin"); // Import the Firebase Admin SDK instance

// Function to send push notification
async function sendPushNotification(token, title, body) {
  try {
    await admin.messaging().send({
      token,
      notification: {
        title,
        body,
      },
    });
    console.log("Push notification sent successfully.");
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
}

// Your existing backend logic to monitor weather conditions
function monitorWeatherConditions(city, condition) {
  // Check weather conditions and determine if notification should be sent
  if (1) {
    // If conditions match, send push notification to user
    sendPushNotification(
      "user_device_token",
      "Weather Alert",
      `Alert: ${condition} in ${city}`
    );
  }
}

module.exports = { monitorWeatherConditions };