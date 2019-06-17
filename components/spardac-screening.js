(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "recruitment-data":    	        {url:"$H/elig-questions-data.html",Table:"dev-spardac-recruitment-record",form_module:"recruitment-form",router:1},
        "recruitment-form":    	        {url:"$H/elig-questions-form.html",Table:"dev-spardac-recruitment-record"},
    }
    url_replace(modules,"","$H","https://wappsystem.github.io/spardac-screening/modules","http://127.0.0.1:8000/wappsystem/spardac-screening/modules");
    //-------------------------------------------------------------------------------------
    for(m in modules){$vm.module_list[m]=modules[m];}
})();