let dynDep = {
  engineering: [
    "Architecture and Spatial Panning",
    "Chemecal Engineering",
    "Civil engineering",
    "Communication Systems Engineering",
    "Electonic and Computer Systems Engineering",
    "Electonic Systems Software Engineering",
    "Medical Engineering",
  ],
  pharmacy: ["pharmacy"],
  adminstrative: [
    "Accounting Arabic",
    "Accounting English",
    "Business Adminstration Arabic",
    "Business Adnimstration D",
    "Business Adnimstration English",
    "Shataf Accounting Arabic",
    "Sharaf Business Adminstration Arabic",
  ],
  laboratory: [
    "Medical Labratory Science",
    "Microbiology",
    "Pathology",
    "Parasitology",
    "Clinical Chemistry",
    "Hematology",
  ],
  medical: ["Medicine"],
  IT: [
    "Computer Scince",
    "Information and Communication Technology",
    "Information System Bachelor",
    "Information tecnology bachelor",
    "Information tecnology Diploma",
    "Network",
  ],
  dentistry: ["dentistry"],
  nursing: ["nursing"],
};

let college = document.getElementById("college"),
  department = document.getElementById("dep");

college.addEventListener("change", function () {
  let dynamic = dynDep[this.value];
  while (department.options.length > 0) {
    department.options.remove(0);
  }
  Array.from(dynamic).forEach((e) => {
    let option = new Option(e, e);
    department.appendChild(option);
  });
  // department.option = new Option {this.value}
});
