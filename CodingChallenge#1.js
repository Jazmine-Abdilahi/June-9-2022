const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript','1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),regesterNewAnswer() {
        const answer = number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
    }
};
console.log(answer);