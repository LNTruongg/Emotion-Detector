function analyzeEmotion() {

    let textToAnalyze = document.getElementById("textToAnalyze").value;

    fetch("/emotionDetector?textToAnalyze=" + textToAnalyze)
    .then(response => response.text())
    .then(data => {
        document.getElementById("system_response").innerHTML = data;
    });

}
