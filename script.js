// FORMULAIRE DE CONTACT
emailjs.init("o92obPn3fZXPa5q6U"); // <-- Public Key OK

  document.getElementById('contact-form').addEventListener('submit', function(e) { //selection du formulaire
    e.preventDefault(); //empêche le rechargement de la page
    emailjs.send("service_4ctkj2n", "template_e9v6don", { //envoie de l'email
      prenom: this.prenom.value,
      nom: this.nom.value,
      email: this.email.value,
      message: this.message.value
    }).then(() => { //execute si l'email est bien envoyé
      alert("Message envoyé ✅"); //message de confirmation
      this.reset(); //reset le formulaire
    }, (err) => { //sinon renvoi une erreur 
      alert("Erreur ❌ : " + JSON.stringify(err));
    });
  });

  // visite virtuelle 
const modal = document.getElementById("virtual-tour-modal");//selection du modal
const btn = document.getElementById("open-virtual-tour"); //btn qui ouvre le modal
const closeBtn = document.querySelector(".close"); // element qui ferme le modal

btn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// reviens au a propos 
window.addEventListener('load', function() {
    window.scrollTo(0, 0); //scroll en haut de la page
});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}