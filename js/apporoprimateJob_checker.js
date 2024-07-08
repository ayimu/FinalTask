function showResult() {
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;

    let result = '';

    if (q1 === 'HP' && q2 === 'attack') {
        result = '地底ボクサーです';
    } 
    else if(q1 === 'HP' && q2 === 'deffence') {
        result = '戦車です';
    }
    else if(q1 ==='MP' && q2 === 'attack') {
        result = '宇宙忍者です';
    }
    else if (q1 === 'MP' && q2 === 'deffence') {
        result = 'UFOです';
    }
    
    document.getElementById('result').innerText = result;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function goBack() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}
