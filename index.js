const students = [
    {name : "Ali ,", grades: [80,90,70]},
    {name : "Ayşe", grades: [85,75,95] }
]

const ortalama = (arr)=>{
    arr.forEach((item)=>{
        let toplam = 0;
        item.grades.forEach((not)=>{
            toplam += not;
        })
        const ortalama = toplam / item.grades.length;
        console.log(ortalama);
    });
}

