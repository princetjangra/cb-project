$(() => {

    if(screen.width >= 992){
        let sidelist1 = $('#ullist1')
        sidelist1.css('display', 'none')
        $('#list1').click(function(){
            if (sidelist1.css('display') == 'none')
                sidelist1.css('display','block');
            else
                sidelist1.css('display','none');
        })
        
        let sidelist2 = $('#ullist2')
        sidelist2.css('display', 'none')
        $('#list2').click(function(){
            if (sidelist2.css('display') == 'none')
                sidelist2.css('display','block');
            else
                sidelist2.css('display','none');
        })
    }
})