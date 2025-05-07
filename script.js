// Die Fragen, die im Spiel gestellt werden
const questions = [
  "Was machst du in deiner Freizeit?",
  "Wie sieht dein Traumurlaub aus?",
  "Was ist dir in einer Beziehung wichtig?"
];

let candidates = [];             // Hier speichern wir die Kandidatennamen
let currentQuestion = 0;         // Welche Frage gerade gezeigt wird

// Wenn das Formular abgeschickt wird:
document.getElementById("candidate-form").addEventListener("submit", function(e) {
  e.preventDefault(); // verhindert das Neuladen der Seite

  // Eingaben auslesen
  candidates = [
    document.getElementById("cand1").value,
    document.getElementById("cand2").value,
    document.getElementById("cand3").value
  ];

  // Das Formular ausblenden und Spielbereich anzeigen
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";

  showQuestion(); // Erste Frage anzeigen
});

// Wenn "Nächste Frage" gedrückt wird:
document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(); // nächste Frage anzeigen
  } else {
    showFinalChoice(); // Herzblatt-Auswahl zeigen
  }
});

// Zeigt eine Frage und die Antworten der Kandidaten
function showQuestion() {
  document.getElementById("question").textContent = questions[currentQuestion];
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  candidates.forEach((name, i) => {
    const p = document.createElement("p");
    p.textContent = `${name}: Antwort auf "${questions[currentQuestion]}"`;
    answersDiv.appendChild(p);
  });
}

// Zeigt die Auswahl am Ende: Wer ist dein Herzblatt?
function showFinalChoice() {
  document.getElementById("question").textContent = "Wähle dein Herzblatt!";
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  candidates.forEach((name, i) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = () => {
      document.getElementById("question").textContent = `Du hast ${name} gewählt! ❤️`;
      document.getElementById("answers").innerHTML = "";
      document.getElementById("next-btn").style.display = "none";
    };
    answersDiv.appendChild(btn);
  });
}

