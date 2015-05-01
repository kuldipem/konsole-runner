$(document).ready(function(){
	

	hljs.configure({useBR: true});

	$('#screen').each(function(i, block) {
  		hljs.highlightBlock(block);
	});


	$("html").on('keyup',function(event){
		if(event.which===13){
			$("#fire").click();			
		}
	});


	$("#fire").on("click",function(){
		$login_name="joe";
		$cmd=$("#cmd").val();
		$output=$("#screen");
		

		if($cmd===""){
			alert("Command is empty.");
			return false;
		}

		$.ajax({
		  url: "http://localhost:7777/users/cmd",
		  type: "POST",
		  data: { name: $login_name, cmd: $cmd },
		  success: function(data){
		  		$output.append("\n");
		  		$output.append(data);
		  }
		})
		.done(function( data ) {
		    
		});

	});

});
