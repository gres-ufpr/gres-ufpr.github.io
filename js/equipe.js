// Remove todos o conteudo de todas as abas antes de adicionar novos.
$(".clear-content-when-loading").empty();

var templateProfessors = $("#template-professors").html();
var templateStudents = $("#template-students").html();
var templatePastSupervisions = $("#template-past-supervisions").html();

function loadInformation(array, template, current, past, subject, startingDate){
    $.each(array, function(index, value){

        var result = "";

        if(value.ending_date){
            result = templatePastSupervisions;
        }else{
            result = template;
        }

        result = result.replace("{{NAME}}", value.name);
        result = result.replace("{{CURRICULUM}}", value.curriculum_pt);
        result = result.replace("{{PHOTO_URL}}", value.photo_url || "images/team/homem.jpg");
        result = result.replace("{{SUBJECT}}", subject+ ": "+ value.subject);
        result = result.replace("{{STARTING_DATE}}", startingDate + ": "+value.starting_date);
        result = result.replace("{{LATTES}}", value.lattes || "#");
        result = result.replace("{{WEBPAGE}}", value.personal_webpage || "#");
        result = result.replace("{{TITLE}}", value.title);
        result = result.replace("{{ENDING_DATE}}", value.ending_date);

        if(value.ending_date){
            $(past).append(result);
        }else{
            $(current).append(result);
        }
    });
}
