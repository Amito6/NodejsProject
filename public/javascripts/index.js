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
        success:(response)=>{
            console.log(response);
        }
    })
})
});