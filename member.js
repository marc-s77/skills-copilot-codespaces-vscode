function skillsMember() {
  // Get the member skills
  var memberSkills = member.skills;
  // Get the member skills length
  var memberSkillsLength = memberSkills.length;
  // Check if the member skills length is greater than 0
  if (memberSkillsLength > 0) {
    // Loop through the member skills
    for (var i = 0; i < memberSkillsLength; i++) {
      // Get the member skill
      var memberSkill = memberSkills[i];
      // Get the member skill name
      var memberSkillName = memberSkill.name;
      // Get the member skill level
      var memberSkillLevel = memberSkill.level;
      // Check if the member skill level is greater than 0
      if (memberSkillLevel > 0) {
        // Print the member skill name and level
        console.log(memberSkillName + " - " + memberSkillLevel);
      }
    }
  }
}