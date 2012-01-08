$(document).ready(function() { 
	$("#q").keyup(function(event){
			
		data2=$("#q").val();
		data2=data2.toLowerCase();
		
		if (data2!="")
		{
			$("#message").html("<img src='./images/searching.gif' />");
			idx=data2.substr(0,1);
			$.getJSON("data/"+idx+".json", function(json) {  
			$("#result").html("");
			k=0;
			$.each(json.data,function(i,mydata){  
				data1=mydata.word;
				data1=data1.toLowerCase();
			
				
				if(k<10)
				{
					if( data1.substr(0,data2.length) == data2 )
					{
						$("#result").append("<span class='word'>"+mydata.word+"</span><br><span class='state'>"+mydata.state+"</span><br>"+mydata.def+"<hr>");  
						k=k+1;
					}
						
				}
					
					
			});  
			$("#message").html("");
			}); 
		}
	});
});