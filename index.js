const client = document.getElementById('client');

const clientLoc = client.getBoundingClientRect();

function getMouse(event) {
    let x = event.clientX - clientLoc.left;
    let y = event.clientY - clientLoc.top;
    let z = event.clientX;
    return { x, y, z };
    }

    function getCursor(event) {
        let a = event.clientX;
        let b = event.clientY;
        let _position = `X: ${a}<br>Y: ${b}`;
    
        const infoElement = document.getElementById('info');
        infoElement.innerHTML = _position;
        infoElement.style.top = b + "px";
        infoElement.style.left = (a + 20) + "px";
    }

    client.addEventListener('mousemove', function(event){
        const coords = getMouse(event);
        if(coords.x>0){
            client.style.backgroundColor = 'rgb('+coords.x/2+','+coords.y/2+','+coords.y+')'
            console.log(coords.x, clientLoc.left, coords.z);
            getCursor(event);
        }
        
    });

    const arr = ['./images/4.jpeg', './images/3.jpg', './images/2.jpg', './images/1.jpg']
    const arr2 = ['inherit', 'Singlet', 'Chunk', 'ubuntu']
    let i = 0;
  
    document.body.addEventListener('click', function (){
        if(i < arr.length-1){
            i++
        } else{
            i = 0
        }
        document.body.style.backgroundImage = `url('${arr[i]}')`
        document.getElementById('text').style.fontFamily = `'${arr2[i]}'`
    }
)
    