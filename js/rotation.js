let img=document.getElementById('MapacheGun'); 
let degree = 0
let pause = 0
let Halo =document.getElementById('song')
let click =0


img.addEventListener('click',function(){
	for (let i = 0; i<30000	 ; i++){
			setTimeout(() => {
				degree += 1
				img.setAttribute('style',`transform:rotate(${degree * 4}deg)`);	
			},i * 2) }
	if (pause==0)
	{
		Halo.play();
		pause =1
		console.log('Played')
	} 
	else 	if (pause==1)
	{
		Halo.pause();
		pause = 0 
		console.log('Paused')
	}  
	window.location.href = "./index.html";

});