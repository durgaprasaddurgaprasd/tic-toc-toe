const cells=document.querySelectorAll('.cell');
const cli1=document.getElementById('cli');
const win=document.getElementById('win');
const finalmessage=document.getElementById('result');
let player='X';
let gameOver=false;
const winningChances=[
    [0,1,2],[1,4,7],[0,4,8],[3,4,5],[6,7,8],[0,3,6],[2,4,6],[2,5,8]
];
cells.forEach(cell=>{
    cell.addEventListener('click',handleClick);
})

function handleClick(event)
{
    const cell=event.target;
     if (cell.textContent!=''|| gameOver) return;
    const cellvalue=cell.textContent;
    cell.textContent=player;
    cli1.play();
    if(isWin(player))
    {
       finalmessage.innerHTML="Winner:"+player;
       gameOver=true;
       win.play();
       return ;
    }
    if(isDraw())
    {
        finalmessage.innerHTML="Draw";
       gameOver=true;
    }
    function isWin(player)
    {
        for(let i=0;i<winningChances.length;i++)
        {
           let l=winningChances[i];
           let a=l[0];
           let b=l[1];
           let c=l[2];
           if(cells[a].textContent==player&&cells[b].textContent==player&&cells[c].textContent==player)
           {
            return true;
           }
        }
        return false;
    }
    function isDraw()
    {
        for(let i=0;i<cells.length;i++)
        {
           if(cells[i].textContent=='')
           {
            return false;
           }
        }
        return true;
    }
    player=(player=='X'?'O':'X');
}