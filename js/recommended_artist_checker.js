function showResult() {
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;
    const q3 = document.getElementById('question3').value;
    const q4 = document.getElementById('question4').value;

    let result = '';

    if (q1 === 'yes' && q2 === 'men' && q4 === 'calm' ) {
        result = 'おすすめのアーティストは\n「しゃろう」です';
    } 
    else if (q1 === 'yes' && q2 === 'men' && q4 === 'intense' ) {
        result = 'おすすめのアーティストは\n「松本孝弘」です';
    } 
    else if (q1 === 'yes' && q2 === 'women' ) {
        result = 'おすすめのアーティストは\n「宇多田ヒカル」です';
    }
    else if(q1 === 'no' && q2 === 'men' && q3 === 'strong' && q4 === 'intense' ) {
        result = 'おすすめのアーティストは\n「King Gnu」です';
    }
    else if (q1 === 'no' && q2 === 'men' && q3 === 'strong' && q4 === 'calm' ) {
        result = 'おすすめのアーティストは\n「米津玄師」です';
    }
    else if (q1 === 'no' && q2 === 'men' && q3 === 'gentle' && q4 === 'intense' ) {
        result = 'おすすめのアーティストは\n「RADWIMPS」です';
    }
    else if (q1 === 'no' && q2 === 'men' && q3 === 'gentle' && q4 === 'calm' ) {
        result = 'おすすめのアーティストは\n「星野源」です';
    }
    else if(q1 === 'no' && q2 === 'women' && q3 === 'strong' && q4 === 'intense' ) {
        result = 'おすすめのアーティストは\n「Ado」です';
    }
    else if (q1 === 'no' && q2 === 'women' && q3 === 'strong' && q4 === 'calm' ) {
        result = 'おすすめのアーティストは\n「椎名林檎」です';
    }
    else if (q1 === 'no' && q2 === 'women' && q3 === 'gentle' && q4 === 'intense' ) {
        result = 'おすすめのアーティストは「LiSA」です\n';
    }
    else if(q1 === 'no' && q2 === 'women' && q3 === 'gentle' && q4 === 'calm' ) {
        result = 'おすすめのアーティストは\n「宇多田ヒカル」です';
    }


    document.getElementById('result').innerText = result;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function goBack() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
}
