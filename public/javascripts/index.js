//requesting login modal

$(document).ready(()=>{
    $("#login-modal-request").click((e)=>{
        e.preventDefault();
        $("#signup-modal").modal("hide");
        $("#login-modal").modal("show");
    })
})

//requesting signup modal
$(document).ready(()=>{
    $("#signup-modal-request").click((e)=>{
        e.preventDefault();
        $("#login-modal").modal("hide");
        $("#signup-modal").modal("show");
    })
})

//signup request

$(document).ready(()=>{
$("#signup-form").submit((e)=>{
    e.preventDefault();
    $.ajax({
        type : "POST",
        url: "api/signup",
        data : new FormData(e.target),
        contentType : false,
        processData : false,
        beforSend : ()=>{
            $(".before-send").removeClass("d-none");
            $(".signup-btn").addClass("d-none")
        },
        success:(response)=>{
            $(".before-send").addClass("d-none");
            $(".signup-btn").removeClass("d-none");
             const label = response.message.label;
            const field = "."+response.message.field;
           // console.log(field,label);
            $(field).addClass("border border-danger")
            $(field+"-error").html(label)
        },
        error : (error)=>{
            console.log(error);
        }
    })
})
});