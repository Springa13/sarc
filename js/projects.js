function fetchJSONData(request_num) {
    fetch("json/projects.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            doWhatIWant(data, request_num))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData(0)

function doWhatIWant(data, request_num) {

    // Assuming you have a <div> with id="output" in your HTML
    const outputDiv = document.getElementById('project-items');
    former = (3*request_num)
    current = 3 + (3*request_num)
    if (request_num == 0) {
        var load = document.getElementById("load"); //grab the element
        load.style.display = 'block'
    }
    for (let i=former; i < current; i++) {
        if (i < data.projects.length) {
            const item = document.createElement('div')
            item.className = 'project-item'
            item.id = 'project-item'
            outputDiv.appendChild(item);

            const heading = document.createElement('h1')
            heading.textContent = data.projects[i].title
            item.appendChild(heading)

            const summary = document.createElement('p')
            summary.textContent = data.projects[i].summary
            item.appendChild(summary)

            const arrow = document.createElement('p')
            arrow.innerHTML = '&#8594;'  
            arrow.className = 'arrow'      
            item.appendChild(arrow)
        }
        
        if (i == data.projects.length) {
            var element = document.getElementById("load"); //grab the element
            element.style.display = 'none';
        }
        
    }
    
    
    
    
    
}



// var element = document.getElementById("project-item"); //grab the element
// var main = document.getElementById("project-items");
// element.onclick = function() {
//     main.style.display = 'none';
// };

var element = document.getElementById("load"); //grab the element
var counter = 0;
element.onclick = function() {
    counter = counter + 1;
    fetchJSONData(counter)
};