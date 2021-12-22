let initial_people = 300;
let input = window.prompt('enter data', '')
let unemployed = 0;
let initial_food = 300;
let initial_mats = 300;
let eaten = 0;
let eating_mod = 1.1;
let worker_mod = 2.5;
let birth_rate = 0.01;

    for (let i = 0; i <= 1000; i++) {
        unemployed = initial_people - input;
        
        initial_people += Math.ceil((unemployed * (birth_rate * 4)) + (initial_people * (birth_rate * 2)));
        eaten = (initial_people * eating_mod) - (input * worker_mod);
        initial_food -= Math.ceil(eaten);

        console.log(`People ${initial_people}, Food ${initial_food}`);
        
        unemployed = initial_people - input;
        eaten = 0;

        if (initial_food < 0) {
            initial_people = Math.floor(initial_people*0.8);
        }
        if (input === 'break') {
            break;
        }

        input = window.prompt();
}
