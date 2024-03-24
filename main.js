function question(metadata){
        
    const questionE = document.createElement('div');
    questionE.id = metadata.id;
    questionE.className = 'question';
    const img = document.createElement('img');
    img.src = `./imgs/${metadata.id}.png`;
    img.alt = metadata.id;
    questionE.appendChild(img);
    const ansList = document.createElement('div');
    ansList.className = 'answers';
    for(let i = 0; i < metadata.answers.length; i++){
        const ansLabel = document.createElement("label");
        const ans = document.createElement("input");
        ans.type = metadata.type;
        ans.name = metadata.id;
        ansLabel.dataset.correct = metadata.answers[i].is_correct;
        ansLabel.appendChild(ans);
        const span = document.createElement("span");
        span.textContent = metadata.answers[i].answer;
        ansLabel.appendChild(span);
        ansList.appendChild(ansLabel);
        ansList.appendChild(document.createElement('br'));

    }
    questionE.appendChild(ansList);
    return questionE;
}


questions.forEach(q => {
    document.body.appendChild(question(q));
    document.body.appendChild(document.createElement('hr'));
})

const button = document.createElement('button');
button.textContent = 'Ellenőrzés';
button.onclick = () => {
    const correct = document.querySelectorAll('[data-correct="true"]');
    correct.forEach(c => {
        c.style.backgroundColor = 'green';
    });
    const inputs = document.querySelectorAll('input');
    inputs.forEach(i => {
        i.disabled = true;
        if(i.checked && i.parentElement.dataset.correct === 'false'){
            i.parentElement.style.backgroundColor = 'red';
        }
    });
}
document.body.appendChild(button);