// Q19. Anonymous Function to Increase Marks

let increaseMarks = function(marks) {
    return marks.map(function(mark) {
        return mark + 10;
    });
};

let marks = [50, 60, 70, 80];

console.log(increaseMarks(marks));