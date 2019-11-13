function getUserFollower() {
  let item = document.createElement("div");
  fetch("https://api.github.com/users/Zakintaliban/followers")
    .then(res => res.json())
    .then(follower => {
      follower.map(data => {
        const img = document.createElement("img");
        let divider = document.createElement("div");
        let imgHolder = document.createElement("div");
        let nameLink = document.createElement("a");
        let paragraphInfo = document.createElement("p");

        img.setAttribute("src", data.avatar_url);
        img.className = "img-fluid max-width:100%";
        nameLink.innerText = data.login;
        nameLink.href = data.html_url;
        divider.className = "col-md-4";
        imgHolder.className = "card mb-4 shadow-sm";
        item.className = "row";
        paragraphInfo.innerText = data.id;

        imgHolder.append(img);
        divider.append(imgHolder);
        item.append(divider);
        imgHolder.append(nameLink);
        imgHolder.append(paragraphInfo);

        document.getElementById("main").append(item);
      });
    });
}

getUserFollower();
