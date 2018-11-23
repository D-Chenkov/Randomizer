let MapachoX=document.getElementById('Mapocho'); 
let Angle = 0
let pausa = 0
let HaloX =document.getElementById('song')
click =0 
MapachoX.addEventListener('click',function(){
	for (let i = 0; i<30000	 ; i++){
		setTimeout(() => {
			Angle += 1
			MapachoX.setAttribute('style',`transform:rotate(${Angle * 4}deg)`);	
		},i * 2) }
		
		if (pausa==0)
		{
			HaloX.play();
			pausa =1
			console.log('Played')
		}
		else if (pausa==1)

		{
			HaloX.pause();
			pausa = 0 	
			console.log('Paused')
		}
	});