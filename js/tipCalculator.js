$(function () {
    $('#calculateBtn').on('click',function () {
        var amount=$('#bill_amount').val();
        var service=$('#service').val();
        var sharing=$('#sharing').val();
        var calculated=0;
        if(amount===''){
            alert('fill amount');
        }else{
            if(sharing===''){
                calculated=amount*0.3;
            }else{
                calculated=(amount*(service/100))/sharing;
            }
        }
        if(calculated>0){
            var calculationHere=$('#calculationHere').text('Tips amount: '+calculated+' $');
        }


        console.log(calculationHere);
    })
});