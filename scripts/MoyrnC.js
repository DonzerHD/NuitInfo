const capoteSelect = document.querySelector(".capoteDiv")
const capoteP = document.querySelector(".capoteP")
const croixC = document.querySelector(".croixC")



capoteSelect.addEventListener('click',()=>{
   capoteP.classList.remove('capoteP1');
   capoteP.classList.add('capoteP2')
}
)

croixC.addEventListener('click',()=>{
   capoteP.classList.remove('capoteP2');
   capoteP.classList.add('capoteP1')
 }
 )

/* CF */
const capoteSelectF = document.querySelector(".capoteFDiv")
const capotePF = document.querySelector(".capoteFP")
const croixCF = document.querySelector(".croixFC")



capoteSelectF.addEventListener('click',()=>{
   capotePF.classList.remove('capoteFP1');
   capotePF.classList.add('capoteFP2')
}
)

croixCF.addEventListener('click',()=>{
   capotePF.classList.remove('capoteFP2');
   capotePF.classList.add('capoteFP1')
 }
 )

