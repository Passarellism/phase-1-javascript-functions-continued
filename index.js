function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(location = 'go to the office') {
    return `This Monday, I will ${location}.`;
};

function wrapAdjective(flair = '*'){
    return function(adjective = "a hard worker"){
        return `You are ${flair}${adjective}${flair}!`
    }
}