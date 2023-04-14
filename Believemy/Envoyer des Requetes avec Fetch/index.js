

const url = 'https://lesoublisdelinfo.com/api.php';

async function envoyerPrenom(prenom) {
  const requete = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      prenom
    })
  });
  
  if(!requete.ok) {
    alert('Un problème est survenu.');
  }
  else {
    const donnees = await requete.json();
    console.log(donnees);
  }
}

envoyerPrenom('Elon');