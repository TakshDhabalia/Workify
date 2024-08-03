document.addEventListener('DOMContentLoaded', function() {
    // Add New Skill Function
    window.addSkill = function() {
        const skill = prompt("Enter a new skill:");
        if (skill) {
            const skillList = document.getElementById('skills-list');
            const newSkillItem = document.createElement('li');
            newSkillItem.textContent = skill;
            skillList.appendChild(newSkillItem);
        }
    };

    // Smooth Scroll for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Change Email Color on Scroll
    window.addEventListener('scroll', function() {
        const emailElement = document.getElementById('email');
        if (window.scrollY > 100) {
            emailElement.style.color = 'red';
        } else {
            emailElement.style.color = '';
        }
    });
});


db.Hotel.updateOne(
    { "title": "Movie1" },
    { $set: { "directors.0.Address": "Updated Address1" } }
  )
  
  // Add one record if it doesn’t exist else update ($upsert)
  db.Hotel.updateOne(
    { "title": "New Movie" },
    {
      $set: {
        "title": "New Movie",
        "year": "2022",
        "directors": [
          {
            "Name": "Another Director",
            "DOB": "1982-07-01",
            "Address": "Another Address",
            "TelNo": "5566778899"
          }
        ],
        "writers": [
          {
            "Name": "Another Writer",
            "DOB": "1987-08-01",
            "Address": "Another Address",
            "TelNo": "6677889900"
          }
        ],
        "stars": [
          {
            "Name": "Another Star",
            "DOB": "1992-09-01",
            "Address": "Another Address",
            "TelNo": "7788990011"
          }
        ],
        "tags": ["mystery"],
        "likes": 300
      }
    },
    { upsert: true }
  )
  
  // Remove a few documents
  db.Hotel.deleteMany({ "likes": { $lt: 100 } })
  
  // Use $gte, $gt, $lt operators and fire queries
  db.Hotel.find({ "year": { $gte: "2020" } })
  db.Hotel.find({ "likes": { $gt: 100 } })
  db.Hotel.find({ "likes": { $lt: 200 } })
  
  // Find records having title ‘3 idiots’
  db.Hotel.find({ "title": "3 idiots" })
  
  // Find records where likes are more than 200
  db.Hotel.find({ "likes": { $gt: 200 } })