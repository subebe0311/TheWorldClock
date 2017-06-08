            $(document).ready(function () {
                $("#myform").validate({
                    rules: {
                        "email": {
                            email:true,
                            required: true
                        },  
                        "password": {
                            required: true
                        } 
                    }
                });
            });

