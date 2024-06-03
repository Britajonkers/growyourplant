const progressBar = document.querySelector("#progressbar1");
const waterKnop = document.querySelector("#waterknop");
const voedingKnop = document.querySelector("#voedingknop");
const zonKnop = document.querySelector("#zonknop");
const plantEen = document.querySelector("#plant1");



let health = 0; // Initial health

function updateProgress(value) {
    health = Math.min(Math.max(health + value, 0), 100);
    progressBar.value = health;
    progressBar.textContent = `${health}%`;

    //plaatje veranderen als bij bepaald nummer in healthbar



    if (health >= 80) {
        plantEen.src = "IMG/plant5.png";
    } else if (health >= 70) {
        plantEen.src = "IMG/plant4.png";
    } else if (health >= 40) {
        plantEen.src = "IMG/plant3.png";
    } else if (health >= 10) {
        plantEen.src = "IMG/plant2.png";
    } else {
        plantEen.src = "IMG/plant1.png";
    }
}


/*knoppen*/
// bron voor audio bij klikken: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio 
// bron geluid water en voeding: https://youtu.be/gtx7Oo7vKEs?si=wffAxILn3vEu8joE
// bron geluid zon: https://youtu.be/tXd0UPp4QhA?si=T0j0VsMaJVyPXyiA

waterKnop.addEventListener('click', () => {
    updateProgress(3);
    watersound.play();
});

voedingKnop.addEventListener('click', () => {
    updateProgress(6);
    voedingsound.play();
});

zonKnop.addEventListener('click',  () => {
    updateProgress(3);
    zonsound.play();
});


// teruglopen van healthbar
setInterval(() => {
    updateProgress(-1);
}, 200); // Verhoog de tijd naar 1500 ms voor langzamere afname


