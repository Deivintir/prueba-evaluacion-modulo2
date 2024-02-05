class Alumn{
    name;
    surname;
    points;

    constructor(name, surname, points){
        this.name = name;
        this.surname = surname;
        this.points = points;
    }

    setPoints(points){
        this.points = points;
    }

    getPoints(){
        return this.points >= 5 ? 'Apto' : 'No apto';
    }
}

function alumnResult(name, surname, points){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!name || !surname|| isNaN(points)){
                reject(new Error('Datos no válidos'));
            }else{
                const alumn = new Alumn(name, surname, parseFloat(points));
                const message = `${alumn.name} ${alumn.surname}: ${alumn.getPoints()}`;
                resolve(message);
            }
        },2000)
    });
}

async function showUserResult(){
    try {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const points = document.getElementById('points').value;

        const message = await alumnResult(name, surname, points);
        console.log(message)
    } catch (error) {
        console.error(error.message);
    }
}

