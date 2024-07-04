function showResult() {
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;
    const q3 = document.getElementById('question3').value;

    let result = '';

    if (q1 === 'morning' && q2 === 'extrovert' && q3 === 'planner') {
        result = 'あなたはリーダータイプです！';
    } 
    else if (q1 === 'night' && q2 === 'introvert' && q3 === 'spontaneous') {
        result = 'あなたはクリエイタータイプです！';
    } 
    else {
        result = 'あなたはバランスタイプです！';
    }

    document.getElementById('result').innerText = result;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function goBack() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}
