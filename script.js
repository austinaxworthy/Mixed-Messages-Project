function randNumberGenerator(num){
    return Math.floor(Math.random()*num)
}   


const codingParameters = {
    Language: ['JavaScript', 'Python', 'C++', 'Java'],
    Subject: ['Arrays', 'Loops', 'Objects', 'functions'],
    Length: ['30 Minutes', '1 Hour', '45 Minutes', '2 Hours', '90 Minutes', '3 hours']
}

 
function codingBlock(){

    let codingSession = []

    for(let param in codingParameters){
        let choice = randNumberGenerator(codingParameters[param].length)

        switch(param) {
            case 'Language':
                codingSession.push(`Coding Language: ${codingParameters[param][choice]}`)
                break;
            case 'Subject': 
                codingSession.push(`Subject: ${codingParameters[param][choice]}`)
                break;
            case 'Length': 
                codingSession.push(`Time: ${codingParameters[param][choice]}`)
                break;
        }
    }
    return codingSession
}; 


let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']


function weeklyCodingSessions(daysArr){
    //Weekend are for the boys
    let weeklySessions = []

    for(let day in daysArr){
        weeklySessions.push(codingBlock())
    }
    return weeklySessions
}

function sessionOutput(){
    let dailySessions = weeklyCodingSessions(days)
    for(let i = 0; i < days.length; i++){
        let day = days[i]
        console.log(`${day}: \n`)
        console.log(`${dailySessions[i][0]}\n${dailySessions[i][1]}\n${dailySessions[i][2]}\n\n`)
    }
}

sessionOutput()