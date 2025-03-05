
from flask import Flask, request, jsonify,website

app = Flask(website)

@app.route('/advice', methods=['POST'])
def get_advice():
    data = request.json
    mood = data.get('mood')
    sleep = data.get('sleep')
    financial = data.get('financial')
    support = data.get('support')

    advice = generate_advice(mood, sleep, financial, support)
    return jsonify({"advice": advice})

def generate_advice(mood, sleep, financial, support):
    advice = ""
    if mood == "sad":
        advice += "It sounds like you're feeling down. Try reaching out to a friend. "
    elif mood == "anxious":
        advice += "Anxiety can be tough. Practice deep breathing. "
    elif mood == "stressed":
        advice += "Stress is challenging. Take breaks and prioritize tasks. "

    if sleep < 7:
        advice += "Aim for 7-9 hours of sleep per night. "

    if financial == "struggling":
        advice += "Consider creating a budget or seeking financial counseling. "

    if support == "no":
        advice += "Join a community group or seek professional help. "

    return advice or "You're doing great! Keep taking care of yourself."

if website == '_main_':
    app.run(debug=True)