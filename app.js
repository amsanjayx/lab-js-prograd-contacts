//Enter your code here..
let users = () => 
{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => 
        {
            return data.json()
        })
        .then((data) => 
        {
            let message = document.querySelector("#message")
            let h2 = document.createElement("h2")
            h2.innerHTML = 'Lists of Users'
            message.append(h2)
            data.map((ele) => 
            {
                displaycontact(ele);
            })
        })

    .catch((error) => 
    {
        console.log(error);
    })
}

document.querySelector("#btnGet").addEventListener("click", users);

function displaycontact(user) 
{
    let message = document.querySelector("#message");
    let player = document.createElement("div");
    let name = document.createElement("div");
    let email = document.createElement("div");
    let phone = document.createElement("div");
    let website = document.createElement("div");
    let company = document.createElement("div"); 
    let city = document.createElement("div");
    let zipcode = document.createElement("div");

    player.setAttribute("class", "player");
    name.setAttribute("class", "strength");
    name.innerHTML = 'Name : ' + user.name;
    email.innerHTML = 'Email : ' + user.email;
    phone.innerHTML = 'Phone : ' + user.phone;
    website.innerHTML = 'Website : ' + user.website;
    company.innerHTML = 'Company : ' + user.company.name;
    city.innerHTML = 'City : ' + user.address.city;
    zipcode.innerHTML = 'Zipcode : ' + user.address.zipcode;

    player.appendChild(name);
    player.appendChild(email);
    player.appendChild(phone);
    player.appendChild(website);
    player.appendChild(company);
    player.appendChild(city);
    player.appendChild(zipcode);
    message.appendChild(player);
}
