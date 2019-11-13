function getUserFollower() {
  let div = document.createElement("div");
  let item = document.createElement("div");
  fetch("https://api.github.com/users/Zakintaliban/followers")
    .then(res => res.json())
    .then(follower => {
      follower.map(data => {
        const img = document.createElement("img");
        let rowow = document.createElement("div");
        let imgHolder = document.createElement("div");
        let namename = document.createElement("a");
        let infoinfo = document.createElement("p")

        img.setAttribute("src", data.avatar_url);
        img.className = "img-fluid max-width:100%";
        namename.innerText = data.login;
        namename.href = data.html_url
        rowow.className = "col-md-4";
        imgHolder.className = "card mb-4 shadow-sm";
        item.className = "row";
        infoinfo.innerText = data.id

        imgHolder.append(img);
        rowow.append(imgHolder);
        item.append(rowow);
        imgHolder.append(namename);
        imgHolder.append(infoinfo)

        document.getElementById("main").append(item);
      });
    });
}

getUserFollower();
