function creatGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/bandeiras/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/bandeiras/icon-${player2}.svg" alt="${player2}">
        </li>
    `
}

let delay = 0;
function creatCard(date, day, games) {
    delay = delay + 0.2;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        creatCard("20/11", "domingo",
        creatGame("qatar", "13:00", "ecuador"))
        +
        creatCard("21/11", "segunda",
        creatGame("england", "10:00", "iran") +
        creatGame("senegal", "13:00", "netherlands") +
        creatGame("usa", "16:00", "wales"))
        +
        creatCard("22/11", "terça",
        creatGame("argentina", "07:00", "arabia") +
        creatGame("denmark", "10:00", "tunisia") +
        creatGame("mexico", "13:00", "poland") +
        creatGame("france", "16:00", "australia"))
        +
        creatCard("23/11", "quarta",
        creatGame("morocco", "07:00", "croatia") +
        creatGame("germany", "10:00", "japan") +
        creatGame("spain", "13:00", "costarica") +
        creatGame("belgium", "16:00", "canada"))
        +
        creatCard("24/11", "quinta",
        creatGame("switzerland", "07:00", "cameroon") +
        creatGame("uruguay", "10:00", "korea") +
        creatGame("portugal", "13:00", "ghana") +
        creatGame("brazil", "16:00", "serbia"))
        +
        creatCard("25/11", "sexta",
        creatGame("wales", "07:00", "iran") +
        creatGame("qatar", "10:00", "senegal") +
        creatGame("netherlands", "13:00", "ecuador") +
        creatGame("england", "16:00", "usa"))
        +
        creatCard("26/11", "sábado",
        creatGame("tunisia", "07:00", "australia") +
        creatGame("poland", "10:00", "arabia") +
        creatGame("france", "13:00", "denmark") +
        creatGame("argentina", "16:00", "mexico"))
        +
        creatCard("27/11", "domingo",
        creatGame("japan", "07:00", "costarica") +
        creatGame("belgium", "10:00", "morocco") +
        creatGame("croatia", "13:00", "canada") +
        creatGame("spain", "16:00", "germany"))
        +
        creatCard("28/11", "segunda",
        creatGame("cameroon", "07:00", "serbia") +
        creatGame("korea", "10:00", "ghana") +
        creatGame("brazil", "13:00", "switzerland") +
        creatGame("portugal", "16:00", "uruguay"))
        +
        creatCard("29/11", "terça",
        creatGame("ecuador", "12:00", "senegal") +
        creatGame("netherlands", "12:00", "qatar") +
        creatGame("iran", "16:00", "usa") +
        creatGame("wales", "16:00", "england"))
        +
        creatCard("30/11", "quarta",
        creatGame("tunisia", "12:00", "france") +
        creatGame("australia", "12:00", "denmark") +
        creatGame("poland", "16:00", "argentina") +
        creatGame("arabia", "16:00", "mexico"))
        +
        creatCard("01/12", "quinta",
        creatGame("croatia", "12:00", "belgium") +
        creatGame("canada", "12:00", "morocco") +
        creatGame("japan", "16:00", "spain") +
        creatGame("costarica", "16:00", "germany"))
        +
        creatCard("02/12", "sexta",
        creatGame("korea", "12:00", "portugal") +
        creatGame("ghana", "12:00", "uruguay") +
        creatGame("serbia", "16:00", "switzerland") +
        creatGame("cameroon", "16:00", "brazil"))