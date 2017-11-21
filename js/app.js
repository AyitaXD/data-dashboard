/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

function alumnas() {
    var contenedor=document.getElementById("overview");
		contenedor.remove(overview);
    var section=document.createElement("section");
    section.setAttribute("id", "alumnas")

    for (var i = 0; i < data.SCL["2017-2"].students.length; i++) {
  		var students, bphoto, name, techPoints, techSkills, lifePoints, lifeSkills,

    students=document.createElement("div");
    students.setAttribute("class", "students");

    var content=document.createElement("div");
    content.setAttribute("id", "bPhoto");
    var url=document.createElement("img");
    url.classList.add("url");

    var name=document.createElement("div");
    name.setAttribute("id", "name");
    var p=document.createElement("p");

    var techPoints=document.createElement("div");
    techPoints.setAttribute("id", "techPoints");
    var techSkills=document.createElement("p");

    var lifePoints=document.createElement("div");
    lifePoints.setAttribute("id", "lifePoints");
    var lifeSkills=document.createElement("p");

    section.appendChild(students);
    students.appendChild(content);
    content.appendChild(url);
    students.appendChild(name);
    name.appendChild(p);
    students.appendChild(techPoints);
    techPoints.appendChild(techSkills);
    students.appendChild(lifePoints);
    lifePoints.appendChild(lifeSkills);
    document.body.appendChild(section);

    url.setAttribute("src", data.SCL["2017-2"].students[i].photo);
    p.innerHTML=data.SCL["2017-2"].students[i].name;
    techSkills.innerHTML= "Tech Skills";
    lifeSkills.innerHTML= "Life Skills";

  }
  }

function overview() {
    var button=document.getElementById("alumnas");
    button.remove(alumnas);
    var contenedor=document.getElementById("overview");

  }
