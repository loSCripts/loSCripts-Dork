document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'fr-FR';

  let isMicrophoneActive = false;

  startBtn.addEventListener('click', () => {
    if (!isMicrophoneActive) {
      activateAssistant();
    } else {
      stopAssistant();
    }
  });

  function activateAssistant() {
    recognition.onstart = () => {
      startBtn.textContent = 'Assistant Activé';
      startBtn.disabled = true;
      isMicrophoneActive = true;
      console.log('Microphone activé');
    };

    recognition.onresult = (event) => {
      handleCommand(event);
    };

    recognition.onend = () => {
      startBtn.textContent = 'Activer l\'Assistant';
      startBtn.disabled = false;
    };

    recognition.start();
    console.log('Écoute démarrée');
  }

  function stopAssistant() {
    recognition.stop();
    isMicrophoneActive = false;
    console.log('Assistant arrêté');
  }

  function handleCommand(event) {
    console.log('Handling command...');

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript.toLowerCase();
      const confidence = event.results[i][0].confidence;
      console.log('Transcript:', transcript, 'Confidence:', confidence);

      // Ne traitez que les transcriptions avec une confiance suffisante
      if (confidence > 0.7) {
        if (transcript.includes('ok michel')) {
          speak("Que puis-je faire pour vous ? Si vous voulez savoir quel amorçage de phrase utiliser, dites-moi. 'donne-moi les amorces de phrase'.");
        } else if (transcript.includes('arrête')) {
          speak("Au revoir !");
          stopAssistant();
        } else if (transcript.includes('donne-moi les amorces de phrase')) {
          speak('options 1. Générer une fausse identité. options deux localiser un numéro de téléphone. options trois. Générer un mot de passe. options 4. Accéder à une liste complète de Google Dork. options 5. Accédez au site de localisation d\'adresse IP. Dite juste le numero de l\'option ');
        } else if (transcript.includes('2')) {
          speak("redirection vers le site de localisation de numéro de téléphone");
          window.location.href = 'outil loSCripts/localisation/localisation numéro de téléphone.html'; 
        } else if (transcript.includes('1')) {
          speak("redirection vers le site de génération de fausse identité");
          window.location.href = 'outil loSCripts/génération/profile/index.html';
        } else if (transcript.includes('3')) {
          speak("redirection vers le site de génération de mot de passe");
          window.location.href = 'outil loSCripts/génération/mot de passe/index.html';
        } else if (transcript.includes('4')) {
          speak("redirection vers le site de Google dork");
          window.location.href = 'outil loSCripts/google dork/index.html';
        } else if (transcript.includes('5')) {
          speak("redirection vers le site de localisation d'adresse IP");
          window.location.href = 'outil loSCripts/localisation/localisation IP.html';
          }
        }
      }
    }
  

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR'; // Spécifiez la langue française
    utterance.rate = 1.5; // Ajustez cette valeur selon votre préférence
    window.speechSynthesis.speak(utterance);
  }
});
