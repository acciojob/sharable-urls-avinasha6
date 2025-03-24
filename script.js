// your code here
document.getElementById("button").addEventListener("click", function () {
            let name = document.getElementById("name").value.trim();
            let year = document.getElementById("year").value.trim();
            
            let baseUrl = "https://localhost:8080/";
            let queryParams = [];

            if (name) {
                queryParams.push(`name=${encodeURIComponent(name)}`);
            }
            if (year) {
                queryParams.push(`year=${encodeURIComponent(year)}`);
            }

            let newUrl = baseUrl + (queryParams.length ? "?" + queryParams.join("&") : "");
            document.getElementById("url").textContent = newUrl;
        });