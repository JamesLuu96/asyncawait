const arr = [
    "Timmy",
    "Tommy",
    "Jimmy",
    "Alex"
]

const oneEl = document.querySelector(".one")
const twoEl = document.querySelector(".two")
const threeEl = document.querySelector(".three")
const nameEl = document.querySelector('p')

async function main(){

    for(let i = 0; i < arr.length; i++){
        nameEl.textContent = arr[i]
        await new Promise((resolve, reject)=>{
            oneEl.addEventListener("click", ()=>{
                resolve({method: oneEl.textContent, name: arr[i]})
            }, {once: true})
            twoEl.addEventListener("click", ()=>{
                resolve({method: twoEl.textContent, name: arr[i]})
            }, {once: true})
            threeEl.addEventListener("click", ()=>{
                resolve({method: threeEl.textContent, name: arr[i]})
            }, {once: true})
        }).then((content)=>{
            console.log(content)
        })
    }
    
}

main()

