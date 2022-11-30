let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    // minValue = 0;
    // maxValue = 100;
    // orderNumber = 0;
    const stop = document.getElementById('btnRetry');
    document.getElementById('btnRetry').addEventListener('click', () => {
        location.reload();
    })
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
                    break;
                case 2:
                    answerField.innerText = `Больше не могу угадывать\n\u{1F92F}`
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // answerField.innerText = `Вы загадали число ${answerNumber }?`;
            const phraseRandom = Math.round( Math.random() * 2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                    break;
                case 1:
                    answerField.innerText = `Может Вы загадывали ${answerNumber }?`
                    break;
                case 2:
                    answerField.innerText = `Мне кажется это число ${answerNumber }?`
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue - 1){
            const phraseRandom = Math.round( Math.random() * 2);
            // const answerPhrase = (phraseRandom === 1) ?
            //    `Вы загадали неправильное число!\n\u{1F914}` :
            //    `Я сдаюсь..\n\u{1F92F}`; 
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
                    break;
                case 2:
                    answerField.innerText = `Больше не могу угадывать\n\u{1F92F}`
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // answerField.innerText = `Вы загадали число ${answerNumber }?`;
            const phraseRandom = Math.round( Math.random() * 2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                    break;
                case 1:
                    answerField.innerText = `Может Вы загадывали ${answerNumber }?`
                    break;
                case 2:
                    answerField.innerText = `Мне кажется это число ${answerNumber }?`
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2);
        switch (phraseRandom) {
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
                break;
            case 1:
                answerField.innerText = `Это было легко\n\u{1F60E}`
                break;
            case 2:
                answerField.innerText = `Можно было и посложнее\n\u{1F60E}`
                break;
        }
        gameRun = false;
    }
})

