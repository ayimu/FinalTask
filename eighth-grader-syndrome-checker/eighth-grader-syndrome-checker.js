
function showResult() {
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;
    const q3 = document.getElementById('question3').value;
    const q4 = document.getElementById('question4').value;
    const q5 = document.getElementById('question5').value;
    const q6 = document.getElementById('question6').value;

    let result = '';

    if (q1 === 'morning' && q2 === 'extrovert' && q3 === 'no' && q4 === 'like' && q5 === 'no' && q6 === 'no') {
        result = 'あなたは健康です！\nそのままの君でいて...';
    } 
    else if(q1 === 'night' && q2 === 'introvert' && q3 === 'yes' && q4 === 'nevermind' && q5 === 'yes' && q6 === 'yes') {
        result = 'クソダサ役満の完成だ!\nお前はもう助からないぞ!!';
    }
    else if(q1 === 'night' && q2 === 'introvert' && q3 === 'yes' && q4 === 'dislike' && q5 === 'yes' && q6 === 'yes') {
        result = 'クソダサ役満の完成だ!\nお前はもう助からないぞ!!';
    }
    else if (q2 === 'extrovert' && q3 === 'yes' && q4 === 'nevermind' && q5 === 'yes' && q6 === 'yes') {
        result = 'あなたは勘違い型中二病です!\nお前が思ってるよりもお前は普通だぞ\nいい加減卒業しろ!!';
    }
    else if (q4 === 'dislike' && q5 === 'yes' && q6 === 'yes') {
        result = 'あなたは逆張り型中二病です!\nもうそういうのカッコいいって思うのやめましょうよ!!!';
    }
    else{
        result = 'まあ、そんなもんだよね';
    }

    document.getElementById('result').innerText = result;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function goBack() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}
=======
function showResult() {
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;
    const q3 = document.getElementById('question3').value;
    const q4 = document.getElementById('question4').value;
    const q5 = document.getElementById('question5').value;
    const q6 = document.getElementById('question6').value;

    let result = '';

    if (q1 === 'morning' && q2 === 'extrovert' && q3 === 'no' && q4 === 'like' && q5 === 'no' && q6 === 'no') {
        result = 'あなたは健康です！\nそのままの君でいて...';
    } 
    else if(q1 === 'night' && q2 === 'introvert' && q3 === 'yes' && q4 === 'nevermind' && q5 === 'yes' && q6 === 'yes') {
        result = 'クソダサ役満の完成だ!\nお前はもう助からないぞ!!';
    }
    else if(q1 === 'night' && q2 === 'introvert' && q3 === 'yes' && q4 === 'dislike' && q5 === 'yes' && q6 === 'yes') {
        result = 'クソダサ役満の完成だ!\nお前はもう助からないぞ!!';
    }
    else if (q2 === 'extrovert' && q3 === 'yes' && q4 === 'nevermind' && q5 === 'yes' && q6 === 'yes') {
        result = 'あなたは勘違い型中二病です!\nお前が思ってるよりもお前は普通だぞ\nいい加減卒業しろ!!';
    }
    else if (q4 === 'dislike' && q5 === 'yes' && q6 === 'yes') {
        result = 'あなたは逆張り型中二病です!\nもうそういうのカッコいいって思うのやめましょうよ!!!';
    }
    else{
        result = 'まあ、そんなもんだよね';
    }

    document.getElementById('result').innerText = result;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function goBack() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}
