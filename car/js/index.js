














window.onload=function(){
	let oApp=document.getElementById('app');
	let oApp_i=document.getElementById('app_i');

	oApp.onclick=function(){

		if(oApp.className=='w'){
			oApp.className='w on';
		}else{
			oApp.className='w';
		}
		if(oApp_i.style.display=='none'){
			oApp_i.style.display='block';
		}else{
			oApp_i.style.display='none';
		}
	};
};