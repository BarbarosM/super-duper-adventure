function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberName = document.getElementById("memberName");
    var memberSkills = document.getElementById("memberSkills");
    var memberImg = document.getElementById("memberImg");
    var memberDesc = document.getElementById("memberDesc");

    memberName.innerHTML = "Member Name";
    memberSkills.innerHTML = "Member Skills";
    memberImg.src = "img/placeholder.png";
    memberDesc.innerHTML = "Member Description";

    member.style.display = "none";
    skills.style.display = "block";
}