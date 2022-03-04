
    window.onscroll=function(){
        if(window.pageYOffset>100)
            document.getElementById('head').style.backgroundColor="rgba(10, 128, 234, 1)";
        else
        document.getElementById('head').style.backgroundColor="transparent";
    }

                    /// for counters in projects
    function Interval(counts,upto){
        let i = 0;
        let temp = setInterval( () => {
            let count = document.getElementById(counts);
            count.innerText = i;
            if(i==upto)
            {
                count.innerText += "+";
                clearInterval(temp);
            }
            i = i+1;
        },10); 
    }
    Interval("p1_count",150);
    Interval("p2_count",355);
    Interval("p3_count",510);
    Interval("p4_count",51);

    